import { Sheet, Stack, Typography } from '@mui/joy'
import { Brand } from '../brand'

export const Header = () => {
  return (
    <Sheet
      component="header"
      sx={{
        height: '200px',
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        background: `repeating-linear-gradient(
          140deg,
          #333,
          #333 50vmax,
          #000 50vmax,
          #000 150vmax
        )`,
        backgroundAttachment: 'fixed',
        fontFamily: 'var(--font-brand)',
        '.brand': {
          letterSpacing: '4px',
          fontSize: '300%',
          fontWeight: '100',
          background: '-webkit-linear-gradient(white, #47aae1)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-mask-image': 'linear-gradient(white, #47aae1)',
          lineHeight: 1,
        },
        '.subbrand': {
          fontSize: '300%',
          color: '#47aae1',
          fontWeight: '900',
          lineHeight: 1,
          textShadow: '0 0 5px #cde4ef, 0 0 1px #47aae1',
        },
      }}
    >
      <Brand size="large" />
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        gap={{ sm: 0, md: 1 }}
      >
        <Typography className="brand">
          FABRIC
        </Typography>
        <Typography className="subbrand">
          KNIT
        </Typography>
      </Stack>
    </Sheet>
  )
}
