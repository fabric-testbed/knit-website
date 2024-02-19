/* eslint-disable no-unused-vars */
import { List, ListItem, ListItemContent, Typography } from '@mui/joy'

// unordered list
export const ul = ({ node, ...props }) => {
  return (
    <List
      orientation="vertical"
      { ...props }
      sx={{
        display: 'block',
        flexDirection: 'column',
      }}
      marker="disc"
    />
  )
}

export const ol = ({ node, ...props }) => {
  return (
    <List
      component="ol"
      marker="decimal"
      orientation="vertical"
      { ...props }
      sx={{
        display: 'block',
        flexDirection: 'column',
      }}
    />
  )
}

// list item
export const li = ({ children, ...props }) => {

  return (
    <ListItem
      { ...props }
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <ListItemContent>
        <Typography
          level="body-sm"
        >{ children }</Typography>
      </ListItemContent>
    </ListItem>
  )
}