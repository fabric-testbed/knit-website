import { Divider } from '@mui/joy'

/* eslint-disable-next-line no-unused-vars */
export const hr = ({ node, ...props }) => {
  return (
    <Divider
      sx={{
        my: 4,
      }}
      { ...props }
    />
  )
}
