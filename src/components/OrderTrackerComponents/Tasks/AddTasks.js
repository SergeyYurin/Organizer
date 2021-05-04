import React, { Component } from 'react';
import { connect } from 'react-redux';
import addTask from '../../actions/addTask';

class AddTasks extends Component {
  state = {
    order: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form
          className='add-form'
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <input
            className='form-control'
            type='text'
            placeholder='Add order'
            id='order'
            onChange={this.handleChange}
          />

          <input
            className='form-control'
            type='text'
            placeholder='Add day and time'
            onChange={this.handleChange}
          />

          <div class='alignCheckBoxes'>
            <input
              className='form-control-check'
              type='checkbox'
              onChange={this.handleChange}
            />
            <label>Set reminder</label>
          </div>

          <button
            type='submit'
            value='Save order'
            className='btn-primary'
            color='red'
          >
            Save Order
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTasks);
