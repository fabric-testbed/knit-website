import speakers from '@content/speakers.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const SpeakersView = () => {
  return (
    <Page
      title="Speakers"
      description="Who is presenting?"
    >
      <Markdown>{ speakers }</Markdown>
    </Page>
  )
}