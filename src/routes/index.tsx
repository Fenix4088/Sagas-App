import App from "../pages/App";
import {Details} from "../pages/Details";
import React from "react";

export enum ROUTES {
  ROOT = '/',
}

type Id = 'main' | 'peopleDetails';

export interface RouteType {
  id: Id;
  path: ROUTES;
  component: JSX.Element;
}


export const routes: RouteType[] = [
  {
    id: 'main',
    path: ROUTES.ROOT,
    component: <App />,
  },
  {
    id: 'peopleDetails',
    path: ROUTES.ROOT,
    component: <Details />,
  },
];


