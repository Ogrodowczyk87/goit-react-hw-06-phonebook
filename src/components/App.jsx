import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={css.mainContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </div>
    </>
  );
};
