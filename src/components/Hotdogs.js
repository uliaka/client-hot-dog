import React from 'react';
import './Hotdogs.css';
import HotdogsData from './HotdogsData.js';
import AddHotdogForm from './addHotdog/AddHotdog.js';
import EditHotdog from './EditHotdog/EditHotdog.js';


class Hotdog extends React.Component {

  onButtonClick() {
    this.props.startEditing(this.props.data._id)
  }

  onButtonRemove() {
    this.props.removeHotdog(this.props.data._id)
  }

  render() {
    return (
      <div className="hotdog-block">
      <div className="info-container">
          <h2>{this.props.data.title}</h2>
          <div className="description"> {this.props.data.description}</div>
          <div className="price">{this.props.data.price} $ </div>
        </div>
        <div className="button-container">
          <button onClick={() => this.onButtonClick()}>
            edit
          </button>
          <button onClick={() => this.onButtonRemove()}>
            remove
          </button>
        </div>
      </div>
    )
  }
}

function HotdogsList(props) {
    return (
      <div className="hotdog-list-block">
        <h1>Hot Dogs list</h1>
        {props.hotdogs.map(item => item.isEditing ?
            <EditHotdog key={item._id} saveHotdog={props.saveHotdog} data={item}/> :
            <Hotdog startEditing={props.startEditing} removeHotdog={props.removeHotdog} key={item._id} data={item}/>)}
      </div>
    )
  }

  class Hotdogs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hotdogs: [],
      }
      this.addHotdog = this.addHotdog.bind(this);
      this.saveHotdog = this.saveHotdog.bind(this);
      this.startEditing = this.startEditing.bind(this);
      this.removeHotdog = this.removeHotdog.bind(this);
    }

    componentDidMount() {
      fetch('http://localhost:8080/hotdogs', {
        headers: {
            'Content-Type': 'application/json',
        }
      })
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.setState({ hotdogs: res.data });
        })
        .catch(err => { console.log(err) })
    }

    saveHotdog(hotdog) {
      const { _id } = hotdog;
      const hotdogs = this.state.hotdogs.filter(h => h._id !== _id);
      hotdogs.push(Object.assign({}, hotdog, { isEditing: false }))
      this.setState({
        hotdogs: hotdogs,
      })
    }

    addHotdog(hotdog) {
      const { hotdogs } = this.state;
      fetch('http://localhost:8080/hotdogs', {
        method: 'POST',
        body: JSON.stringify(hotdog),
        headers: {
            'Content-Type': 'application/json',
        }
        }).then(res => {
          return res.json();
        }).then(res => {
          if (res.err) {
            alert(res.err)
            return;
          }
          hotdogs.push(hotdog);
          this.setState({ hotdogs });
        }).catch(err => { alert('error:', err.message) })
    }

    startEditing(_id) {
      const { hotdogs } = this.state;
      const updated = hotdogs.map(item => {
        if (item._id == _id) {
          return Object.assign({}, item, { isEditing: true })
        } else {
          return Object.assign({}, item, { isEditing: false })
        }
      })

      this.setState({
        hotdogs: updated,
      });
    }

    removeHotdog(_id) {
      const hotdogs = this.state.hotdogs.filter(h => h._id !== _id);
      this.setState({ hotdogs });
    }

    render() {
      return (
        <React.Fragment>
          <AddHotdogForm addHotdog={this.addHotdog} />
          <HotdogsList
            saveHotdog={this.saveHotdog}
            hotdogs={this.state.hotdogs}
            startEditing={this.startEditing}
            removeHotdog={this.removeHotdog}
            />
        </React.Fragment>
      )
    }
  }

export default Hotdogs;
