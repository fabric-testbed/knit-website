import Home from '@content/home.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const HomeView = () => {
  return (
    <Page
      title="Home"
      description="Home of FABRIC's KNIT Workshop"
    >
      <Home components={componentMap} />
    </Page>
  )
}