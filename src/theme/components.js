export const components = {
  JoyTypography: {
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        fontSize: '100%',
        color: theme.palette.primary[900],
        // color: 'var(--knit-palette-primary-900)',
        ...(ownerState.level === 'h1' && {
          fontSize: '360%',
          color: theme.palette.primary[100],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h2' && {
          fontSize: '250%',
          color: theme.palette.primary[400],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h3' && {
          fontSize: '200%',
          color: theme.palette.secondary[900],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h4' && {
          fontSize: '166%',
          color: theme.palette.secondary[400],
          margin: '16px 0',
        }),
        ...(ownerState.level === 'h5' && {
          fontSize: '130%',
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
}
