import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarker,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [namError, setNamError] = useState(false);
  const [mailError, setMailError] = useState(false);
  const [subError, setSubError] = useState(false);
  const [mesError, setMesError] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    const nam = e.target.name;

    if (nam === "name") {
      setName(val);
      setNamError(false);
    }
    if (nam === "email") {
      setEmail(val);
      setNamError(false);
    }
    if (nam === "subject") {
      setSubject(val);
      setSubError(false);
    }
    if (nam === "message") {
      setMessage(val);
      setMesError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNamError(true);
    }
    if (email === "") {
      setMailError(true);
    }
    if (subject === "") {
      setSubError(true);
    }
    if (message === "") {
      setMesError(true);
    }
    if (name && email && subject && message) {
      console.log("sucess");
    }
  };

  return (
    <section id='contact'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>contact</h2>
        </header>
        <div className='contact'>
          <div>
            <article>
              <span>
                {" "}
                <FaMapMarker className='contact-icon' />
              </span>
              <div>
                <h4>location</h4>
                <p>
                  43 Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </article>
            <article>
              <span>
                <FaEnvelope className='contact-icon' />
              </span>
              <div>
                <h4>email</h4>
                <p>dasiloyemail2gmail.com</p>
              </div>
            </article>
            <article>
              <span>
                <FaPhoneAlt className='contact-icon' />
              </span>
              <div>
                <h4>phone</h4>
                <p>+234 9087 564 321</p>
              </div>
            </article>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-header'>
              <div className='form-div'>
                <label htmlFor='name'>Name:</label>
                <br />
                <input
                  style={{
                    border: namError
                      ? "1px solid red"
                      : "1px solid #e6e2e2",
                  }}
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  placeholder='Dasiloy'></input>
              </div>
              <div className='form-div'>
                <label htmlFor='email'>Email:</label>
                <br />
                <input
                  style={{
                    border: mailError
                      ? "1px solid red"
                      : "1px solid #e6e2e2",
                  }}
                  type='Email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  placeholder='dasiloydesigners@gmail.com'></input>
              </div>
            </div>
            <div className='form-div'>
              <label htmlFor='subject'>Subject:</label>
              <br />
              <input
                style={{
                  border: subError
                    ? "1px solid red"
                    : "1px solid #e6e2e2",
                }}
                type='text'
                name='subject'
                id='subject'
                value={subject}
                onChange={handleChange}
                placeholder='Subject'></input>
            </div>
            <div className='form-div'>
              <textarea
                style={{
                  border: mesError
                    ? "1px solid red"
                    : "1px solid #e6e2e2",
                }}
                onChange={handleChange}
                name='message'
                value={message}
                id='text-us'
                rows='7'
                placeholder='send us a message'></textarea>
            </div>
            <button type='submit' className='btn'>
              send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
