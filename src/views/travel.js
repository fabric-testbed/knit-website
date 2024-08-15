import Travel from '@content/travel.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const TravelView = () => {
  return (
    <Page
      title="Travel"
      description="View travel and lodging accommodations"
    >
      <Travel components={componentMap} />
    </Page>
  )
}