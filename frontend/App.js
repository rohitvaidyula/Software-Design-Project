import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Modali, {useModali} from "modali";

const App = () => {

  const [RegisterModal, toggleRegisterModal] = useModali({
    animated: true,
  });
  
  return (
    <div className="App">
      <h1>Software Design Project</h1>
      <h2>Please login or sign-up</h2>
      <LoginForm />
      <p className = "text-center">Are you new? Sign up here</p>
      <button
      onClick = {toggleRegisterModal}
      type = "button"
      className = "btn-sm btn-dark btn-block button">Register</button>
      <Modali.Modal {...RegisterModal}>
        <RegisterForm />
      </Modali.Modal>
    </div>
    
  );
}

export default App;
