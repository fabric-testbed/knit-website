import { List, ListItem, Sheet, Stack, Typography } from '@mui/joy'
import { KnitLogo } from '@components/brand'
import { Link } from '@components/link'
import {
  Container,
} from '@components/layout'

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
          marginTop: '1rem'
        },
        '.links-list a': {
          color: 'var(--knit-palette-primary-400)',
          '&:hover': {
            color: 'var(--knit-palette-primary-100)',
          }
        },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignContent="space-around"
        >
          <Stack
            direction="column"
            flex="1"
            alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
            justifyContent="center"
          >
            <KnitLogo size="medium" />
            
            <Typography 
              align="center" 
              className="copyright"
            >&copy; { new Date().getFullYear() }</Typography>
          </Stack>

          <Stack
            direction="column"
            flex="1"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
          >
            <List className="links-list">
              <ListItem><Link to="https://portal.fabric-testbed.net/">FABRIC Portal</Link></ListItem>
              <ListItem><Link to="https://join.slack.com/t/fabric-3qa1674/shared_invite/zt-2jryx0baq-2U8yQNfqNGAP~r5vMz1hZg">Community Slack Channel</Link></ListItem>
              <ListItem><Link to="https://portal.fabric-testbed.net/help">Contact Us</Link></ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>

    </Sheet>
  )
}
