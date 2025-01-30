import KNIT9 from '@content/past-knits/knit9.mdx'

import { Page } from '@components/layout'
import { componentMap } from "@components/markdown"

export const Knit9View = () => {
  return (
    <Page
      title=""
      description=""
    >
      <KNIT9 components={componentMap} />
    </Page>
  )
}