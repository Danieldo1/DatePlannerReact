import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <input
        type="text"
        placeholder="Contact Name"
        aria-label="Contact Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </label>

      <label>
      <input
        type="tel"
        name="phone"
        value={phone}
        placeholder="Phone"
        aria-label="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
</label>
      <label>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email"

      />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
  );
};
