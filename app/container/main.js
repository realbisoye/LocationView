import {connect} from 'react-redux'
import * as actions from '../actions'
import Main from '../components/main'

const mapStateToProps = (state) => {
  return {
    markers: state.markers,
    loading: state.loading,
    openForm: state.openForm,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  const getMarkers = () => {
    dispatch(actions.fetchMarkers())
  }
  const addMarker = (data) => {
    dispatch(actions.createMarker(data))
  }

  const updateMarker = (id, data) => {
    dispatch(actions.updateMarker(id, data))
  }

  const deleteMarker = (id) => {
    dispatch(actions.deleteMarker(id))
  }

  const toggleMarkerForm = (open) => {
    dispatch(actions.toggleMarkerForm(open))
  }

  return {addMarker, getMarkers, updateMarker, deleteMarker, toggleMarkerForm}
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainContainer
