const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name} : {number}
            <button type="button" onClick={() => onDelete(id)}>
              X
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
