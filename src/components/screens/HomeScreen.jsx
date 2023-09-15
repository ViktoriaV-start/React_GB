
import { useState } from "react";
import { logIn, signUp } from "../../services/firebase";
import { Error } from "../alerts";


export const HomeScreen = () => {

  const [login, setLogin] = useState('alex@gmail.com');
  const [pass, setPass] = useState('123456');
  const [newLogin, setNewLogin] = useState('');
  const [newPass, setNewPass] = useState('');
  const [error, setError] = useState('');

  const handleChangeLogin = (e) => {
    
    setLogin(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const handleChangeNewLogin = (e) => {
    
    setNewLogin(e.target.value);
  };
  const handleChangeNewPass = (e) => {
    
    setNewPass(e.target.value);
  };

  const register = async () => {
    try {
      await signUp(newLogin, newPass);
    } catch (err) {
      setError(err);
    }
  };

  const registeredLogin = async () => {
    try {
      await logIn(login, pass);
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    register();
    setNewLogin('');
    setNewPass('');
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    registeredLogin();
    setLogin('');
    setPass('');
  };

  const closeAlert = () => {
    setError('');
  };


  return (
  <>
    <div className="container">
      {error && <Error closeAlert={closeAlert}>Something went wrong, check login/password {error.message}</Error>}
      <section className="auth">
        <div className="auth__account">
          <form onSubmit={handleSubmitRegistration}>
            <fieldset className="auth__log-in">
              <legend className="auth__entering auth__text_font-size-13dark">REGISTRATION</legend>
                <p className="auth__text_font-size-13light">Please sign in below</p>
                <p className="auth__email-adr_mg-top auth__text_font-size-12dark">EMAIL ADDRESS<span>*</span></p>
                <input 
                      className="auth__email-input auth__email-input_mg-top"
                      value={newLogin}
                      onChange={handleChangeNewLogin}
                />
                <p className="auth__password_mg-top auth__text_font-size-12dark">PASSWORD<span>*</span></p>
                <input type="password"
                       className="auth__password-input auth__passowrd-input_mg-top"
                       value={newPass}
                       onChange={handleChangeNewPass} />

                <p className="auth__required-fields_mg-top auth__text_font-colored">*Required Fields</p>
                <button className="auth__button auth__button_font-size-14dark auth__button-login_mg-top" type="submit">SIGN IN</button>
            </fieldset>
          </form>

          <form onSubmit={handleSubmitLogin}>
            <fieldset className="auth__log-in">
              <legend className="auth__entering auth__text_font-size-13dark">ALREADY REGISTERED?</legend>
              <p className="auth__text_font-size-13light">Please log in below</p>
              <p className="auth__email-adr_mg-top auth__text_font-size-12dark">EMAIL ADDRESS<span>*</span></p>
              <input 
                    className="auth__email-input auth__email-input_mg-top"
                    value={login}
                    onChange={handleChangeLogin}
              />
              <p className="auth__password_mg-top auth__text_font-size-12dark">PASSWORD<span>*</span></p>
              <input type="password"
                     className="auth__password-input auth__passowrd-input_mg-top"
                     value={pass}
                     onChange={handleChangePass}
              />
              <p className="auth__required-fields_mg-top auth__text_font-colored">*Required Fields</p>

              <button
                      className="auth__button auth__button_font-size-14dark auth__button-login_mg-top"
                      type="submit">
                       LOG IN
              </button>
              <a href="#" className="auth__forgot-link auth__forgot-link_mrg-left auth__text_font-size-14dark">Forgot Password?</a>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  </>
);
}