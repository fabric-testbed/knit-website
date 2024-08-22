import { Page } from '@components/layout'
import knit9logo from '@images/KNIT9-logo.png'

export const AgendaView = () => {
  return (
    <Page
      title="Agenda"
      description="Agenda"
    >
      <img src={ knit9logo } width="100%"/>
      <div style={{
        width: '100%',
        height: '2700px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <iframe 
          src="https://docs.google.com/document/d/1FKLaYOyQzHG5MnrP7RltSC_uGcyij49LcycZGy4o1RM/pub?embedded=true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        ></iframe>
      </div>
    </Page>
  )
}