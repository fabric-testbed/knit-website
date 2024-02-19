import { Link } from '@components/link'

/* eslint-disable-next-line no-unused-vars */
export const a = ({ node, href, ...props }) => {
  return (
    <Link to={ href } { ...props } />
  )
}
