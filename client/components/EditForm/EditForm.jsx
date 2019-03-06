import React from 'react'
import './editform.css'
import {connect} from 'react-redux'
import {getProfile, getWorkStatusList, getCohortList, updateProfile} from '../../api/users'
import Form from '../Form/Form'

class EditForm extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getProfile(this.props.match.params.id))
    this.props.dispatch(getWorkStatusList())
    this.props.dispatch(getCohortList())
  }

  handleSubmit (profile) {
    this.props.dispatch(updateProfile(profile))
  }

  render () {
    return (
      <React.Fragment>
        {
          (this.props.profile)
            ? <Form profile={this.props.profile} workStatuses={this.props.workStatuses} submit={this.handleSubmit}/> : <div>Loading...</div>

        }
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    workStatuses: state.workStatuses,
    cohortList: state.cohortList
  }
}

export default connect(mapStateToProps)(EditForm)
