import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, Divider, Typography } from '@mui/joy'

import { Markdown } from '@components/markdown'
import { CodeBlock } from '@components/code-block'

import headings from './headings.md'
import blockquotes from './blockquotes.md'
// import lists from './lists.md'
import dividers from './dividers.md'
import images from './images.md'
import links from './links.md'
import textEmphasis from './text-emphasis.md'
import lineBreaks from './line-breaks.md'
import html from './html.md'

const Section = ({ title, md }) => {
  return (
    <Box
      component="section"
      sx={{
        details: {
          my: 2,
          backgroundColor: '#fff9',
          borderRadius: 6,
          border: '1px solid',
          borderColor: 'var(--variant-outlinedBorder, var(--knit-palette-neutral-outlinedBorder, var(--knit-palette-neutral-300, #456)))',
        },
        summary: {
          p: 1,
          cursor: 'pointer',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
          transition: 'filter 250ms',
          color: 'var(--knit-palette-primary-dark)',
          filter: 'saturate(0.0)',
          '&:hover': {
            filter: 'saturate(1.0)',
          },
        }
      }}
    >
      <Divider><Typography sx={{ fontSize: '300%' }}>{ title }</Typography></Divider>

      {/* the result of the markdown */}
      <Card variant="outlined">
        <Markdown>{ md }</Markdown>
      </Card>
      
      {/* the raw markdown */}
      <details>
        <summary>Markdown Syntax</summary>
        <CodeBlock>{ md }</CodeBlock>
      </details>
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  md: PropTypes.string.isRequired,
}

export const MarkdownTests = () => {
  return (
    <Fragment>
      <Section md={ headings } title="Headings" />
      <Section md={ lineBreaks } title="Line Breaks" />
      <Section md={ links } title="Links" />
      <Section md={ textEmphasis } title="Text Emphasis" />
      <Section md={ images } title="Images" />
      <Section md={ blockquotes } title="Blockquotes" />
      {/* <Section md={ lists } title="Lists" /> */}
      <Section md={ dividers } title="Dividers" />
      <Section md={ html } title="Raw HTML" />
    </Fragment>
  )
}
