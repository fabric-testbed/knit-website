import Cfp from '@content/cfp.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const CfaView = () => {
  return (
    <Page title="Calls for Action">
      <Cfp components={componentMap} />
    </Page>
  )
}