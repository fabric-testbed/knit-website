import { Alert as MUIAlert} from '@mui/joy'
import Link from '@mui/joy/Link'
import Parser from 'html-react-parser'
import moment from 'moment';

const checkNotExpired = (start, end) => {
  const startUTC = start.substring(0, 19);
  const stillStartUTC = moment.utc(startUTC).toDate();
  const endUTC = end.substring(0, 19);
  const stillEndUTC = moment.utc(endUTC).toDate();
  return stillEndUTC > new Date() && stillStartUTC < new Date();
}

export const Banner = () => {
  const banners = [
    {
      "content": "FABRIC invites nominations for four awards recognizing innovative uses of FABRIC resources—Best Published Paper, Best FABRIC Matrix, Best FABRIC Experiment, and Best Classroom Use of FABRIC — submissions due by <b>Monday, February 24 at 11:59 PM ET</b>, and winners announced at KNIT10.",
      "end_date": "2025-02-25 00:00:00+00:00",
      "link": "https://docs.google.com/forms/d/e/1FAIpQLSeTp3i2iDhB7bHgN8ryMxZci8ya87yjeQd7_JMZImUodNinVA/viewform",
      "start_date": "2025-01-22 00:00:00+00:00",
      "button": ">>> Submit Form"
    },
    {
      "content": "KNIT10 Call for Demos Now Open! Submit your demo by <b>February 24</b>.",
      "end_date": "2025-02-25 00:00:00+00:00",
      "link": "https://docs.google.com/forms/d/e/1FAIpQLScRIWqHliNP3DFWBCnalYN_fBXJXVM0PpP9YWWJdSebC95TvA/viewform",
      "start_date": "2025-02-02 00:00:00+00:00",
      "button": ">>> Submit Demo"
    }
  ]

  return (
    banners.map(((banner, index) => checkNotExpired(banner.start_date, banner.end_date) &&
    <MUIAlert
      color="warning"
      size="md"
      variant="soft"
      key={`banner-${index}`}
      sx={{
        display: 'block',
        textAlign: "center",
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      }}
    >
      <span>{Parser(banner.content)}
      <Link
        href={banner.link}
        target="_blank"
        rel="noreferrer"
        sx={{
          display: 'block',
          marginLeft: '20px',
          marginTop: '10px',
          fontSize: '0.85rem'
        }}
      >
        {banner.button}
      </Link></span>
    </MUIAlert>))
  )
}
