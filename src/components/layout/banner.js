import { Alert as MUIAlert} from '@mui/joy'
import MUIButton from '@mui/joy/Button'
import Parser from 'html-react-parser'

const checkNotExpired = (start, end) => {
  const stillStartUTC = new Date(start);
  const stillEndUTC = new Date(end);
  return stillEndUTC > new Date() && stillStartUTC < new Date();
}

export const Banner = () => {
  const banners = [
    {
      "content": "FABRIC invites nominations for four awards recognizing innovative uses of FABRIC resources—Best Published Paper, Best FABRIC Matrix, Best FABRIC Experiment, and Best Classroom Use of FABRIC. Due <b>February 12, 2027</b>. Winners announced at KNIT14.",
      "end_date": "2027-02-13 00:00:00+00:00",
      "link": "https://forms.gle/zNDSryReJbrKpjE67",
      "start_date": "2026-10-13 00:00:00+00:00",
      "button": "Nominate Now"
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: 1.5,
      }}
    >
      <span>{Parser(banner.content)}</span>
      <MUIButton
        component="a"
        href={banner.link}
        target="_blank"
        rel="noreferrer"
        size="sm"
        color="warning"
        variant="solid"
        sx={{ whiteSpace: 'nowrap' }}
      >
        {banner.button}
      </MUIButton>
    </MUIAlert>))
  )
}
