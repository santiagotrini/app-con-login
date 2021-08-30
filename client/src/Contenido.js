import { useState } from 'react';

const Contenido = props => {

  const { user } = props;

  if (user) {
    return (
    <div>
      <h1>Hola, {user.username}</h1>
    </div>
  );
  } else {
    return (
      <div>
        <h1>Contenido de la pagina principal</h1>
      </div>
    );
  }

};

export default Contenido;
