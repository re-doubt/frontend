import { styled } from '@mui/material'

export const StyledSection = styled('section')(
	({ theme }) => `
	background-color: ${theme.palette.secondary.main};
    border-radius: 24px;
	box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.03);
	padding: 16px;
`
)
