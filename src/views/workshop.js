import Workshop from '@content/workshop.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const WorkshopView = () => {
  return (
    <Page
      title="Home"
      description="Home of FABRIC's KNIT Workshop"
    >
      <Workshop components={componentMap} />
    </Page>
  )
}