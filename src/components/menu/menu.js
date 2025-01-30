import PropTypes from 'prop-types'
import { Sheet } from '@mui/joy'
import { useTheme } from '@mui/joy/styles'
import { DrawerMenu } from './drawer-menu'
import { DesktopMenu } from './desktop-menu'
import useResizeObserver from 'use-resize-observer'

//

export const Menu = ({ options = [] }) => {
  const { ref, width = 1 } = useResizeObserver()
  const theme = useTheme()

  return (
    <Sheet
      ref={ ref }
      sx={{
        backgroundColor: 'var(--knit-palette-common-white)',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: 'solid var(--knit-palette-primary-700)',
        borderWidth: '1px 0',
        position: 'sticky',
        top: 0,
        overflow: 'visible',
        zIndex: 9,
      }}
    >
      {
        width < theme.breakpoints.values.md
          ? <DrawerMenu options={ options } />
          : <DesktopMenu options={ options } />
      }
    </Sheet>
  )
}




export const menuPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string,
    view: PropTypes.element,
    external: PropTypes.bool,
    subItems: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        path: PropTypes.string,
        external: PropTypes.bool,
        subsubItems: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string,
            external: PropTypes.bool,
          })
        ),
      })
    ),
  }).isRequired,
).isRequired;

Menu.propTypes = { options: menuPropTypes };
