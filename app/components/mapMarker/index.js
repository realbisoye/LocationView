import React from 'react'
import {Marker} from 'react-native-maps'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import colors from '../shared/colors'

const MapMarker = (props) => {
  const latlng = {
    latitude: props.latitude,
    longitude: props.longitude,
  }

  return (
    <Marker
      flat
      coordinate={latlng}
      identifier={props.id}
      title={props.title}
      description={props.description}
    >
      <Icon name={'map-marker'} size={35} color={colors.accent}/>
    </Marker>
  )
}

MapMarker.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  title: PropTypes.string,
}

export default MapMarker
