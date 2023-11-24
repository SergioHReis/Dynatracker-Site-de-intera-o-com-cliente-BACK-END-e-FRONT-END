import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../../firebase/firebaseConfig'; // Importe o arquivo de configuração do Firebase

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!firebase.auth().currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
