import './Styles/contacts.css';
import { useState } from 'react';
const contactsArray = [
  {
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male',
  },
  {
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female',
  },
  {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  },
  {
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female',
  },
  {
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male',
  },
  {
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380956319521',
    gender: 'male',
  },
];

function Сontacts() {
  const [search, findContacts] = useState('');
  const filterContacts = (data) => {
    return data.filter(
      (el) =>
        el.firstName.toLowerCase().includes(search.toLowerCase()) ||
        el.lastName.toLowerCase().includes(search.toLowerCase()) ||
        el.phone.includes(search),
    );
  };
  return (
    <div className="Сontacts">
      <input
        type="text"
        placeholder="🔍Search..."
        onChange={(el) => findContacts(el.target.value)}></input>
      <ul>
        {filterContacts(contactsArray).map((el) => {
          return (
            <li key={el.firstName}>
              <p className="Contant-Info">
                {el.firstName} {el.lastName}
                &nbsp;
                {el.gender ? (el.gender === 'male' ? ' ♂' : ' ♀') : ''}
                <br></br>
                {el.phone}
              </p>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Сontacts;
