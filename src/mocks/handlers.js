import { graphql } from 'msw';
import data from '../data.json';

export const handlers = [
  graphql.query('getUsersData', (req, res, ctx) => {
    const { offset, sortKey, direction, limit } = req.variables;
    const sortedData = [...data];
    if (sortKey && direction) {
      sortedData.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return direction === 'asc' ? -1 : 1;
        }
        if (a[sortKey] > b[sortKey]) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return res(
      ctx.data({
        users: sortedData.slice(0, offset + limit),
      })
    );
  }),

  graphql.mutation('deleteUser', (req, res, ctx) => {
    const { id } = req.variables;
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data.splice(index, 1);
    }
    return res(
      ctx.data({
        users: data,
      })
    );
  }),

  graphql.mutation('updateUser', (req, res, ctx) => {
    const { id } = req.variables;
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = req.variables;
    }
    return res(
      ctx.data({
        users: true,
      })
    );
  }),
];
