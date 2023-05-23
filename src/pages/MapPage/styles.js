import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Root = styled.div`
`

export const MapContainer = styled.div`
  position: relative;
  width: fit-content;
`

export const MapPointer = styled(Link)`
  display: block;
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  > div {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0);
  }
  img {
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out, margin 0.3s ease-in-out;
  }
  > div > img:first-of-type {
    width: ${props => props.isSmall ? '32px' : '64px'};
  }
  > div > img:nth-of-type(2) {
    width: ${props => props.isSmall ? '25px' : '50px'};
    height: ${props => props.isSmall ? '25px' : '50px'};
    margin: ${props => props.isSmall ? '4px 0 0 4px' : '7px 0 0 7px'};
    filter: ${props => props.blured ? 'blur(2px)' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
  }
  :before {
    content: '';
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: rgba(166, 208, 255, 0.3);
    border: 1px solid rgba(166, 208, 255, 0.6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.withArea ? 'block' : 'none'};
    pointer-events: none;
  }
`

