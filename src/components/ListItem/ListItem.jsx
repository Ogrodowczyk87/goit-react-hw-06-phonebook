import { useDispatch } from 'react-redux';
import css from './ListItem.module.css';
import { deleteContactAction } from 'store/contacts/slice';

export const ListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContactBtn = id => {
    dispatch(deleteContactAction(id));
  };

  return (
    <li className={css.listItem} >
      {contact.name}: {contact.number}
      <button
        type="button"
        onClick={() => handleDeleteContactBtn(contact.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};
