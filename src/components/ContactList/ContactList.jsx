const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className="contact-list-item">
            {name} : {number}
            <button
              type="button"
              className="contact-list-deleteButton"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
