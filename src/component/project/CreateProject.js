import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };
  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create project </h5>
          <div className='input-field'>
            <label htmlFor='titlt'>Title</label>
            <input type='text' onChange={this.handleChange} id='titlt' />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              id='content'
              className='materialize-textarea'
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>CREATE</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
