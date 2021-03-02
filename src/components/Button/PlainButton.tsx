import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { tabAccessStyles, OUTLINE_SIZE } from 'components/TabAccess'
import { useTabAccess } from 'hooks/useTabAccess'
import styled from 'styled-components'

const Wrapper = styled.button<{ $isTabbing: boolean }>`
  -webkit-tap-highlight-color: var(--text-high-contrast);
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  outline-offset: -${OUTLINE_SIZE};
  ${tabAccessStyles};
`

export type PropType = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

export const PlainButton = (props: PropType) => {
  const { children, ...restProps } = props
  const isTabbing = useTabAccess()

  return (
    <Wrapper $isTabbing={isTabbing} {...restProps}>
      {children}
    </Wrapper>
  )
}
