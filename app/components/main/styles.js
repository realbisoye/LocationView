import {StyleSheet} from 'react-native'
import colors from '../shared/colors'

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  texts: {
    color: colors.primaryText,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 1000,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: colors.appBarDark,
    flex: 1,
    flexDirection: 'column',
  },
})

export default styles
