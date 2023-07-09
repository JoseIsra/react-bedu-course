import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUsers, loadThunkUser } from '../../actions/users';

/**
 * mapStateToProps
 * is used for selecting the part
 * of the data from the store that the connected component needs
- It is called every time the store state changes.
- It receives the entire store
state, and should return an object of data this component needs.
 */

class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadThunkUser();
  }

  render() {
    return (
      <main>
        <h1>Mis usuarios</h1>
        {this.props.error ? (
          <p>Ups! Algo salió mal</p>
        ) : (
          <section>
            {this.props.users.length > 0 ? (
              // eslint-disable-next-line react/prop-types
              this.props.users.map((user, idx) => <p key={idx}>{user.name}</p>)
            ) : (
              <p>Aún no tienes usuarios bro</p>
            )}
          </section>
        )}
      </main>
    );
  }
}

const mapToStateProps = (state) => {
  return state.users;
};

// FUNCTION FORM
// const mapDispatchToProps = (dispatch) => {
//   // this is like this because this dispatcher receibes an argument
//   // but this argument is not a reactive props in thie component
//   //belenBebe: (...args) => dispatch(loadUsers(...args)),

//   return bindActionCreators({ loadUsers, loadThunkUser }, dispatch);
// };

// OBJECT FORM
const actionsCreators = {
  loadUsers,
  loadThunkUser,
};

User.propTypes = {
  users: PropTypes.array,
  loadUsers: PropTypes.func,
  loadThunkUser: PropTypes.func,
  error: PropTypes.bool,
};

export default connect(mapToStateProps, actionsCreators)(User);
