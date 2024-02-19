import cfp from '@content/cfp.md'

import { Page } from '@components/layout'
import { Markdown } from '@components/markdown'

export const CfpView = () => {
  return (
    <Page title="Call for Proposals">
      <Markdown>{ cfp }</Markdown>
    </Page>
  )
}