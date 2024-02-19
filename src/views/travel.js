import travel from '@content/travel.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const TravelView = () => {
  return (
    <Page
      title="Travel"
      description="View travel and lodging accommodations"
    >
      <Markdown>{ travel }</Markdown>
    </Page>
  )
}