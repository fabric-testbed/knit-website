import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/joy'
import { Link as LinkIcon } from 'react-feather'
import { slugify } from '@util'

export const LinkedHeading = ({ children, ...props }) => {
  // let's not try this unless this is a normal text header
  if (typeof children !== 'string') {
    return <Typography { ...props }>{ children }</Typography>
  }

  const title = slugify(children)

  return (
    <Box
      id={ title }
      sx={{
        scrollMarginTop: '4rem',
        '.heading-link': {
          m: 2,
          filter: 'opacity(0.1)',
          transition: 'filter 250ms',
        },
        '&:hover .heading-link': {
          filter: 'opacity(1.0)',
        },
      }}
    >

      <Typography { ...props }>
        { children }
        <a href={ `#${ title }` } className="heading-link">
          <LinkIcon size={ 18 } color="var(--knit-palette-common-black)" />
        </a>
      </Typography>
    </Box>
  )
}


LinkedHeading.propTypes = {
  children: PropTypes.string,
}

