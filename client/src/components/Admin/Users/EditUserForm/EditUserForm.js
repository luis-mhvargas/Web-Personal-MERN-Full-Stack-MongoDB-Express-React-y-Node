import React from "react";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const { user } = props;

  return (
    <di>
      <h1> Formulario de edicion de usuario</h1>
      <h2>{user.email}</h2>
    </di>
  );
}
