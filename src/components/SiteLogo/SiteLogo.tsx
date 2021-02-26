import React, { PropsWithChildren, useMemo } from 'react'
import logoLightThemeUrl from 'assets/images/embla-logo-light-theme.svg'
import logoDarkThemeUrl from 'assets/images/embla-logo-dark-theme.svg'
import { useInView } from 'react-intersection-observer'
import { useSiteMetadata, useTheme } from 'hooks'

const LOGOS = {
  LIGHT: (logoLightThemeUrl as unknown) as string,
  DARK: (logoDarkThemeUrl as unknown) as string,
}

type PropType = PropsWithChildren<{}>

export const SiteLogo = (props: PropType) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true })
  const { theme } = useTheme()
  const { title } = useSiteMetadata()
  const logo = useMemo(
    () => ({
      src: LOGOS[theme],
      alt: `An illustrated atom like body which is the logotype of ${title}`,
    }),
    [theme, title],
  )

  if (!inView) return <div ref={inViewRef} />

  return <img src={logo.src} alt={logo.alt} {...props} />
}
