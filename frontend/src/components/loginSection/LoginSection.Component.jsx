import { useEffect, useState } from 'react';
import { loginUser, setUserToLocalStorage } from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';

const LoginSectionComponent = () => {
  const [signInObj, setSignInObj] = useState({
    email: "",
    password: "",
  });
  const [validationMsg, setValidationMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate()

  const handleSignInObj = (e) => {
    let newStateObj = {...signInObj};
    newStateObj[e.target.name] = e.target.value;
    setSignInObj(newStateObj);
  };

  const onLoginSubmit = () => {
    console.log(signInObj);
    if (!signInObj.password || !signInObj.email) {
      return setValidationMsg(`Required field: ${!signInObj.password ? "password" : "email"}`);
    }
    //todo: call API
    loginUser(signInObj)
      .then(response => {
        console.log('response....', response);

        if (response.status === 215) {
          setErrorMsg(response.data)
        } else {
          setUserToLocalStorage(response.data)
          navigate('/')
        }

      })
      .catch(error => {     
        console.log('error....',error);
        if (error) {
          setErrorMsg('Something went wrong. Please try again.')
        }
      })
      .finally(() => {
        // at the end of api calls
      })
  };
  return (
    <>
    <h1 className="page-title">Log in to your account</h1>
        
      <div className="form-wrapper">
        <div className="login-form">
          <div className="form mb-3">
            <label htmlFor="floatingInput">Email address</label>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              onChange={(e) => handleSignInObj(e)}
            />
          </div>
          <div className="form">
            <label htmlFor="floatingPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              onChange={(e) => handleSignInObj(e)}
            />
          </div>
          {validationMsg ? <p>{validationMsg}</p> : null}
          {errorMsg ? <p>{errorMsg}</p> : null }
          <button onClick={onLoginSubmit}>Sign In</button>
        </div>
      </div>
    </>
  );
}

export default LoginSectionComponent;
