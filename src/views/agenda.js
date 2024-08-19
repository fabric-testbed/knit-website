import { Page } from '@components/layout'

export const AgendaView = () => {
  return (
    <Page
      title="Agenda"
      description="Agenda"
    >
      <div style={{
        width: '100%',
        height: '1150px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <iframe 
          src="https://docs.google.com/document/d/1PW4NBZxc3GqD8ScMWWSixq8TJSoETfG1RDStaHAitG8/pub?embedded=true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      </div>
    </Page>
  )
}