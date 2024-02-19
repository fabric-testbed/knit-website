import { Button } from '@mui/joy'
import { Link } from '@components/link'

/* eslint-disable-next-line no-unused-vars */
export const button = ({ node, linkto, children }) => {
  if (typeof children !== 'string') {
    return <Button>{ children }</Button>
  }
  if (!linkto) {
    return <Button>{ children }</Button>
  }

  return (
    <Button
      component={ Link }
      to={ linkto }
    >{ children }</Button>
  )
}
