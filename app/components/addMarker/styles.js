import {StyleSheet} from 'react-native'
import colors from '../shared/colors'

const styles = StyleSheet.create({
  formField: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  formWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  input: {
    borderColor: colors.appBarDark,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: colors.primaryText,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalContent: {
    backgroundColor: colors.appBarLight,
    flex: 1,
    flexDirection: 'column',
  },
})

export default styles
