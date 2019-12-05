import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const User = ({user}) => user.name

export const UserPropTypes = {
  id: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

User.propTypes = UserPropTypes

const mapsStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.id],
})

export default connect(mapsStateToProps)(User)
