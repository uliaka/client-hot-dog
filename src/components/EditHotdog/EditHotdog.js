import React from 'react';

class EditHotdog extends React.Component {
  state = {};

  static getDerivedStateFromProps(props, state) {
    const { description, price, title, id } = props.data;
    const noState = !state.price && !state.title && !state.price;
    if (noState) {
      return {
        description,
        price,
        title,
        id
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
          title
          <input type="text"
            name="title"
            value={title}
            onChange={(e) => {this.handleChange('title', e.target.value)}}
          />
        </label>
        <label>
          price
          <input type="text"
            name="price"
            value={price}
            onChange={(e) => {this.handleChange('price', e.target.value)}}
          />
        </label>
        <label>
         description
          <input type="text"
            name="description"
            value={description}
            onChange={(e) => {this.handleChange('description', e.target.value)}}
          />
        </label>
        <button onClick={() => this.saveFormData()}>save</button>
      </div>
    )
  }
}

export default EditHotdog;
