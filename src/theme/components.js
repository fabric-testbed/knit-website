export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontSize: '100%',
        color: theme.palette.primary[900],
        // color: 'var(--knit-palette-primary-900)',
        ...(ownerState.level === 'h1' && {
          fontSize: '250%',
          color: theme.palette.primary[100],
          margin: '16px 0',
          fontWeight: 600
        }),
        ...(ownerState.level === 'h2' && {
          fontSize: '175%',
          color: theme.palette.primary[400],
          margin: '16px 0',
          fontWeight: 500,
        }),
        ...(ownerState.level === 'h3' && {
          fontSize: '150%',
          color: theme.palette.secondary[900],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h4' && {
          fontSize: '130%',
          color: theme.palette.secondary[400],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h5' && {
          fontSize: '120%',
          color: theme.palette.tertiary[600],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h6' && {
          fontSize: '110%',
          color: theme.palette.tertiary[800],
          margin: '16px 0',
          fontStyle: 'italic',
        }),
      }),
    },
  },
  JoyButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        ...(ownerState.color === 'primary' && {
          backgroundColor: theme.palette.primary[500] ,
          color: theme.palette.primary.contrastText,
          fontWeight: 400,
          ':hover': {
            backgroundColor: theme.palette.primary[700] ,
          },
          margin: '0.5rem 1rem'
        }),
      }),
    },
  },

}
