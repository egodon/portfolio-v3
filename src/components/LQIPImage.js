import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { isSSR } from 'constants';

/**
 * This will inline a low quality image place holder
 * and replace it with the original image once it has loaded.
 */
const LQIPImage = ({ imageId, imageUrl, alt }) => {
  const originalImage = '/static/images/' + imageUrl;

  useEffect(() => {
    const image = document.getElementById(imageId);
    image.src = originalImage;
  });

  const src =
    isSSR || !imageIsCached(originalImage)
      ? require(`../../static/images/${imageUrl}?lqip`)
      : originalImage;

  return <StyledImage id={imageId} alt={alt} src={src} />;
};

const blurEffect = keyframes`
  from {
    filter: blur(2px);
  }

  to {
    filter: blur(0)
  }
`;

const StyledImage = styled.img`
  width: 100%;
  min-width: 35rem;
  max-width: 35rem;
  height: 20rem;
`;

function imageIsCached(src) {
  var image = new Image();
  image.src = src;

  return image.complete;
}

export default LQIPImage;
