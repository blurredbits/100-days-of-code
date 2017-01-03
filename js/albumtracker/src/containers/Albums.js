import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Albums extends React.Component {
  // componentWillMount() {
  //   this.props.actions.fetchAlbums();
  // }

  render() {
    return (
      <div>
        1384924404-BC65E41766F195FD03C9054B8BEEF313
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    albums: state.albums
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
