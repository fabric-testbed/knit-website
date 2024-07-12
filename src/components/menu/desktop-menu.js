import { Box } from '@mui/joy'
import { Link } from '@components/link'
import { menuPropTypes } from './menu'

//

export const DesktopMenu = ({ options = [] }) => {
  return (
    <Box
      role="navigation"
      component="ul"
      sx={{
        height: '60px',
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'stretch',
        width: '100%',
        justifyContent: 'center',
        '.list-item': {
          display: 'flex',
          backgroundColor: 'transparent',
          transition: 'background-color 250ms',
          '&:hover': {
            backgroundColor: '#0001',
            color: 'var(--knit-palette-primary-dark)',
          },
        },
        '.list-item > a': {
          width: '100%',
          p: 2,
          textDecoration: 'none',
          color: 'var(--knit-palette-primary-900)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        },
        '[aria-current="page"]': {
          backgroundColor: '#0001',
        },
      }}
    >
      {
        options.map(({ label, path }) => (
          <li key={ path } className="list-item">
            <Link nav to={ path }>{ label }</Link>
          </li>
        ))
      }
    </Box>
  )
}

DesktopMenu.propTypes = { ...menuPropTypes }
