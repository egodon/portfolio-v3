import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  imageId: string;
  url: string;
  alt: string;
};

/**
 * This will inline a low quality image place holder
 * and replace it with the original image once it has loaded.
 *
 */
const LQIPImage: React.FC<Props> = ({ imageId, url, alt }) => {
  const originalImage = `${url}/-/resize/x350/-/format/auto/`;
  const placeholder = `${url}/-/format/auto/-/resize/x200/-/blur/50/`;

  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    let image: HTMLImageElement = new Image();
    image.src = originalImage;
    image.onload = () => setImgSrc(originalImage);
    return () => {
      if (image.src) {
        image.onload = () => null;
      }
    };
  }, []);

  return (
    <Container>
      <StyledImage id={imageId} src={imgSrc} alt={alt} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  max-width: 40rem;
`;

const StyledImage = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
`;

export default LQIPImage;
