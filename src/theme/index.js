import { extendTheme } from '@mui/joy/styles'
import './base.css'

import { palette } from './palette'
import { components } from './components'

const breakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: { xs: 0, sm: 500, md: 750, lg: 1200, xl: 1536 },
  unit: 'px',
}

const shape = {
  borderRadius: 12,
}

export const theme = extendTheme({
  mode: 'light',
  cssVarPrefix: 'knit',
  direction: 'ltr',
  breakpoints,
  shape,
  components,
  fontFamily: {
    brand: 'Montserrat',
  },
  colorSchemes: {
    dark: {
      palette,
    },
    light: {
      palette,
    },
  },
})
