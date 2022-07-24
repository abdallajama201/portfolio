import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setUserName(inputValue);
      setContent(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !content) {
      setErrorMessage('Email is invalid or there is no content');
      setTimeout(function() {
        setErrorMessage('');},
        3000
      )
      setUserName('');
      setContent('');
      setEmail('');
      return;
    }
  };

  return (
    <div>
      <div className="column justify-content-center">
        <div className='topTerminal col-7 mx-auto'></div>
        <div className='botTerminal col-7 mx-auto'>
          <form className="form column justify-content-center">
            <input
              className='col-12'
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              />
            <input
              className='col-12'
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
              />
            <textarea
              className='col-12'
              value={content}
              name="content"
              onChange={handleInputChange}
              type="text"
              placeholder="Please leave a message"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default Form;
