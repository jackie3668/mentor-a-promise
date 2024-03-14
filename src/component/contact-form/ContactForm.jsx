import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [data, setData] = useState({
    type: '',
    name: '',
    email: '',
    message: ''
  })

  const {type, name, email, message} = data
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value 
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://v1.nocodeapi.com/jackies3668/google_sheets/OcdaQtxAIMRIxKZi?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[type, name, email, message, new Date().toLocaleDateString()]])
      })
      await response.json()
      setData({...data, name: '', email: '', message: ''})
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='contact-form'>
        <div className='bg-1'></div>
        <div className='bg-2'></div>
        <div className='image'></div>
        <div className='form-content'>
          <div>
            <h4 className="h4-bold">Let's get in touch</h4>
            <p>Whether you're interested in registering a student, volunteering, exploring partnership opportunities, or have general inquiries, we're here to help! Reach out to us, and we will be in touch.</p>
          </div>
          <form onSubmit={handleSubmit}> 
            <div>
              <label className='p-bold' htmlFor="name">Name*</label>
              <input 
                id='name' 
                name='name'
                type="text"
                value={name}
                onChange={handleChange} 
              />
            </div>
            <div>
              <label className='p-bold' htmlFor="email">Email*</label>
              <input 
                id='email' 
                name='email'
                type="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='p-bold'>Inquiry Type*</label>
                <div className='radio-group'>
                  <div>
                    <input type="radio" id="general" name="type" value="General" onChange={handleChange} />
                    <label htmlFor="general">General</label>
                  </div>
                  <div>
                    <input type="radio" id="student" name="type" value="Student" onChange={handleChange} />
                    <label htmlFor="student">Student</label>
                  </div>
                  <div>
                    <input type="radio" id="volunteer" name="type" value="Volunteer" onChange={handleChange} />
                    <label htmlFor="volunteer">Volunteer</label>
                  </div>
                  <div>
                    <input type="radio" id="partnership" name="type" value="Partnership" onChange={handleChange} />
                    <label htmlFor="partnership">Partnership</label>
                  </div>
                </div>
            </div>
            <div>
              <label className='p-bold' htmlFor="message">Message*</label>
              <textarea 
                id="message"
                name='message' 
                cols="45" 
                rows="8"
                value={message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="blue-square-button">Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default ContactForm