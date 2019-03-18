import React from 'react'
import renderer from 'react-test-renderer'
import MapMarker from '../../app/components/mapMarker'

describe('MapMarker', () => {
  it('renders map marker', () => {
    const rendered = renderer.create(
      <MapMarker
        id={'1'}
        latitude={40.785091}
        longitude={-73.968285}
        description={'Central Park playground'}
        title={'Central Park'}
      />,
    )

    expect(rendered).toMatchSnapshot()
  })
})
