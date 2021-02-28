import React from 'react'
import styled from 'styled-components'
import { breakpoints, LAYERS } from 'consts'
import { useRoutes } from 'hooks'
import { FRAME_SPACING } from 'components/SiteLayout'
import { hiddenAtBreakpointStyles } from 'utils'
import { Logo, HEADER_HEIGHT } from 'components/Header'
import { Links } from 'components/Footer'
import { ThemeToggle } from 'components/Theme'
import { SubMenu } from './SubMenu'

const MAX_WIDTH = '35rem'
const HEADING_HEIGHT = '3.4rem'
const MAX_HEIGHT_SM_DOWN = `calc(100vh - ${HEADER_HEIGHT})`
const MAX_HEIGHT_SM_UP = `calc(100vh - 9rem - ${HEADING_HEIGHT})`

const Wrapper = styled.div`
  background-color: var(--background-site);
  position: relative;
  height: 100%;

  ${breakpoints.maxSm} {
    z-index: ${LAYERS.STEP};
    padding-right: ${FRAME_SPACING};
    padding-left: ${FRAME_SPACING};
    max-width: ${MAX_WIDTH};
  }
`

const Content = styled.div`
  position: relative;
  &:before,
  &:after {
    height: 2.2rem;
    display: block;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    background: linear-gradient(
      to top,
      rgba(var(--background-site-rgb-value), 0) 0,
      var(--background-site) 100%
    );

    ${breakpoints.maxSm} {
      top: -1rem;
    }
  }
`

const ScrollArea = styled.ul`
  overflow: auto;
  position: relative;
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  max-height: ${MAX_HEIGHT_SM_UP};

  ${breakpoints.maxSm} {
    padding-top: 0.8rem;
    max-height: ${MAX_HEIGHT_SM_DOWN};
  }
`

const Header = styled.div`
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${hiddenAtBreakpointStyles};
`

const Heading = styled.h4`
  height: ${HEADING_HEIGHT};
  line-height: ${HEADING_HEIGHT};
  font-weight: 700;
  font-size: 2rem;
  ${hiddenAtBreakpointStyles};
`

const MiscMenu = styled(Links)`
  flex-direction: column;
  padding-top: 1.4rem;
`

export const Menu = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <Wrapper>
      <Header $hidden="minSm">
        <Logo />
        <ThemeToggle />
      </Header>
      <Heading $hidden="maxSm">Documentation</Heading>
      <Content>
        <ScrollArea>
          {routes.map((route) => (
            <li key={route.id}>
              <SubMenu route={route} />
            </li>
          ))}
          <li>
            <MiscMenu />
          </li>
        </ScrollArea>
      </Content>
    </Wrapper>
  )
}
