import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
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
          <form>
            <div>
              <label className='p-bold' htmlFor="name">Name*</label>
              <input id='name' type="name" />
            </div>
            <div>
              <label className='p-bold' htmlFor="email">Email*</label>
              <input id='email' type="email" />
            </div>
            <div>
              <label className='p-bold' htmlFor="radioGroup">Inquiry Type*</label>
              <div className='radio-group'>
                <div>
                  <input type="radio" id="radio1" name="radioGroup" class="custom-radio"/>
                  <label for="radio1">General</label>
                </div>
                <div>
                  <input type="radio" id="radio2" name="radioGroup" class="custom-radio"/>
                  <label for="radio2">Student</label>
                </div>
                <div>
                  <input type="radio" id="radio3" name="radioGroup" class="custom-radio"/>
                  <label for="radio2">Volunteer</label>
                </div>
                <div>
                  <input type="radio" id="radio4" name="radioGroup" class="custom-radio"/>
                  <label for="radio2">Partnership</label>
                </div>
              </div>
            </div>
            <div>
              <label className='p-bold' htmlFor="message">Message*</label>
              <textarea name="message" id="message" cols="45" rows="8"></textarea>
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