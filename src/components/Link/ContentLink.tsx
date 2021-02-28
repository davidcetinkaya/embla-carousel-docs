import React from 'react'
import styled from 'styled-components'
import { PlainLink, PropType } from './PlainLink'
import { gradientTextStyles } from 'utils'
import { supportsStyles } from 'consts'

const Wrapper = styled(PlainLink)`
  ${gradientTextStyles};
  border-bottom: 0.1rem solid var(--brand-primary);
  ${supportsStyles.gradientText} {
    border-image: linear-gradient(
        90deg,
        var(--brand-primary),
        var(--brand-secondary)
      )
      20%;
  }
  border-top: 0;
  border-left: 0;
  border-right: 0;
`

export const ContentLink = (props: PropType) => {
  return <Wrapper {...props} />
}
