import React from 'react'
import { Redirect } from 'react-router'
import { Home,Home2} from './components';
const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/Home2',
    'component': Home2
   },
  // {
  //   'path':'/Input',
  //   'component': Input
  // },
  // {
  //   'path':'/level1/:value',
  //   'component': Output
  // }

  ];

export default routes;