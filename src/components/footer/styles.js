import styled from 'styled-components';
import { theme, media } from '@templates';
const { colors } = theme

export const StyledContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background: ${colors.ghostWhite};
    border-top: 1px solid ${colors.danteBrown};
    * {
        margin: 0;
        padding: 0;
    }
`
export const StyledSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const StyledIcon = styled.a`
  padding: 12px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 25px;
    height: 25px;
  }
`



export const StyledLogo = styled.div`
    margin-bottom: 15px;
    img {
        width: 50px;
    }
`

export const StyledCopyright = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #656565;
  text-align: center;
  .heart {
    color: #ff7763;
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



