import { Sheet } from '@mui/joy'
import { Brand } from '@components/brand'

export const Header = () => {
  return (
    <Sheet
      component="header"
      sx={{
        display: 'flex',
        p: { xs: 4, md: 8 },
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        background: `repeating-linear-gradient(
          140deg,
          #333,
          #333 50vmax,
          #000 52vmax,
          #000 150vmax
        )`,
        backgroundAttachment: 'fixed',
      }}
    >
      <Brand size="large" />
    </Sheet>
  )
}
