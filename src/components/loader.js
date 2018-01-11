
import React, { Component } from 'react';
import loaderback from '../SVG/Spinner.svg';
import loaderfront from '../SVG/Spinner.svg';

class Loader extends Component {
  render() {
    return (
     <div className="loader">
      <img src={loaderback} className="loader1" alt="Loading..." />
      <img src={loaderfront} className="loader2" alt="Loading..." />
    </div>
   )
  }
}
export default Loader;
