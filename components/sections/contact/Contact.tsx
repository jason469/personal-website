import styles from "./Contact.module.scss";
import React, { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    // Prevent the form from submitting the traditional way
    e.preventDefault();

    // Don't submit twice
    if (loading) {
      return;
    }

    // 👇 A nice little track to get all the form values as an object
    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setSuccessMessage("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });

      setLoading(false);
      setSuccessMessage("Thank you for contacting us!");

      // Reset the form values after a successful submission
      form.reset();
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending your message...");
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.page}`}>
      <form onSubmit={onSubmit}>
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" required />
        </label>
        <button disabled={loading} type="submit">
          Send message!
        </button>
        {successMessage && <p>{successMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
