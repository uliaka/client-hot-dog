import React from 'react';
import '../Hotdogs.css';

class EditHotdog extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    const { description, price, title, _id } = props.data;
    const noState = !state.price && !state.title && !state.price;
    if (noState) {
      return {
        description,
        price,
        title,
        _id
      };
    }
    return null;
  }

  handleChange(prop, value) {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  }

  saveFormData() {
    const { title, price, description } = this.state;
    if (!title || !price || ! description) {
      alert('missing some fields');
      return;
    }
    this.props.saveHotdog(this.state);
  }

  render() {
    const { description, price, title } = this.state;
    return (
      <div className="hotdog-block">
        <label>
          Title
          <input type="text"
            name="title"
            value={title}
            onChange={(e) => {this.handleChange('title', e.target.value)}}
          />
        </label>
        <label>
         Description
          <input type="text"
            name="description"
            value={description}
            onChange={(e) => {this.handleChange('description', e.target.value)}}
          />
        </label>
        <label>
          Price
          <input type="number"
            name="price"
            value={price}
            onChange={(e) => {this.handleChange('price', e.target.value)}}
          />
        </label>
        <button onClick={() => this.saveFormData()}>save</button>
      </div>
    )
  }
}

export default EditHotdog;
