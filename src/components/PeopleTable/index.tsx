import React from 'react';
import { useAppSelector } from '../../hooks';
import { InitialState as PeopleState } from '../../redux/reducers/people';
import { PeopleTablePagination } from '../PeopleTablePagination';

export const PeopleTable = () => {
  const peopleState = useAppSelector<PeopleState>((s) => s.peopleReducer);

  const onPaginationChange = (pageIndex: number): void => {
    console.log(pageIndex);
  };

  return (
    <>
      <h1>Star Wars People</h1>
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
