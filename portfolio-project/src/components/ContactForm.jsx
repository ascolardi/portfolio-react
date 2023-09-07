import { useState } from 'react';

export default function ContactForm () {

  const [ formData, setFormData ] = useState({name: '', email: '', message: ''})
  const [ currentError, setCurrentError ] = useState({ field: "", msg: "" })

  function handleInputBlur(e){
    if ( !formData[e.target.name] ) {
      setCurrentError({field: e.target.name, msg: "All form fields must be filled in!"})
    }
  }

  return (
    <form className="contactForm">

      <span className="label-text">Name:</span>
      <input 
        type="text" 
        placeholder="Name" 
        name="name"
        className="input input-bordered w-full max-w-xs justify-center" 
        value={formData.name}
        onBlur={handleInputBlur}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value })}
      />

      <span className="label-text">Email Address:</span>
      <input 
        type="email" 
        placeholder="Email Address" 
        name="email"
        className="input input-bordered w-full max-w-xs justify-center" 
        value={formData.email}
        onBlur={handleInputBlur}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value })}
      />

      <span className="label-text">Message:</span>
      <textarea 
        className="textarea textarea-bordered justify-center" placeholder="Message"
        name="message"
        value={formData.message}
        onBlur={handleInputBlur}
        onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value })}
      ></textarea>

      { currentError.field === "message" }{
        <p>{currentError.msg}</p>
      }

      <button className="btn sendBtn">Send!</button>
    </form>
  )
}