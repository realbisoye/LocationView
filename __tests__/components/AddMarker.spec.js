import React from 'react'
import renderer from 'react-test-renderer'
import AddMarker from '../../app/components/addMarker'

const marker = {
  longitude: -73.968285,
  latitude: 40.785091,
  description: 'Central Park playground update',
  title: 'Central Park',
}

const updateMarker = jest.fn()
const addMarker = jest.fn()
const toggleForm = jest.fn()

describe('Add Marker', () => {
  const rendered = renderer.create(
    <AddMarker
      showForm
      isUpdate={false}
      marker={{}}
      updateMarker={updateMarker}
      toggleForm={toggleForm}
      addMarker={addMarker}
    />,
  )

  it('renders Add New Marker Form', () => {
    expect(rendered).toMatchSnapshot()
  })

  it('set value on form value change', () => {
    rendered.root.instance.setValue('title', 'Menlo Park')
    expect(rendered.root.instance.state.marker.title).toEqual('Menlo Park')
  })

  it('set toggle form on request', () => {
    rendered.root.instance.closeForm()
    expect(toggleForm).toHaveBeenCalled()
  })

  it('create marker on submit', () => {
    rendered.root.instance.submit()
    expect(addMarker).toHaveBeenCalled()
  })

  it('renders Update New Marker Form', () => {
    const updateRendered = renderer.create(
      <AddMarker
        showForm
        isUpdate={true}
        marker={marker}
        updateMarker={updateMarker}
        toggleForm={toggleForm}
        addMarker={addMarker}
      />,
    )
    expect(updateRendered).toMatchSnapshot()
    expect(updateRendered.root.instance.state.marker.title).toEqual(marker.title)
    expect(updateRendered.root.instance.state.marker.description).toEqual(marker.description)
  })

  it('update marker on submit for update', () => {
    const updateRendered = renderer.create(
      <AddMarker
        showForm
        isUpdate={true}
        marker={marker}
        updateMarker={updateMarker}
        toggleForm={toggleForm}
        addMarker={addMarker}
      />,
    )
    updateRendered.root.instance.submit()
    expect(updateMarker).toHaveBeenCalled()
  })
})