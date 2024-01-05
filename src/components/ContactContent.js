import './ContactContentStyle.css';
import React from 'react'

const ContactContent = () => {
  return (
    <div className='form'>
    <form>
    <label>your name</label>
    <input type='text'></input>
    <label>email</label>
    <input type='email'></input>
    <label>subject</label>
    <input type='text'></input>
    <label>message</label>
    <input type='text'></input>
    <textarea rows={6} placeholder='Type Your Message Here ' />
    <button className='btn'>submmit</button>
    </form>
    </div>
    
    
  )
}

export default ContactContent
