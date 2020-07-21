import styled from 'styled-components';
import { theme, mixins, media, Section } from '@templates';
const { fontSizes, colors } = theme;

export const StyledContainer = styled(Section)`
    padding-top: 70px;
    text-align: left;
    max-width: 700px;
    font-family: Montserrat-Regular;
    ${media.thone`padding: 0`};
`;

export const StyledHeading = styled.h2`
    font-family: Montserrat-SemiBold;
    font-size: ${fontSizes.h3};
`

export const StyledParagraph = styled.p`
    font-size: ${fontSizes.md};
    padding: 15px 0;
    line-height: 1.4;
`

export const StyledFormGroup = styled.div`
    margin-bottom: 2rem;
    ${media.thone`margin-bottom: 1rem;`};
`;

export const StyledInput = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    transition: ${theme.transition};
    text-align: left;
    border: 1px solid ${colors.black};
    border-radius: ${theme.borderRadius};
    padding: 0.6rem 1rem;
    -webkit-appearance: none;
    color: ${colors.danteBrown};
    ${media.thone`margin-bottom: 0;`};
    &:focus {
        border-color: #212121;
        transition: all 0.2s ease;
    };

    ${({error}) => error && `border-color: red;`
    };

    ${({textarea}) => textarea && `
        resize: vertical;
        min-height: 8rem;
        margin-top: 16px;
    `};
`;

export const StyledCenter = styled.div`
    ${mixins.flexCenter};
`

export const StyledError = styled.div`
    color: ${colors.error};
    font-size: ${fontSizes.sm};
`;

export const StyledText = styled.h4`
    font-size: ${fontSizes.md};
    color: ${colors.danteBrown};
    margin: 10px 0 0 0;
`;

export const StyledSendButton = styled.button`
  background-image: linear-gradient(10deg, #0072ff 0%, #00c6ff 100%);
  cursor: pointer;
  color: ${colors.danteWhite};
  border-radius: 40px;
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