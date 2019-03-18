import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import styles from './styles'
import colors from './colors'

const AppBar = (props) => (
  <View style={[styles.appBar, {
    backgroundColor: props.light ? colors.appBarLight : colors.appBarDark,
  }]}
  >
    <TouchableOpacity testID={'menuButton'} onPress={props.onMenuClick}>
      <Icon name={props.menuIconName} size={25} color={colors.primaryText} />
    </TouchableOpacity>
    <Text testID={'apptitle'} style={styles.appBarTitle}>
      {props.title}
    </Text>
  </View>
)

AppBar.propTypes = {
  title: PropTypes.string,
  menuIconName: PropTypes.string,
  onMenuClick: PropTypes.func,
  light: PropTypes.bool,
}

export default AppBar
