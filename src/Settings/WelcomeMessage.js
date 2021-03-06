import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function ({ fistVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? <div>
          Welcome to CryptoDash. {' '}
        </div> : null}
    </AppContext.Consumer>
  );
};
