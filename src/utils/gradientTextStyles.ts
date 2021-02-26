import { supportsStyles } from 'consts'
import { css } from 'styled-components'

export const gradientTextStyles = css`
  color: ${({ theme }) => theme.brandPrimary};
  ${supportsStyles.gradientText} {
    background-image: ${({ theme }) =>
      `linear-gradient(45deg, ${theme.brandPrimary}, ${theme.brandSecondary})`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
