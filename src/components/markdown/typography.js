/* eslint-disable no-unused-vars */
import { Typography } from '@mui/joy'

// heading 1
export const h1 = ({ node, ...props }) => (
  <Typography level="h1" { ...props } />
)

// heading 2
export const h2 = ({ node, ...props }) => (
  <Typography level="h2" { ...props } />
)

// heading 3
export const h3 = ({ node, ...props }) => (
  <Typography level="h3" { ...props } />
)

// heading 4
export const h4 = ({ node, ...props }) => (
  <Typography level="h4" { ...props } />
)

// heading 5
export const h5 = ({ node, ...props }) => (
  <Typography level="h5" { ...props } />
)

// heading 6
export const h6 = ({ node, ...props }) => (
  <Typography level="h6" { ...props } />
)

// paragraph
export const p = ({ node, ...props }) => {
  return (
    <Typography
      level="body-md"
      sx={{
        my: 2,
      }}
      { ...props }
    />
  )
}

// bold
export const strong = ({ ...props}) => {
  return (
    <Typography
      sx={{
        fontWeight: 'bold',
      }}
      { ...props }
    />
  )
}

// emphasis
export const em = ({ ...props}) => {
  return (
    <Typography
      sx={{
        fontStyle: 'italic',
      }}
      { ...props }
    />
  )
}
