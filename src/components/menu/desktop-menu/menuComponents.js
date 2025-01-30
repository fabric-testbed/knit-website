import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Box, List } from '@mui/joy'
import { Link } from '@components/link'

export const MenuContainer = ({ children }) => (
  <List
    orientation="horizontal"
    aria-label="menu bar"
    role="menubar"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    {children}
  </List>
)

MenuContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export const MenuItem = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: 'transparent',
  transition: 'background-color 250ms',
  '&:hover': {
    backgroundColor: '#0001',
    color: 'var(--knit-palette-primary-dark)',
  },
})

export const MenuLink = styled(Link)({
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.75px',
  color: 'var(--knit-palette-primary-900)',
  '&[aria-current="page"]': {
    backgroundColor: '#0002',
  },
})
