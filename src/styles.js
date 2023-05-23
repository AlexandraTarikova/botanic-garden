import styled from 'styled-components';

export const CombinedWrapper = styled.div`
  position: relative;
  > div:nth-child(1) {
    display: none;
  }
  @media screen and (min-width: 480px) {
    /* overflow: hidden;
    max-height: 100vh;
    :after {
      content: '';
      position: absolute;
      display: block;
      top: 0%;
      left: 0%;
      background-color: rgba(255,255,255,0.3);
      width: 100%;
      height: 100%;
    } */
    > div:nth-child(1) {
      display: block;
    }
    > div:nth-child(2) {
      position: fixed;
      z-index: 1;
      right: 0;
      top: 0;
    }
  }
`