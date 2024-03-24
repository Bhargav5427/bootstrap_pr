import React, { useState } from 'react'

const Contact = () => {
  const[data, setdata]=useState()
    let handle =(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    }

    const submit =()=>{
        console.log(data);
    }
  return (
    <section id="contact">
      <div className="contact-container container">
        <div className="contact-img">
          <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
        </div>

        <div className="form-container">
          <h2>Contact Us</h2>
          <input type="text" name="name" placeholder="Your Name"onChange={handle} required />
          <input type="email" name="email" placeholder="E-Mail" onChange={handle} required />
          <textarea
            cols="30"
            rows="6"
            placeholder="Type Your Message"
            name="desc"
            onChange={handle}
            required
          ></textarea>
          {/* <a className="btn btn-primary" onClick={submit}> Submit</a> */}
          <button className='btn btn-primary' onClick={submit}>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact