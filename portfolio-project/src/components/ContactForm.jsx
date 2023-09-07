
export default function ContactForm () {


  return (
    <form className="contactForm">

      <span className="label-text">Name:</span>
      <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs justify-center" />

      <span className="label-text">Email Address:</span>
      <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs justify-center" />

      <span className="label-text">Message:</span>
      <textarea className="textarea textarea-bordered justify-center" placeholder="Message"></textarea>

      <button className="btn sendBtn">Send!</button>
    </form>
  )
}