import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        ref={register({ required: true, maxLength: 20 })}
      />
      <input
        name="lastName"
        ref={register({
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      <input
        name="age"
        type="number"
        ref={register({
          min: 18,
          max: 99,
        })}
      />
      <input type="submit" />
    </form>
  );
}

export default App;

{
  /* <select name="gender" ref={register}>
<option value="male">male</option>
<option value="female">female</option>
</select> */
}
