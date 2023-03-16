import React, { useState } from "react";
import { send } from 'emailjs-com';
import './ContactPage.css';

export default function ContactPage(props) {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_5ujuq5p',
          'template_2huvbwp',
          toSend,
          '3p82pPQGGw838DKuu'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className="ContactPageComponent">
            <h1>Like what you see?</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Your Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <textarea
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}