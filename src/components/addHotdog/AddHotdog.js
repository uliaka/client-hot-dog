import React from 'react';
import '../Hotdogs.css';

class AddHotdogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      title: '',
      description: '',
      price: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, value) {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  }

  addHotdog() {
    const { title, description, price } = this.state;
    if(!title || !description || !price) {
      return alert('missing input!')
    }
   this.props.addHotdog({
     title,
     description,
     price
   })
   this.resetForm();
  }

  resetForm() {
    this.setState({
      title: '',
      description: '',
      price: '',
    })
  }

  render() {
    return (
          <div className="form-create-hotdogs">
            <h2>Add Hot Dog</h2>
            <label>
              Title
              <input type="text"
                name="title"
                value={this.state.title}
                onChange={(e) => {this.handleChange('title', e.target.value)}}
              />
            </label>
            <label>
              Description
              <input type="text"
                name="description"
                value={this.state.description}
                onChange={(e) => {this.handleChange('description', e.target.value)}}
              />
            </label>
            <label>
              Price
              <input type="text"
                name="price"
                value={this.state.price}
                onChange={(e) => {this.handleChange('price', e.target.value)}}
              />
            </label>
            <button onClick={() => {this.addHotdog()}}>
              Add Hot Dog
            </button>
          </div>
    );
  }
}


export default AddHotdogForm
