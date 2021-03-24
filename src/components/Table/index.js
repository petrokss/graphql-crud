import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_USERS_DATA,
  DELETE_USER,
  UPDATE_USER,
} from '../../graphql/queryMutations';
import TableRow from './TableRow';
import './styles.css';

const Table = () => {
  const [direction, setDirection] = React.useState('');
  const [sortKey, setSortKey] = React.useState('');
  const [rowEditIndex, setRowEditIndex] = React.useState(null);

  const { data, error, loading, refetch } = useQuery(GET_USERS_DATA, {
    variables: {
      offset: 0,
      limit: 6,
    },
  });
  const [removeUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const tableData = (data && data.users) || [];

  const removeData = (id, e) => {
    e.stopPropagation();
    removeUser({ variables: { id } }).then(() =>
      refetch({ offset: tableData.length, limit: 0, sortKey, direction })
    );
  };

  const handleFetchMore = () => {
    refetch({ offset: tableData.length, limit: 6, sortKey, direction });
  };

  const onFilterChange = (key) => {
    let next = 'asc';
    if (sortKey === key) {
      if (direction === 'asc') {
        next = 'desc';
      } else if (direction === 'desc') {
        next = '';
      } else if (direction === '') {
        next = 'asc';
      }
    }
    setDirection(next);
    setSortKey(key);
    refetch({
      offset: tableData.length,
      limit: 0,
      sortKey: key,
      direction: next,
    });
  };

  const getClassNameFor = (keyName) =>
    direction && sortKey === keyName ? direction : 'normal';

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const onSaveData = (vals, e) => {
    e.stopPropagation();
    updateUser({ variables: vals }).then(() => {
      setRowEditIndex(null);
    });
  };

  const renderContent = () =>
    tableData.map((infoData, i) => (
      <TableRow
        key={infoData.id}
        data={infoData}
        isEdit={rowEditIndex === i}
        onShowEdit={() => setRowEditIndex(i)}
        onRemoveData={(id, event) => removeData(id, event)}
        onSaveData={(vals, event) => onSaveData(vals, event)}
      />
    ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            onClick={() => onFilterChange('name')}
            className={getClassNameFor('name')}
          >
            Name
          </th>
          <th
            onClick={() => onFilterChange('surname')}
            className={getClassNameFor('surname')}
          >
            Surname
          </th>
          <th
            onClick={() => onFilterChange('age')}
            className={getClassNameFor('age')}
          >
            Age
          </th>
          <th
            onClick={() => onFilterChange('email')}
            className={getClassNameFor('email')}
          >
            Email
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>{renderContent()}</tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <button
              className="table__load-more"
              onClick={() => handleFetchMore()}
            >
              load more
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
