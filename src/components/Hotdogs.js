import React from 'react';
import './Hotdogs.css';
import HotdogsData from './HotdogsData.js';
import AddHotdogForm from './addHotdog/AddHotdog.js';
import EditHotdog from './EditHotdog/EditHotdog.js';


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
        {props.hotdogs.map(item => item.isEditing ?
            <EditHotdog key={item.id} saveHotdog={props.saveHotdog} data={item}/> :
            <Hotdog key={item.id} data={item}/>)}
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
      this.saveHotdog = this.saveHotdog.bind(this);
    }

    saveHotdog(hotdog) {
      const { id } = hotdog;
      const hotdogs = this.state.hotdogs.filter(h => h.id !== id);
      hotdogs.push(Object.assign({}, hotdog, { isEditing: false }))
      this.setState({
        hotdogs: hotdogs,
      })
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
          <HotdogsList saveHotdog={this.saveHotdog} hotdogs={this.state.hotdogs}/>
        </React.Fragment>
      )
    }
  }

export default Hotdogs;
