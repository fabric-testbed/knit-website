import { Divider, List, ListItem, Sheet, Stack, Typography } from '@mui/joy'
import { KnitLogo } from '@components/brand'
import { Link } from '@components/link'

export const Footer = () => {
  return (
    <Sheet
      component="footer"
      sx={{
        backgroundColor: 'var(--knit-palette-common-black)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 2, py: 6,
        '.copyright': {
          color: 'var(--knit-palette-primary-900)',
        },
        '.links-list a': {
          color: 'var(--knit-palette-primary-400)',
          '&:hover': {
            color: 'var(--knit-palette-primary-100)',
          }
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignSelf="stretch"
      >
        <Stack
          direction="column"
          flex="1"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <List className="links-list">
            <ListItem><Link to="#">link</Link></ListItem>
            <ListItem><Link to="https://example.com/">here&apos;s an external link</Link></ListItem>
            <ListItem><Link to="#">a link</Link></ListItem>
            <ListItem><Link to="#">and another</Link></ListItem>
          </List>
        </Stack>
        <Stack
          direction="column"
          flex="1"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <List className="links-list">
            <ListItem><Link to="#">another link</Link></ListItem>
            <ListItem><Link to="https://example.com/">so many links</Link></ListItem>
            <ListItem><Link to="https://example.com/">last one</Link></ListItem>
          </List>
        </Stack>
      </Stack>

      <Divider sx={{ width: '50%', my: 3, mx: 'auto' }} />

      <KnitLogo size="small" />
      
      <Typography 
        align="center" 
        className="copyright"
      >&copy; { new Date().getFullYear() }</Typography>
    </Sheet>
  )
}
