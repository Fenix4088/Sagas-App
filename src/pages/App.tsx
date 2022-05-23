import React from 'react';
import '../App.css';
import { withPathname } from '../HOCs/withPathname';
import { useAppSelector } from '../hooks';
import { InitialState as PeopleState } from '../redux/reducers/people';
import {PeopleTable} from "../components/PeopleTable";

function App() {
  return (
    <div className='App'>
      <PeopleTable/>
    </div>
  );
}

export default withPathname(App);
