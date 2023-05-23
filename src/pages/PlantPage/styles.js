import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Root = styled.div`
`

export const CardContainer = styled.div`
  position: relative;
  background-color: #A3C69E;
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

export const CardIconDummy = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 180px;
  height: 180px;
  margin: 24px 0;
`

export const CardIcon = styled.img`
  filter: ${props => props.blured ? 'blur(4px)' : 'none'};
  width: 180px;
  height: 180px;
  margin: 20px;
`

export const CardBg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  object-fit: cover;
`

export const CardPlate = styled.div`
  margin: 0 24px;
  background: #fcfcf7;
  border-radius: 40px 40px 0 0;
  border: 3px solid black;
  border-bottom: none;
  z-index: 1;
  position: absolute;
  bottom: 0;
  width: 95%;
  padding: 24px 0;
`

export const CardTitle = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
  padding: 0 24px;
`

export const CardDescription = styled.div`
  font-size: 16px;
  padding: 0 24px;
`

export const CardOptions = styled.div`
  width: 100%;
  flex-grow: 10;
  padding: 0 24px;
`

export const CardOption = styled.div`
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding: 8px;
  margin: 8px 0;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  :hover {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
`

export const CloseButton = styled(Link)`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 64px;
  height: 64px;
  background: ${props => props.withBg ? '#fcfcf7' : 'none'};
  border-radius: 50%;
  opacity: 0.5;
  display: block;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
  }
`