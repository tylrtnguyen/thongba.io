import React from "react";
import { socialMedia } from "@config";
import { FormattedIcon } from "@assets/icons";
import {
    StyledSocial,
    StyledIcon
} from './styles';

const HorizontalSocial = () => (
  <StyledSocial>
    {socialMedia.map(({ name, url }, index) => (
      <StyledIcon
        key={index}
        name={name}
        href={url}
        target="_bank"
        rel="nofollow noopener noreferrer"
        aria-label={name}
      >
        <FormattedIcon name={name}></FormattedIcon>
      </StyledIcon>
    ))}
  </StyledSocial>
)

export default HorizontalSocial;
