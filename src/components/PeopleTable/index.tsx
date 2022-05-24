import React from 'react';
import { useAppSelector } from '../../hooks';
import {
  InitialState as PeopleState,
  loadUsers,
} from '../../redux/reducers/people';
import { PeopleTablePagination } from '../PeopleTablePagination';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const PeopleTable = () => {
  const dispatch = useDispatch();
  const peopleState = useAppSelector<PeopleState>((s) => s.peopleReducer);

  const onPaginationChange = (pageIndex: number): void => {
    dispatch(loadUsers({ page: pageIndex, search: peopleState.search }));
  };

  const search = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(loadUsers({ page: 1, search: value }));
  };

  return (
    <>
      <h1>Star Wars People</h1>
      <form style={{ display: 'inline-block' }}>
        <input
          type='text'
          placeholder={'search people'}
          value={peopleState.search}
          onChange={search}
        />
      </form>
      {peopleState.loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <table
            style={{
              border: '1px solid black',
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr
                style={{
                  border: '1px solid black',
                }}
              >
                <th>name</th>
                <th>birth year</th>
                <th>eye color</th>
                <th>gender</th>
                <th>hair color</th>
                <th>height</th>
                <th>details</th>
              </tr>
            </thead>
            <tbody>
              {peopleState.data &&
                peopleState.data.results.map(
                  ({
                    name,
                    birth_year,
                    eye_color,
                    gender,
                    hair_color,
                    height,
                    url,
                  }) => {
                    return (
                      <tr
                        key={name}
                        style={{
                          border: '1px solid black',
                        }}
                      >
                        <td>{name}</td>
                        <td>{birth_year}</td>
                        <td>{eye_color}</td>
                        <td>{gender}</td>
                        <td>{hair_color}</td>
                        <td>{height}</td>
                        <td>
                          <NavLink to={`/people/${url.replaceAll(/\D/g, '')}`}>
                            details
                          </NavLink>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>

          <PeopleTablePagination
            page={peopleState.page}
            total={peopleState.data?.count || 1}
            onChange={onPaginationChange}
          />
        </>
      )}
    </>
  );
};
