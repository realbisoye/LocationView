import React from 'react'
import {Dimensions, SafeAreaView, View} from 'react-native'
import MapView from 'react-native-maps'
import SideMenu from 'react-native-side-menu'
import PropTypes from 'prop-types'
import AppBar from '../shared/appBar'
import styles from './styles'
import MapMarker from '../mapMarker'
import MarkerList from '../markerList'

const {width, height} = Dimensions.get('window')
const ASPECT_RATIO = (width / height)
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const initialRegion = {
  latitude: LATITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitude: LONGITUDE,
  longitudeDelta: LONGITUDE_DELTA,
}

const DEFAULT_PADDING = {
  bottom: 40,
  left: 40,
  right: 40,
  top: 40,
}

class Main extends React.Component {
  static map = null

  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
    }
    this.openMarkers = this.openMarkers.bind(this)
  }

  componentDidMount() {
    this.props.getMarkers()
  }

  componentDidUpdate() {
    const coordinates = this.props.markers.map((marker) => {
      return {
        longitude: marker.longitude,
        latitude: marker.latitude,
      }
    })
    if (coordinates.length) {
      this.map.fitToCoordinates(coordinates, {
        animated: true,
        edgePadding: DEFAULT_PADDING,
      })
    }
  }

  openMarkers(isOpen) {
    const openMenu = isOpen ? true : !this.state.openMenu
    this.setState({
      openMenu,
    })
  }

  render() {
    const screenWidth = Dimensions.get('window').width
    const {markers} = this.props
    return (
      <SideMenu
        menu={
          <MarkerList
            markers={markers}
            addMarker={this.props.addMarker}
            updateMarker={this.props.updateMarker}
            deleteMarker={this.props.deleteMarker}
            openForm={this.props.openForm}
            toggleForm={this.props.toggleMarkerForm}
          />}
        isOpen={this.state.openMenu}
        onChange={this.openMarkers}
        openMenuOffset={screenWidth * 0.85}
      >
        <SafeAreaView style={styles.wrapper}>
          <AppBar
            title={'Location View'}
            menuIconName={'map-marker-multiple'}
            onMenuClick={this.openMarkers}
          />
          <View style={styles.mapWrapper}>
            <MapView
              ref={(ref) => { this.map = ref }}
              provider={'google'}
              style={styles.map}
              showsUserLocation
              loadingEnabled
              region={initialRegion}
            >
              {markers.map((marker, index) => (
                <MapMarker
                  key={marker.longitude + marker.latitude + index}
                  longitude={marker.longitude}
                  latitude={marker.latitude}
                  id={marker.id}
                  title={marker.title}
                  description={marker.description}
                />))}
            </MapView>
          </View>
        </SafeAreaView>
      </SideMenu>
    )
  }
}

Main.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  openForm: PropTypes.bool,
  getMarkers: PropTypes.func,
  addMarker: PropTypes.func,
  toggleMarkerForm: PropTypes.func,
  updateMarker: PropTypes.func,
  deleteMarker: PropTypes.func,
}

export default Main
