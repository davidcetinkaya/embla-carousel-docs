import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useTabAccess } from 'hooks/useTabAccess'
import { headingStyles } from './heading'
import { blockquoteStyles } from './blockquote'
import { listStyles } from './list'
import { codeStyles } from './code'

const Wrapper = styled.div<{ $isTabbing: boolean }>`
  ${blockquoteStyles};
  ${listStyles};
  ${codeStyles};
  ${headingStyles};

  color: ${({ theme }) => theme.textBody};

  pre:focus {
    outline: ${({ $isTabbing }) => !$isTabbing && 0};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hgroup,
  ul,
  ol,
  dl,
  blockquote,
  p,
  address,
  table,
  fieldset,
  figure,
  pre,
  hr,
  ul,
  ol,
  dd,
  blockquote code,
  kbd,
  samp {
    margin-bottom: 2.4rem;
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`

type PropType = PropsWithChildren<{}>

export const MdxStyles = (props: PropType) => {
  const { children, ...restProps } = props
  const isTabbing = useTabAccess()

  return (
    <Wrapper $isTabbing={isTabbing} {...restProps}>
      {children}
    </Wrapper>
  )
}
