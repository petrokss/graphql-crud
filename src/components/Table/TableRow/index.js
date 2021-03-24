import React from 'react';

const TableRow = ({ data, isEdit, onShowEdit, onRemoveData, onSaveData }) => {
  const [state, setState] = React.useState(data);
  const { id, name, surname, age, email } = state;

  const handleChangeElement = (key) => (event) => {
    setState((prevState) => {
      const newState = { ...prevState };
      newState[key] = event.target.value;
      return newState;
    });
  };

  return isEdit ? (
    <tr className="table__input-row">
      <td>
        <input
          name="name"
          type="text"
          placeholder="Input name"
          value={name}
          onChange={handleChangeElement('name')}
        />
      </td>
      <td>
        <input
          name="surname"
          type="text"
          placeholder="Input surname"
          value={surname}
          onChange={handleChangeElement('surname')}
        />
      </td>
      <td>
        <input
          name="age"
          type="number"
          placeholder="Input age"
          value={age}
          onChange={handleChangeElement('age')}
        />
      </td>
      <td>
        <input
          name="email"
          type="text"
          placeholder="Input email"
          value={email}
          onChange={handleChangeElement('email')}
        />
      </td>
      <td>
        <button
          className="table__delete-button"
          onClick={(e) => onSaveData(state, e)}
        >
          save changes
        </button>
      </td>
    </tr>
  ) : (
    <tr onClick={() => onShowEdit()}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>
        <button
          className="table__delete-button"
          onClick={(e) => onRemoveData(id, e)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
