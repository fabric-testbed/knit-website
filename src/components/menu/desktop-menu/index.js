import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '../../icons/chevron-icons'
import { MenuContainer, MenuLink, MenuItem  } from './menuComponents'
import { Submenu, SubmenuHeader } from './submenuComponents'

export const DesktopMenu = ({ options = [] }) => {
  const location = useLocation() // used to determine active paths
  const [openSubmenu, setOpenSubmenu] = useState(-1)

  const handleOpenSubmenu = (index) => () => setOpenSubmenu(index)
  const handleCloseSubmenu = () => setOpenSubmenu(-1)

  // determine if a path is active
  const isActive = (path, subItems) => {
    if (location.pathname === path) return true; // direct match
    if (subItems) {
      return subItems.some((item) =>
        location.pathname.startsWith(item.path)
      )
    }
    return false
  }

  return (
    <MenuContainer role="navigation" aria-label="Desktop menu">
      {options.map(({ label, path, subItems }, index) => (
        <MenuItem
          key={path || label}
          onMouseOver={subItems ? handleOpenSubmenu(index) : undefined}
          onMouseOut={subItems ? handleCloseSubmenu : undefined}
        >
          {subItems ? (
            <>
              <SubmenuHeader
                active={isActive(path, subItems)}
                open={openSubmenu === index}
                aria-label={`${label} submenu`}
              >
                {label}
                <ChevronDownIcon size={ 16 } fill="var(--knit-palette-primary-900)"/>
              </SubmenuHeader>
              {openSubmenu === index && <Submenu items={subItems} />}
            </>
          ) : (
            <MenuLink as={NavLink} to={path} active={isActive(path)}>
              {label}
            </MenuLink>
          )}
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

DesktopMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ),
}