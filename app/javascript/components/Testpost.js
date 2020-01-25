import React from "react"
import PropTypes from "prop-types"
class Testpost extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
      </React.Fragment>
    );
  }
}

Testpost.propTypes = {
  title: PropTypes.string
};
export default Testpost
