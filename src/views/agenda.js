import { Page } from '@components/layout'

export const AgendaView = () => {
  return (
    <Page
      title="Agenda"
      description="Agenda"
    >
      <div style={{
        width: '100%',
        height: '3800px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <iframe 
          src="https://docs.google.com/document/d/e/2PACX-1vS9cX7THv3GkdzV1DYYHeWgwa63NiiNowZKvI4z-knmn-CMaLIUWyhplQ1cCjMWreFR8C2ii4WdCX91/pub?embedded=true"
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