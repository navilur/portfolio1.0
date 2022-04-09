import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_uiy5wab",
      "template_0nu3n3h",
      form.current,
      "5XvucbnvBBAJmKtd5"
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>navilur.rahman@gmail.com</h5>
            <a href="mailto:navilur.rahman@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Navilur Rahman</h5>
            <a href="https://m.me/navilur.rahman" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+8801683822069</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801683822069"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form raf={form} onSubmit>
          <input
            type="text"
            placeholder="Full Name"
            required
            name="name"
            id=""
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            name="email"
            id=""
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
