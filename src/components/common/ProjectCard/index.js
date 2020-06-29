import React from 'react';
import {
    StyledContainer,
    StyledCard,
    StyledCardHeader,
    StyledThumbnail,
    StyledCardBody,
    StyledButtonContainer,
    StyledButton
} from './styles'

const ProjectCard = () => {
    return (
        <StyledContainer>
            <StyledCard>
                <StyledCardHeader>
                    <StyledThumbnail />
                </StyledCardHeader>
                <StyledCardBody>
                    <StyledButtonContainer>
                        <StyledButton />
                    </StyledButtonContainer>
                </StyledCardBody>
            </StyledCard>
        </StyledContainer>
    )
}

export default ProjectCard;