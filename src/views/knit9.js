import Knit9 from '@content/knit9.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const Knit9View = () => {
  return (
    <Page title="Knit 9">
      <Knit9 components={componentMap} />
    </Page>
  )
}