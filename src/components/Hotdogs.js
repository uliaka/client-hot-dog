import React from 'react';
import './Hotdogs.css';
import HotdogsData from './HotdogsData.js'


class Hotdog extends React.Component {
  render() {
    return (
      <div className="hotdog-block">
        <h2>{this.props.data.title}</h2>
        <span className="description"> {this.props.data.description}</span>
        <span className="price">{this.props.data.price} $ </span>
      </div>
    )
  }
}

function HotdogsList(props) {
    return (
      <div className="hotdog-list-block">
        <h1>Hot dogs list</h1>
        {props.hotdogs.map(item => <Hotdog data={item}/>)}
      </div>
    )
  }

  class Hotdogs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hotdogs: HotdogsData,
      }
    }

    render() {
      return (
        <HotdogsList hotdogs={ HotdogsData }/>
      )
    }
  }

export default Hotdogs;
