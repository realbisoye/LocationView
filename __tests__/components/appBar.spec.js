import React from 'react'
import renderer from 'react-test-renderer'
import AppBar from '../../app/components/shared/appBar'

describe('GlobalAppBar', () => {
  const onMenuClick = jest.fn()
  const rendered = renderer.create(
    <AppBar
      title='Sample'
      menuIconName={'map-marker'}
      onMenuClick={onMenuClick}
    />
  )
  it('renders GlobalAppBar', () => {
    expect(rendered).toMatchSnapshot()
  })

  it('call action on menu click', () => {
    const menuButton = rendered.root.findByProps({testID: 'menuButton'})
    menuButton.props.onPress()
    expect(onMenuClick).toHaveBeenCalled()
  })
})
