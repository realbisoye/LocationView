import React from 'react'
import {Modal, Button, Text, TextInput, View, SafeAreaView} from 'react-native'
import PropTypes from 'prop-types'
import AppBar from '../shared/appBar'
import styles from './styles'
import colors from '../shared/colors'

class AddMarker extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const previous = props.marker
    const edited = state.marker
    if (props.isUpdate) {
      return {
        marker: {
          title: edited.title ? edited.title : previous.title,
          description: edited.description ? edited.description : previous.description,
          latitude: edited.latitude ? edited.latitude : JSON.stringify(previous.latitude),
          longitude: edited.longitude ? edited.longitude : JSON.stringify(previous.longitude),
        },
      }
    }
    return {
      marker: previous,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      marker: {
        title: '',
        description: '',
        longitude: '',
        latitude: '',
      },
    }
    this.closeForm = this.closeForm.bind(this)
    this.setValue = this.setValue.bind(this)
    this.submit = this.submit.bind(this)
  }

  setValue(field, value) {
    const marker = this.state.marker
    marker[field] = value
    this.setState({
      marker,
    })
  }

  closeForm() {
    this.setState({
      marker: {},
    }, this.props.toggleForm)
  }

  submit() {
    const marker = this.state.marker
    if (this.props.isUpdate) {
      this.props.updateMarker(this.props.marker._id, marker)
    } else {
      this.props.addMarker(marker)
    }
    this.setState({
      marker: {},
    })
  }

  render() {
    const marker = this.state.marker
    const hasError = !marker.title || !marker.longitude || !marker.latitude

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.showForm}
        onRequestClose={this.closeForm}
      >
        <SafeAreaView style={styles.modalContent}>
          <AppBar
            title={'Add Marker'}
            light
            menuIconName={'close'}
            onMenuClick={this.closeForm}
          />
          <View style={styles.formWrapper}>
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Title</Text>
              <TextInput style={styles.input}
                onChangeText={(text) => this.setValue('title', text)}
                value={this.state.marker.title}
                autoCapitalize={'words'}
                defaultValue={this.state.marker.title}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput style={styles.input}
                onChangeText={(text) => this.setValue('description', text)}
                value={this.state.marker.description}
                defaultValue={this.state.marker.description}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Latitude</Text>
              <TextInput style={styles.input}
                onChangeText={(text) => this.setValue('latitude', text)}
                value={this.state.marker.latitude}
                defaultValue={this.state.marker.latitude}
                keyboardType={'numeric'}
              />
            </View>
            <View style={styles.formField}>
              <Text style={styles.inputLabel}>Longitude</Text>
              <TextInput style={styles.input}
                onChangeText={(text) => this.setValue('longitude', text)}
                value={this.state.marker.longitude}
                defaultValue={this.state.marker.longitude}
                keyboardType={'numeric'}
              />
            </View>
            <View>
              <Button
                onPress={this.submit}
                title={this.props.isUpdate ? 'Update' : 'Add'}
                color={colors.accent}
                disabled={hasError}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}

AddMarker.propTypes = {
  showForm: PropTypes.bool,
  toggleForm: PropTypes.func,
  marker: PropTypes.object,
  isUpdate: PropTypes.bool,
  updateMarker: PropTypes.func,
  addMarker: PropTypes.func,
}

export default AddMarker