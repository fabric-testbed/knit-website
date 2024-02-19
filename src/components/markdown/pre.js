import { Card } from '@mui/joy'
import { CodeBlock } from '@components/code-block'

/* eslint-disable-next-line no-unused-vars */
export const pre = ({ node, children, ...props }) => {
  console.log(children)
  // our markdown results in pre > code > text,
  // so we have to check the children of the single child,
  // a `code` element, which _should_ contain text.
  // let's ensure that is indeed the case before proceeding.
  if (typeof children.props.children !== 'string') {
    return <Card>...</Card>
  }

  return <CodeBlock { ...props }>{ children.props.children }</CodeBlock>
}
