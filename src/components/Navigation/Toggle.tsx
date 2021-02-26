import React from 'react'
import styled, { css } from 'styled-components'
import { createSquareSizeStyles, hiddenAtBreakpointStyles } from 'utils'
import { PropType } from 'components/Button/PlainButton'
import { FRAME_SPACING } from 'components/SiteLayout'
import { CtaButton } from 'components/Button'
import { useNavigation } from 'hooks'
import { LAYERS } from 'consts'

const Wrapper = styled(CtaButton)`
  ${createSquareSizeStyles('5.6rem')};
  z-index: ${LAYERS.NAVIGATION + LAYERS.STEP};
  bottom: ${FRAME_SPACING};
  right: ${FRAME_SPACING};
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  ${hiddenAtBreakpointStyles};
`

const Burger = styled.div<{ $isOpen: boolean }>`
  position: relative;
  > span {
    background-color: ${({ theme }) => theme.backgroundSite};
    display: block;
    height: 2px;
    border-radius: 2px;
    position: relative;
    width: 25px;
    transition: background-color 0.2s;
    &:before,
    &:after {
      background-color: ${({ theme }) => theme.backgroundSite};
      position: absolute;
      content: "";
      border-radius: 2px;
      display: block;
      height: 100%;
      width: 100%;
      transition: transform 0.2s;
    }
    &:before {
      transform: translateY(8px);
    }
    &:after {
      transform: translateY(-8px);
    }

    ${({ $isOpen }) => css`
      background-color: ${$isOpen && 'transparent'};
      &:before {
        transform: ${$isOpen && 'rotate(-45deg) translateY(0)'};
      }
      &:after {
        transform: ${$isOpen && 'rotate(45deg) translateY(0)'};
      }
    `}};
  }
`

export const Toggle = (props: PropType) => {
  const { isOpen } = useNavigation()

  return (
    <Wrapper {...props} $hidden="minSm">
      <Burger $isOpen={isOpen} aria-hidden="true">
        <span />
      </Burger>
    </Wrapper>
  )
}
