import {StyleSheet} from 'react-native'
import colors from '../shared/colors'

const styles = StyleSheet.create({
  list: {
    borderColor: colors.appBarDark,
    borderTopWidth: 2,
    flex: 1,
    marginTop: 20,
  },
  listItemCoordinateText: {
    color: colors.primaryText,
    fontSize: 11,
    marginRight: 5,
  },
  listItemCoordinates: {
    flexDirection: 'row',
  },
  listItemDescription: {
    color: colors.primaryText,
    fontSize: 14,
    marginBottom: 5,
  },
  listItemDetails: {
    flex: 1,
    marginLeft: '5%',
  },
  listItemTitle: {
    color: colors.accent,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  listItemTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  listItemWrapper: {
    borderBottomWidth: 1,
    borderColor: colors.appBarDark,
    flexDirection: 'row',
    height: 100,
    marginHorizontal: 20,
    paddingVertical: 20,
    zIndex: 1000,
  },
  listWrapper: {
    backgroundColor: colors.appBarLight,
    flex: 1,
    flexDirection: 'column',
  },
})

export default styles
