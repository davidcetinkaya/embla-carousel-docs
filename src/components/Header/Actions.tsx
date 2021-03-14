import React from 'react'
import styled from 'styled-components'
import { ThemeToggle } from 'components/Theme'
import { NavigationLink } from 'components/Link'
import { breakpoints } from 'consts'
import { useRoutes } from 'hooks'
import { hiddenAtBreakpointStyles } from 'utils'

const ITEM_SPACING_SM_UP = '3rem'
const ITEM_SPACING_SM_DOWN = '2.5rem'

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  line-height: 1.65;
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

const Link = styled(NavigationLink)`
  color: var(--text-medium-contrast);
  display: inline-flex;
  text-align: center;
  padding: 0.6rem 0;
`

export const Actions = () => {
  const { hierarchical: routes } = useRoutes()

  return (
    <Wrapper>
      <Item $hidden="maxSm">
        <nav aria-label="Quick Navigation Menu">
          <Wrapper>
            {routes.map((route) => (
              <Item key={route.id}>
                <Link route={route}>{route.title}</Link>
              </Item>
            ))}
          </Wrapper>
        </nav>
      </Item>
      <Item>
        <ThemeToggle />
      </Item>
    </Wrapper>
  )
}
