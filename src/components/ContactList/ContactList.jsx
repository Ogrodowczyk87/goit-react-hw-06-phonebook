import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ListItem } from 'components/ListItem/ListItem';

export const ContactList = () => {
  const contactSelector = state => state.contacts.contacts;
  const contacts = useSelector(contactSelector);

  const filterSelector = state => state.filter.searchQuery;
  const filter = useSelector(filterSelector);

  const filtredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.contactList}>
        {filtredData.map(contact => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
