import { useState } from "react";
import { Error } from "../alerts";
import { MyButton } from "../MyButton";

export const Edit = ({name,
                      email,
                      visible,
                      showSuccess,
                      save,
                      saveVisible,
                      changeScreen }) => {

  const alertMessages = {
    'errorName': 'Enter correct name',
    'errorEmail': 'Enter correct email address',
    'other': 'Something goes wrong. Try later!'
  };
    
    const [valueName, setValueName] = useState(name);
    const [valueEmail, setValueEmail] = useState(email);
    const [valueVisible, setValueVisible] = useState(visible);
    const [alertText, setAlertText] = useState('');
    const [alert, setAlert] = useState('hidden');

    const handleName = (event) => {
      return setValueName(event.target.value);
    }
    const handleEmail = (event) => {
      return setValueEmail(event.target.value);
    }
    const showAlert = (text = 'other') => {
      setAlertText(alertMessages[text]);
      setAlert('');
    }

    const makeSave = () => {
      
      const regexp = /^([!#$%&*-+{}|?/~\w]+(.?[\w]+)*@([\w-]{1,255}\.)[\w-]{2,4})?$/;

      // if (valueName.trim() !== '') {
        
      //   saveName(valueName.trim());
      // } else {
      //   showAlert('errorName');
      //   return;
      // }

      if (valueName.trim() === '') {
        showAlert('errorName');
        return;
      }

      
      if (!regexp.test(valueEmail.trim())) {
        showAlert('errorEmail');
        return;
      }

      if (valueEmail.trim() === '') {
        showAlert('errorEmail');
        return;
      }

      // if (valueEmail.trim() !== '') {
      //   saveEmail(valueEmail.trim());
      // }

      let userObj = {
        email: valueEmail.trim(),
        name: valueName.trim(),
        visible: visible,
      }


     save(userObj);

      showSuccess();
      changeScreen();

      return;
    }




  return (
    <div className="profile__wrapper container">
      
      <div className="profile">

        <div className="profile__head">EDIT PROFILE</div>

        <div className={"note "+ alert}>
          <Error>{alertText}</Error>
        </div>

        <div className="profile__user">

          <div className="profile__text">Name*</div>
          <input type="text"
                 className="profile__input-edit"
                 value={valueName}
                 placeholder={name}
                 autoFocus={true}
                 required
                 onChange={handleName}
          />

          <div className="profile__text">Email*</div>
          <input type="email"
                 name="email"
                 className="profile__input-edit"
                 value={valueEmail}
                 placeholder={email} 
                 required
                 onChange={handleEmail}
                 />
          <div className="profile__text">Show Email</div>
          <input type="checkbox"
                 className="profile__checkbox"
                 checked={visible}
                 onClick={saveVisible}
                 readOnly
                 />

        <p className="auth__required-fields_mg-top auth__text_font-colored">*Required Fields</p>
        </div>

        <button onClick={makeSave} className="auth__button auth__button_font-size-14dark auth__button-login_mg-top" type="submit">SAVE</button>
        
      </div>
    
      
      
    </div>
    )
}