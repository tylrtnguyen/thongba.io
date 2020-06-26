import styled from 'styled-components';
import { theme, media } from '@templates';
const { colors, fontSizes } = theme

export const StyledContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background: ${colors.danteWhite};
    border-top: 1px solid ${colors.danteBrown};
    * {
        margin: 0;
        padding: 0;
    }
`

export const StyledLogo = styled.div`
    margin-bottom: 15px;
`

export const StyledCopyright = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 600;
  color: #656565;
  text-align: center;
  .heart {
    color: #FF7763;
  }
  .copytext {
    display: block;
    padding: 10px 0 5px;
    ${media.thone`
      display: inline-block;
    `};
  }
  a {
    color: #282a2d;
    text-decoration: none;
  }
`



