import Cfp from '@content/cfp.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const CfaView = () => {
  return (
    <Page title="Call for Proposals">
      <Cfp components={componentMap} />
    </Page>
  )
}