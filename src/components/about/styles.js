import styled from 'styled-components';
import Img from "gatsby-image"
import { theme, mixins, media } from '@templates';
const { colors, fonts, fontSizes } = theme;


export const StyledContainer = styled.section`
    margin: 0 auto;
    padding: ${props => props.paddingTop} 0 150px 0;
    max-width: 1000px;
    position: relative;
    font-size: ${fontSizes.lg};
    ${media.tablet`padding-top: 100px; padding-bottom: 100px`}
`

export const StyledHeading = styled.h1`
    font-size: ${fontSizes.h3}
`

export const StyledFlexContainer = styled.div`
    ${mixins.flexBetween};
    align-items: flex-start;
    ${media.tablet`display: block;`};
`;

export const StyledContent = styled.div`
  width: 60%;
  max-width: 520px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

export const SkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
`;

export const Skill = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${fonts.OpenSans};
    font-size: ${fontSizes.sm};
    color: ${colors.danteBrown};
    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.danteBlue};
        font-size: ${fontSizes.sm};
        line-height: 12px;
    }
`;

export const StyledAvatarContainer = styled.div`
  position: relative;
  width: 50%;
  max-width: 400px;
  margin-left: 40px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;

export const StyledAvatar = styled(Img)`
    position: relative;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
`;

export const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.danteBrown};
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`