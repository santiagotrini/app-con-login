
import Navigation from './Navigation';
import Contenido from './Contenido';
import Login from './Login';
import Registrarse from './Registrarse';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login setLoggedInUser={setUser} />
        </Route>
        <Route path="/register">
          <Registrarse />
        </Route>
        <Route path="/">
          <Contenido user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
