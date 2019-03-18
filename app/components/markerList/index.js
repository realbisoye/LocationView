import React from 'react'
import {ScrollView, SafeAreaView} from 'react-native'
import PropTypes from 'prop-types'
import {MenuProvider} from 'react-native-popup-menu'
import AppBar from '../shared/appBar'
import AddMarker from '../addMarker'
import ListItem from './ListItem'
import styles from './styles'

class MarkerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: {},
      markers: [],
      updating: false,
      openForm: false,
    }
    this.renderListItem = this.renderListItem.bind(this)
    this.toggleMarkerForm = this.toggleMarkerForm.bind(this)
    this.openEditForm = this.openEditForm.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.openForm !== prevProps.openForm) {
      this.setState({
        openForm: this.props.openForm,
      })
    }
  }

  renderListItem(item, index) {
    return (
      <ListItem
        key={index}
        item={item}
        deleteMarker={this.props.deleteMarker}
        editMarker={this.openEditForm}
      />
    )
  }

  openEditForm(item) {
    this.setState({
      updating: true,
      marker: item,
    }, this.toggleMarkerForm)
  }

  toggleMarkerForm() {
    const toggle = !this.props.openForm
    this.props.toggleForm(toggle)
    if (!toggle) {
      this.setState({
        updating: false,
        marker: {},
      })
    }
  }

  render() {
    const {markers} = this.props
    return (
      <MenuProvider>
        <SafeAreaView style={styles.listWrapper}>
          <AppBar
            title={'Markers'}
            menuIconName={'map-marker-plus'}
            onMenuClick={this.toggleMarkerForm}
            light
          />
          <ScrollView contentContainerStyle={styles.list}>
            {markers.map((marker, index) => this.renderListItem(marker, index))}
          </ScrollView>
          <AddMarker
            showForm={this.state.openForm}
            addMarker={this.props.addMarker}
            isUpdate={this.state.updating}
            marker={this.state.marker}
            updateMarker={this.props.updateMarker}
            toggleForm={this.toggleMarkerForm}
          />
        </SafeAreaView>
      </MenuProvider>
    )
  }
}

MarkerList.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object),
  addMarker: PropTypes.func,
  openForm: PropTypes.bool,
  toggleForm: PropTypes.func,
  updateMarker: PropTypes.func,
  deleteMarker: PropTypes.func,
}

export default MarkerList