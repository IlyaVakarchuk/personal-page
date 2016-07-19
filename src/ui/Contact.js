import React, { Component } from 'react';
import $ from 'jquery';

const MailForm = class MailForm extends Component {
  constructor() {
    super();

    this.state = {
      valueAuthorName : '',
      valueAuthorEmail : '',
      valueAuthorObject : '',
      valueAuthorText : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  handleChange (type, e) {
    switch(type) {
      case 'author-name' :
        this.setState({valueAuthorName : e.target.value});
        break;
      case 'author-email' :
        this.setState({valueAuthorEmail : e.target.value});
        break;
      case 'author-object' :
        this.setState({valueAuthorObject : e.target.value});
        break;
      case 'author-text' :
        this.setState({valueAuthorText : e.target.value});
        break;
      default:
        break;
    }
  }

  sendMail(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form>
        <input className='name' type='text' placeholder="Your's name" value={ this.state.valueAuthorName } onChange={ (event) => this.handleChange('author-name', event) } />
        <input className='email' type='email' placeholder="Your's email" value={ this.state.valueAuthorEmail } onChange={ (event) => this.handleChange('author-email', event) } />
        <input className='object' type='object' placeholder="Object of message" value={ this.state.valueAuthorObject } onChange={ (event) => this.handleChange('author-object', event) } />
        <textarea value={ this.state.valueAuthorText } onChange={ (event) => this.handleChange('author-text', event) } ></textarea>
        <input onClick={ this.sendMail } type='submit' value='Send' />
      </form>
    )
  }
}

const Contact = class Contact extends Component {
  render() {
    return (
      <div id='contact-page'>
        <div className='intro'>
          <div className='lvl-01'>contact to me</div>
          <div className='lvl-02'>contact me if you have any ideas and suggestions</div>
        </div>
        <div className='container'>
          <div className='mail-form'>
            <MailForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;