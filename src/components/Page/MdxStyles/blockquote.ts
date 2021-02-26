import { css } from 'styled-components'

export const blockquoteStyles = css`
  blockquote {
    padding-left: 2.4rem;
    border-left: ${({ theme }) => `0.4rem solid ${theme.detailLowContrast}`};

    > *:last-child {
      margin-bottom: 0;
    }
  }
`
