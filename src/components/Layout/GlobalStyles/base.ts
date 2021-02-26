import { css } from 'styled-components'

export const baseStyles = css`
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${({ theme }) => theme.backgroundSite};
    color: ${({ theme }) => theme.textHighContrast};
    line-height: 1.65;
    font-size: 1.6rem;
  }
`
