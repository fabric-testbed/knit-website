import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/joy'
import { Link } from '@components/link'
import numberlessKnitLogo from '@images/knit-logo-numberless.png'

export const Brand = () => {
  return (
    <Stack
      component={ Link } to="/"
      direction={{ sm: 'column', md: 'row' }}
      alignItems="flex-end"
      gap={ 2 }
      sx={{
        textDecoration: 'none',
        '.fabric-text': {
          letterSpacing: '4px',
          fontSize: '62px',
          fontWeight: '300',
          background: '-webkit-linear-gradient(white, #47aae1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitMaskImage: 'linear-gradient(white, #47aae1)',
          lineHeight: 1,
          marginBottom: '0.3rem'
        },
      }}
    >
      <img src={ numberlessKnitLogo } width="250px" />
      <Typography className="fabric-text">2024</Typography>

    </Stack>
  )  
}

const dimensions = {
  small: { width: '80', height: '28' },
  medium: { width: '160', height: '56' },
  large: { width: '240', height: '84' },
}

export const KnitLogo = ({ size = 'medium' }) => {
  return (
    <svg
      { ...dimensions[size] }
      viewBox="0 0 159.99999 56"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" width="1.5" height="1.5" x="-.25" y="-.25">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4.00" result="blur" />
            <feColorMatrix result="bluralpha" type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 0.75 0" />
            <feOffset in="bluralpha" dx="0.000000" dy="0.000000" result="offsetBlur" />
            <feMerge>
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
      </defs>
      <path
        style={{
          filter: 'url(#glow)',
          strokeWidth: 1,
          strokeLinejoin: 'mitre',
          fillOpacity: 1,
          fill: 'var(--knit-palette-primary-main)',
          stroke: 'var(--knit-palette-primary-light)',
        }}
        d="M 14.655839,5.8588375 V 24.956901 L 39.300437,5.8588375 H 50.123674 L 31.925046,19.980011 q 6.565896,1.049344 11.302935,5.786385 6.026236,6.056216 6.026236,14.600874 v 8.754526 H 42.598378 V 40.36727 q 0,-5.786384 -4.077452,-9.893816 -4.107434,-4.107435 -9.893819,-4.107435 H 23.65022 l -8.994381,6.985635 V 49.121796 H 8 V 5.8588375 Z M 56.479701,49.121796 V 4 L 89.81886,36.28982 V 5.8588375 H 96.4747 V 52 L 63.13554,19.71018 V 49.121796 Z M 111.22548,5.8588375 V 49.121796 h -6.65583 V 5.8588375 Z m 26.8932,6.6558395 v 36.607119 h -6.65584 V 12.514677 H 118.7208 V 5.8588375 h 32.13992 v 6.6558395 z"
        aria-label="KNIT"
      />
    </svg>
  )
}

KnitLogo.propTypes = {
  size: PropTypes.oneOf(Object.keys(dimensions))
}
