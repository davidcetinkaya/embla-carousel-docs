import { css } from 'styled-components'

export const OUTLINE_SIZE = '0.2rem'

export const tabAccessStyles = css<{ $isTabbing: boolean }>`
  &:focus {
    outline: ${({ theme, $isTabbing }) =>
      $isTabbing ? `${theme.brandPrimary} solid ${OUTLINE_SIZE}` : 0};
  }
`
