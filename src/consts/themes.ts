export type ThemeKeyType = `${THEME_KEYS}`

type ThemesType = { [key in ThemeKeyType]: ThemeType }

export enum THEME_KEYS {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

type ThemeType = {
  current: ThemeKeyType
  brandPrimary: string
  brandSecondary: string
  brandAlternative: string
  backgroundSite: string
  backgroundCode: string
  textBody: string
  textHighContrast: string
  textMediumContrast: string
  textLowContrast: string
  detailLowContrast: string
  detailMediumContrast: string
  detailHighContrast: string
}

const LIGHT_THEME: ThemeType = {
  current: THEME_KEYS.LIGHT,
  brandPrimary: '#2f72c1',
  brandSecondary: '#7463c3',
  brandAlternative: '#137886',
  backgroundSite: '#ffffff',
  backgroundCode: '#f9f9f9',
  textBody: '#36313d',
  textHighContrast: '#313131',
  textMediumContrast: '#635e69',
  textLowContrast: '#78757a',
  detailLowContrast: '#f0f0f2',
  detailMediumContrast: '#eaeaea',
  detailHighContrast: '#c0c0c0',
}

const DARK_THEME: ThemeType = {
  current: THEME_KEYS.DARK,
  brandPrimary: '#8ab4f8',
  brandSecondary: '#c1a8e2',
  brandAlternative: '#88babf',
  backgroundSite: '#000000',
  backgroundCode: '#0c0c0c',
  textBody: '#dedede',
  textHighContrast: '#e6e6e6',
  textMediumContrast: '#cacaca',
  textLowContrast: '#aaaaaa',
  detailLowContrast: '#151515',
  detailMediumContrast: '#191919',
  detailHighContrast: '#656565',
}

export const THEMES: ThemesType = {
  [THEME_KEYS.LIGHT]: LIGHT_THEME,
  [THEME_KEYS.DARK]: DARK_THEME,
}
