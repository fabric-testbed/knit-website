import content from '@content/home.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const HomeView = () => {
  return (
    <Page
      title="Home"
      description="Home of FABRIC's KNIT Worksop"
    >
      <Markdown>{ content }</Markdown>
    </Page>
  )
}