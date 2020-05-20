import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    padding-top: 7rem;

    ${({ theme }) =>
    theme === 'dark' &&
    `
		background: #212121;
	`};
`

