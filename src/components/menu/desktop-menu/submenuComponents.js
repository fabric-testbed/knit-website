import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box } from '@mui/joy'
import { Link } from '@components/link'
import { ChevronRightIcon } from '../../icons/chevron-icons'

export const SubmenuHeader = styled(Box)(({ active }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem 0.75rem',
  gap: '0.5rem',
  fontWeight: 400,
  cursor: 'pointer',
  height: '100%',
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
  color: active ? 'var(--knit-palette-primary-dark)' : 'var(--knit-palette-primary-900)',
  backgroundColor: active ? '#0001' : 'transparent',
  '&:hover': {
    backgroundColor: '#0002',
  },
}))

export const DropdownWrapper = styled(Box)({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  zIndex: 2,
  minWidth: '200px',
  transformOrigin: 'top left',
  transition: 'opacity 0.3s ease',
  textAlign: 'left',
})

export const SubSubmenuWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  zIndex: 3,
  minWidth: '200px',
  transformOrigin: 'top left',
  transition: 'opacity 0.3s ease',
})

export const SubMenuLink = styled(Link)({
  padding: '0.5rem 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'var(--knit-palette-primary-900)',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  textAlign: 'left',
  transition: 'background-color 250ms',
  '& svg': {
    marginLeft: '0.25rem'
  },
  '&:hover': {
    textDecoration: 'none',
  }
})

export const SubMenuItem = styled(Box)(({ active }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: active ? '#0001' : 'transparent',
  transition: 'background-color 250ms',
  width: '100%',
  padding: '0 0.5rem',
  border: '1px solid #0001',
  '&:hover': {
    backgroundColor: '#0002',
    color: 'var(--knit-palette-primary-dark)',
  },
  '[aria-current="page"]': {
    backgroundColor: '#0001',
    color: 'var(--knit-palette-primary-dark)',
  },
}))

export const Submenu = ({ items }) => {
  const [openSubSubmenu, setOpenSubSubmenu] = useState(-1)
  const location = useLocation()

  // determine if the current path matches a submenu item
  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <DropdownWrapper>
      {items.map(({ label, path, external, subsubItems }, index) => {
        const active = isActive(path) || (subsubItems && subsubItems.some((item) => isActive(item.path)))
        return (
          <SubMenuItem
            key={path || label}
            active={active}
            onMouseOver={subsubItems ? () => setOpenSubSubmenu(index) : undefined}
            onMouseOut={subsubItems ? () => setOpenSubSubmenu(-1) : undefined}
          >
            <SubMenuLink
              to={path}
              target={external ? '_blank' : undefined}
              aria-current={isActive(path) ? 'page' : undefined}
            >
              {label}
              {subsubItems && (
                <ChevronRightIcon size={ 16 } fill="var(--knit-palette-primary-900)"/>
              )}
            </SubMenuLink>
            {subsubItems && openSubSubmenu === index && (
              <SubSubmenu items={subsubItems} />
            )}
          </SubMenuItem>
        )
      })}
    </DropdownWrapper>
  )
}

export const SubSubmenu = ({ items }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <SubSubmenuWrapper>
      {items.map(({ label, path, external }) => (
        <SubMenuItem key={path || label} active={isActive(path)}>
          <SubMenuLink
            to={path}
            target={external ? '_blank' : undefined}
            aria-current={isActive(path) ? 'page' : undefined}
          >
            {label}
          </SubMenuLink>
        </SubMenuItem>
      ))}
    </SubSubmenuWrapper>
  )
}

Submenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      external: PropTypes.bool,
      subsubItems: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          external: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
}

SubSubmenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ).isRequired,
};
