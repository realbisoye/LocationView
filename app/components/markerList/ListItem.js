import React from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import styles from './styles'
import colors from '../shared/colors'

const ListItem = (props) => (
  <View style={styles.listItemWrapper}>
    <Icon name={'map-marker'} size={30} color={colors.accent}/>
    <View style={styles.listItemDetails}>
      <View style={styles.listItemTitleWrapper}>
        <Text style={styles.listItemTitle}>{props.item.title}</Text>
        <Menu>
          <MenuTrigger>
            <Icon name={'dots-vertical'} size={22} color={colors.primaryText}/>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => props.editMarker(props.item)} text='Edit' />
            <MenuOption onSelect={() => props.deleteMarker(props.item._id)} text='Delete' />
          </MenuOptions>
        </Menu>
      </View>
      {props.item.description && <Text style={styles.listItemDescription}>{props.item.description}</Text>}
      <View style={styles.listItemCoordinates}>
        <Text style={styles.listItemCoordinateText}>Latitude: {props.item.latitude}</Text>
        <Text style={styles.listItemCoordinateText}>Longitude: {props.item.longitude}</Text>
      </View>
    </View>
  </View>
)

ListItem.propTypes = {
  item: PropTypes.object,
  editMarker: PropTypes.func,
  deleteMarker: PropTypes.func,
}

export default ListItem
