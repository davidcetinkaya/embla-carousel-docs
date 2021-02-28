import React from 'react'
import styled, { css } from 'styled-components'
import { ThemeToggle } from 'components/Theme'
import { NavigationLink, PlainLink } from 'components/Link'
import { breakpoints, URLS } from 'consts'
import { useRoutes } from 'hooks'
import { hiddenAtBreakpointStyles } from 'utils'

const ITEM_SPACING_SM_UP = '3rem'
const ITEM_SPACING_SM_DOWN = '2.5rem'

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1;
  margin-left: -${ITEM_SPACING_SM_DOWN};
  ${breakpoints.minSm} {
    margin-left: -${ITEM_SPACING_SM_UP};
  }
`

const Item = styled.li`
  padding-left: ${ITEM_SPACING_SM_DOWN};
  ${breakpoints.minSm} {
    padding-left: ${ITEM_SPACING_SM_UP};
  }
  ${hiddenAtBreakpointStyles};
`

const linkStyles = css`
  color: var(--text-medium-contrast);
  display: inline-flex;
  text-align: center;
  padding: 1.1rem 0;
`

const InternalLink = styled(NavigationLink)`
  ${linkStyles};
`

const ExternalLink = styled(PlainLink)`
  ${linkStyles};
`

export const Actions = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <Wrapper>
      <Item $hidden="maxXs">
        <nav aria-label="Quick Navigation Menu">
          <Wrapper>
            {routes.map((route) => (
              <Item key={route.id}>
                <InternalLink route={route}>{route.title}</InternalLink>
              </Item>
            ))}
          </Wrapper>
        </nav>
      </Item>
      <Item $hidden="maxSm">
        <ExternalLink to={URLS.LIBRARY_REPOSITORY}>GitHub</ExternalLink>
      </Item>
      <Item>
        <ThemeToggle />
      </Item>
    </Wrapper>
  )
}
