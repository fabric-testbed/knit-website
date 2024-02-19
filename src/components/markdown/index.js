import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { hr } from './hr'
import { a } from './link'
import { ul, li } from './list'
import { pre } from './pre'
import { button } from './button'
import * as typography from './typography'

/*
 * this object defines a map,
 *   DOM elements -> React components,
 * which allows us to map the HTML elements
 * that result from our Markdown content
 * to the React components used in the rest
 * of the application.
 */
const componentMap = {
  a,
  hr,
  pre,
  ul, li,
  ...typography,
  button,
}

export const Markdown = props => {
  return (
    <ReactMarkdown
      { ...props }
      components={ componentMap }
      remarkPlugins={ [remarkGfm] }
      rehypePlugins={ [rehypeRaw] }
    />
  )
}
