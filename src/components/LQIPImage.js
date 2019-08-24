import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isSSR } from 'constants';
import { fadeOut } from 'style/animations.css';

/**
 * This will inline a low quality image place holder
 * and replace it with the original image once it has loaded.
 *
 */
const LQIPImage = ({ imageId, url, alt }) => {
  const originalImage = `${url}/-/resize/x350/-/format/auto/`;
  const placeholder = `${url}/-/format/auto/-/resize/x200/-/blur/50/`;

  const [imageLoaded, setImageLoaded] = useState(!isSSR && imageIsCached(originalImage));

  useEffect(() => {
    if (!imageLoaded) {
      const image = new Image();
      image.src = originalImage;
      image.onload = () => setImageLoaded(true);
    }
  }, [imageLoaded]);

  return (
    <Container>
      {!imageLoaded ? (
        <ImagePlaceholder id={imageId} src={placeholder} alt={alt} />
      ) : (
        <>
          <OriginalImage id={imageId} alt={alt} src={originalImage} />
          <ImagePlaceholderAnimate src={placeholder} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 40rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ImagePlaceholder = styled(StyledImage)``;

const ImagePlaceholderAnimate = styled(ImagePlaceholder)`
  position: absolute;
  left: 0;
  animation: ${fadeOut} 0.6s ease forwards;
`;

const OriginalImage = styled(StyledImage)`
  position: relative;
`;

function imageIsCached(src) {
  const image = new Image();
  image.src = src;

  return image.complete;
}

export default LQIPImage;
