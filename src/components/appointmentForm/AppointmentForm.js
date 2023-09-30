import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          value={title}
          type="text"
          placeholder="Appointment Name"
          aria-label="Appointment Name"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br/>
<label>
<ContactPicker
        name='contact'
        value={contact}
        contacts={contactNames}
        onChange={(e) => setContact(e.target.value)}
      />
</label>
<br/>

      <label>
      <input
        value={date}
        required
        min={getTodayString()}
        type="date"
        aria-label="Date Picker"
        onChange={(e) => setDate(e.target.value)}
      />
      </label>
<br/>
      <label>
      <input
        value={time}
        name="time"
        type="time"
        required
        aria-label="Time Picker"
        onChange={(e) => setTime(e.target.value)}
      />
</label>
     <br/>

     <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
    </form>
  );
};
