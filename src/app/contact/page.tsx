import "../../styles/contact.css"
import Image from "next/image"

export default function Contact(){
    return(
      <div className="At-top">
        <h1>Contact Us</h1>
      <div className="contact-box">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          
          <div className="contact-links">
            <a
              href="https://github.com/raaefkhan44"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/github.png"
                alt="GitHub"
                width={90}
                height={50}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/raaef-khan-b809482bb/"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={90}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    )
}