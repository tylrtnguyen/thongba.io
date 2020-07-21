
import styled from 'styled-components';
import { theme, media } from '@templates'
const { colors, fontSizes } = theme;

const BigButton = styled.button`
  background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
  cursor: pointer;
  color: ${colors.danteWhite};
  border-radius: 40px;
  font-family: Montserrat-Regular;
  font-size: ${fontSizes.md};
  margin-top: 20px;
  width: 160px;
  height: 50px;
  box-shadow: 0 4px 0px -4px #6a93ff;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }

  ${media.phablet`flex: unset;`}

  svg {
      width: 30px;
      height: 30px;
      padding-right: 10px;
  }
`

export default BigButton