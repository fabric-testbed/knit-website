import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, IconButton, Sheet, Tooltip } from '@mui/joy'
import { Copy as CopyIcon } from 'react-feather'
import { copyToClipboard } from '@util'

export const CodeBlock = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false)

  // our markdown results in pre > code > text,
  // so we have to check the children of the single child,
  // a `code` element, which _should_ contain text.
  // let's ensure that is indeed the case before proceeding.
  if (typeof children !== 'string') {
    return <Card>...</Card>
  }

  // when the Copy button is clicked,
  // we copy the text to the clipboard and
  // set the `copied` state to `true`.
  const handleClickCopy = () => {
    setCopied(true)
    copyToClipboard(children)
  }

  // when `copied` changes, we'll wait a moment
  // before resetting it back to `false`.
  useEffect(() => {
    // if it isn't copied, there's nothing to do.
    if (!copied) {
      return
    }
    // wait two seconds before resetting `copied` to false.
    const copyTimer = setTimeout(() => {
      setCopied(false)
    }, 2000)
    // cleanup the timeout
    return () => clearTimeout(copyTimer)
  }, [copied])
  
  // this button will reside in the top-right of
  // each code block and is responsible for copying the
  // code block's contents to the user's clipboard.
  // this component has a `copied` state variable that
  // keeps track of when the button has been clicked,
  // making it possible to show the user feedback,
  // which we do here in the tooltip and styling.
  const CopyButton = useCallback(() => {
    const styleProps = copied ? {
      variant: 'plain',
      color: 'success',
    } : {
      variant: 'soft',
      color: 'neutral',
    }

    return (
      <Tooltip
        title={ copied ? 'Copied!' : 'Copy to clipboard' }
        placement="top"
      >
        <IconButton
          size="sm"
          { ...styleProps }
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            borderRadius: 0,
            borderBottomLeftRadius: 8,
          }}
          onClick={ handleClickCopy }
        >
          <CopyIcon size={ 16 } />
        </IconButton>
      </Tooltip>
    )
  }, [copied])

  return (
    <Sheet variant="outlined" sx={{ m: 2, }}>
      <Box
        component="pre"
        sx={{
          backgroundColor: 'background.surface',
          color: 'var(--knit-palette-tertiary-dark)',
          p: 2, pr: 6,
          m: 0,
          fontSize: '80%',
          position: 'relative',
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
        }}
        { ...props }
      >
        { children }
      </Box>
      <CopyButton />
    </Sheet>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string,
}
