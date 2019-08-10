import React from 'react';
import './Hotdogs.css';
import HotdogsData from './HotdogsData.js';
import AddHotdogForm from './addHotdog/AddHotdog.js';


class Hotdog extends React.Component {
  render() {
    return (
      <div className="hotdog-block">
        <h2>{this.props.data.title}</h2>
        <div className="description"> {this.props.data.description}</div>
        <div className="price">{this.props.data.price} $ </div>
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
      this.addHotdog = this.addHotdog.bind(this);
    }

    addHotdog(hotdog) {
      const { hotdogs } = this.state;
      hotdogs.push(hotdog);
      this.setState({ hotdogs });
    }

    render() {
      return (
        <React.Fragment>
          <AddHotdogForm addHotdog={this.addHotdog} />
          <HotdogsList hotdogs={this.state.hotdogs} />
        </React.Fragment>
      )
    }
  }

export default Hotdogs;
