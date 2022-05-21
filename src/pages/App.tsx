import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { withPathname } from '../HOCs/withPathname';
import { useAppSelector } from '../hooks';
import { API } from '../rest';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../redux/reducers/people';

function App() {
  // const dispatch = useDispatch();
  //
  // React.useEffect(() => {
  //   dispatch(loadUsers({ page: 1, search: '' }));
  // }, [dispatch]);

  return (
    <div className='App'>
      <h1>Redux saga tutorial</h1>
    </div>
  );
}

export default withPathname(App);
