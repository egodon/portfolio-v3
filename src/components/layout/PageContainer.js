import styled from 'styled-components';
import { media } from 'style';

export default styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0 2.8rem;
  padding-top: 16%;
  width: 100%;
  overflow-y: auto;
  z-index: 2;

  ${media.mobile`
    padding-top: 24%;
  `}
`;
