import { Stack } from '@mui/joy'

import about from '../content/about/about.md'
import mission from '../content/about/mission.md'

import { Container } from '../components/container'
import { Markdown } from '../components/markdown'


export const AboutView = () => {
  return (
    <Container
      size="lg"
      sx={{
        '.columns .main': {
          flex: 3,
        },
        '.columns .aside': {
          flex: 1,
        },
        '@container (min-width: 768px)': {
          '.columns': {
            flexDirection: 'row',
            gap: '2rem',
          },
        },
      }}
    >
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        gap={{ sm: 0, md: 4 }}
      >
        <div className="main">
          <Markdown>{ about }</Markdown>
        </div>
        <div className="aside">
          <Markdown>{ mission }</Markdown>
        </div>
      </Stack>
    </Container>
  )
}