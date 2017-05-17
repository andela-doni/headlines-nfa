import React from 'react';
import PropTypes from 'prop-types';
 // Title Component
export default class Title extends React.Component {
  render() {
    return (<h1>{this.props.title}</h1>);
  }
}
Title.propTypes = {
  title: PropTypes.element.isRequired
};

