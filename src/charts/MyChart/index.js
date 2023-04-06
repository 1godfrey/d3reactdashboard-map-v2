import React, { Component } from 'react';
import draw from './vis';
import PropTypes from 'prop-types';

export default class MyChart extends Component {


    
    componentDidMount() {
        draw(this.props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedState !== this.props.selectedState) {
          this.setState({ user: this.props.selectedState });
        }
      }
      
    render() {
        return (
            <div className='vis-mychart'/>
        )
    }
}

MyChart.propTypes = {
    selectedState: PropTypes.object.isRequired,
  };
  
