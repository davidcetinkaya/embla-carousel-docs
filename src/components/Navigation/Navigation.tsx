import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import styled, { css } from 'styled-components'
import FocusTrap from 'focus-trap-react'
import { useEventListener, useNavigation } from 'hooks'
import { hiddenAtBreakpointStyles } from 'utils'
import { breakpoints, LAYERS } from 'consts'
import { Toggle } from './Toggle'
import { rgba } from 'polished'
import { Menu } from './Menu'

const Wrapper = styled.nav`
  height: 100%;
`

const Nav = styled.div<{ $isOpen: boolean }>`
  ${breakpoints.maxSm} {
    ${({ $isOpen }) => css`
      transform: ${!$isOpen && 'translateX(-100%)'};
      visibility: ${!$isOpen && 'hidden'};
    `};
    z-index: ${LAYERS.NAVIGATION};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${breakpoints.minSm} {
    position: sticky;
    top: 9rem;
    bottom: auto;
    left: auto;
  }
`

const Overlay = styled.div`
  background-color: ${({ theme }) => rgba(theme.backgroundSite, 0.6)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${hiddenAtBreakpointStyles};
`

type PropType = PropsWithChildren<{
  collapsed: boolean
}>

export const Navigation = (props: PropType) => {
  const { collapsed } = props
  const { isOpen, toggleNavigation, closeNavigation } = useNavigation()
  const id = collapsed ? 'main-navigation-menu' : undefined
  const role = collapsed ? 'dialog' : undefined
  const ariaModal = collapsed ? 'true' : undefined
  const toggleAction = isOpen ? 'Hide' : 'Show'

  const onKeyUp = useCallback(
    ({ keyCode }) => {
      if (keyCode === 27) closeNavigation()
    },
    [closeNavigation],
  )

  useEventListener({
    type: 'keyup',
    listener: onKeyUp,
  })

  useEffect(() => {
    if (!collapsed) closeNavigation()
    return () => closeNavigation()
  }, [collapsed, closeNavigation])

  return (
    <FocusTrap active={isOpen}>
      <Wrapper
        role={role}
        aria-modal={ariaModal}
        aria-labelledby={id}
        aria-label="Main Navigation Menu"
        {...props}
      >
        <Toggle
          id={id}
          onClick={toggleNavigation}
          aria-expanded={isOpen}
          aria-label={`${toggleAction} Main Navigation Menu`}
        />
        <Nav $isOpen={isOpen}>
          <Overlay onPointerUp={closeNavigation} $hidden="minSm" />
          <Menu />
        </Nav>
      </Wrapper>
    </FocusTrap>
  )
}
