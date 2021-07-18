import { Route, Redirect } from 'react-router-dom';

export default function RouteMiddleware({ component: Component, ...rest }) {
  const token = window.localStorage.getItem('authToken');
  return (
    <Route
      {...rest}
      render={(props) =>
        token === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
