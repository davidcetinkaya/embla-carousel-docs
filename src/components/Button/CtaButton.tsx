import styled, { css } from 'styled-components'
import { PlainButton } from './PlainButton'
import { supportsStyles } from 'consts'

export const ctaButtonStyles = css`
  line-height: 1.15;
  border-radius: 3rem;
  padding: 1.7rem 3.5rem;
  font-weight: bold;
  display: inline-flex;
  color: ${({ theme }) => theme.backgroundSite};
  background-color: ${({ theme }) => theme.brandPrimary};
  ${supportsStyles.gradientText} {
    background-image: ${({ theme }) =>
      `linear-gradient(45deg, ${theme.brandPrimary}, ${theme.brandSecondary})`};
  }
`

export const CtaButton = styled(PlainButton)`
  ${ctaButtonStyles};
`
