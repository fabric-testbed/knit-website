import cfa from '@content/cfa.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const CfaView = () => {
  return (
    <Page title="Call for Proposals">
      <Markdown>{ cfa }</Markdown>
    </Page>
  )
}