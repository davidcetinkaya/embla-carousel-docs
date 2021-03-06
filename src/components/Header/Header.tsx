import React from 'react'
import styled, { css } from 'styled-components'
import { Frame } from 'components/SiteLayout'
import { breakpoints, LAYERS } from 'consts'
import { Actions } from './Actions'
import { Logo } from './Logo'

export const HEADER_HEIGHT = '6rem'

const HEIGHT = css`
  height: ${HEADER_HEIGHT};
`

const Wrapper = styled.header`
  ${HEIGHT};
`

const Fixed = styled.div`
  ${HEIGHT};
  z-index: ${LAYERS.HEADER};
  background-color: var(--background-site);
  top: 0;
  left: 0;
  right: 0;
  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    top: calc(100% - 0.5rem);
    left: 0;
    right: 0;
    height: 3rem;
    pointer-events: none;
    background: linear-gradient(
      to top,
      rgba(var(--background-site-rgb-value), 0) 0,
      var(--background-site) 100%
    );
  }
  position: absolute;
  ${breakpoints.minSm} {
    position: fixed;
  }
`

const Content = styled(Frame)`
  ${HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Header = () => {
  return (
    <Wrapper>
      <Fixed>
        <Content>
          <Logo />
          <Actions />
        </Content>
      </Fixed>
    </Wrapper>
  )
}
