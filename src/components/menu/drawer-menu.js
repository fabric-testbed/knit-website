import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, IconButton, ModalClose, Stack } from '@mui/joy';
import { Menu as MenuIcon } from 'react-feather';
import { Link } from '@components/link';
import numberlessKnitLogo from '@images/knit-logo-numberless-dark.png';

export const DrawerMenu = ({ options = [] }) => {
  const [open, setOpen] = useState(false);

  // Helper function to flatten subItems and subsubItems
  const transformMenuOptions = (menuOptions) =>
    menuOptions.map(({ label, path, subItems = [], ...rest }) => {
      // Flatten subItems and subsubItems, omitting "Additional KNITs"
      if (label === 'Additional KNITs') {
        return subItems.flatMap((sub) => sub.subsubItems || sub);
      }

      return {
        label,
        path,
        subItems: subItems.flatMap((sub) => (sub.subsubItems ? sub.subsubItems : sub)),
        ...rest,
      };
    });

  // Render menu items recursively
  const renderMenuItems = (items, level = 0) =>
    items.flatMap(({ label, path, subItems = [] }) => [
      <li
        key={path || label} // Fallback to label if path is not available
        className="list-item"
        onClick={() => setOpen(false)}
        style={{ paddingLeft: `${level * 16}px` }} // Indentation for hierarchy
      >
        {path ? (
          <Link nav to={path}>
            {label}
          </Link>
        ) : (
          <span>{label}</span>
        )}
      </li>,
      ...renderMenuItems(subItems, level + 1), // Recursively render subItems
    ]);

  const transformedOptions = transformMenuOptions(options);

  return (
    <Fragment>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        sx={{ mx: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
          <img src={numberlessKnitLogo} width="250px" />
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Stack>

        <Divider />

        <Box
          role="navigation"
          component="ul"
          sx={{
            padding: 0,
            margin: 0,
            listStyleType: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            width: '100%',
            justifyContent: 'center',
            '.list-item': {
              display: 'flex',
              backgroundColor: 'transparent',
              transition: 'background-color 250ms',
              '&:hover': {
                backgroundColor: '#0001',
              },
            },
            '.list-item > a': {
              width: '100%',
              padding: 2,
              textDecoration: 'none',
              color: '#00758d',
              textTransform: 'uppercase',
            },
            '[aria-current="page"]': {
              backgroundColor: '#0001',
            },
          }}
        >
          {renderMenuItems(transformedOptions)}
        </Box>
      </Drawer>
    </Fragment>
  );
};

// Explicitly define prop-types
DrawerMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string, // Can be undefined for non-clickable menu items
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string,
          subsubItems: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              path: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
};
