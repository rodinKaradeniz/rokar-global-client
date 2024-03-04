import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkrbjko");
  if (state.succeeded) {
    return <p>Your message has been submitted.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name</label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="Enter your name here"
        required=""
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email address"
        required=""
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="email">Company (Optional)</label>
      <input
        id="company"
        type="company"
        name="company"
        placeholder="Company name"
      />

      <label htmlFor="email">Phone Number (Optional)</label>
      <input
        id="phoneNumber"
        type="phoneNumber"
        name="phoneNumber"
        placeholder="Your phone number"
      />
      <ValidationError
        prefix="Phone"
        field="phoneNumber"
        errors={state.errors}
      />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Your message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
