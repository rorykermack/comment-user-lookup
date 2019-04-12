/* Libs */
import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
/* --- Libs */

/* Main App Route */
import App from '../screens/app/app.react';
/* --- Main App Route */

/* Screens */
import Home from '../screens/home/home.page';
/* --- Screens */

/* 404 Page */
import NotFound from '../screens/not-found/not-found.page';
/* --- 404 Page */

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  )
};

