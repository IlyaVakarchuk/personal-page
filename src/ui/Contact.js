import React, { Component } from 'react';

const MailForm = class MailForm extends Component {
  render() {
    return (
      <form>
        <input className='name' type='text' placeholder="Your's name" />
        <input className='email' type='email' placeholder="Your's email" />
        <input className='object' type='object' placeholder="Object of message" />
        <textarea></textarea>
        <input type='submit' />
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