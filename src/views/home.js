import content from '../content/home.md'
import { Container } from '../components/container'
import { Markdown } from '../components/markdown'

export const HomeView = () => {
  return (
    <Container size="md">
      <Markdown>{ content }</Markdown>
    </Container>
  )
}