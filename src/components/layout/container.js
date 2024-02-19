import PropTypes from 'prop-types'
import { Box } from '@mui/joy'

export const SIZES = {
  sm: '600px',
  md: '800px',
  lg: '1200px',
  xl: '1600px',
}

export const Container = ({ children, size }) => {
  return (
    <Box sx={{
      flex: 1,
      mb: '4rem',
      px: 2,
      maxWidth: '100%',
      width: SIZES[size],
      mx: 'auto',
    }}>
      { children }
    </Box>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(SIZES)),
}

Container.defaultProps = {
  size: 'md',
}