import { useState } from "react";
import "./Login.css";
import logo from "../../assets/trendo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FormsFooter } from "../FormsFooter/FormsFooter";
import { EmailForm } from "../EmailForm/EmailForm";

const Login = () => {
  // API Config
  const base_url = "http://15.237.2.25";
  const api = "api";
  const version = "v1";

  // State to manage the styles of the login tabs
  const [tabIndex, settabIndex] = useState(0);
  // to continue password tab
  const [continueState, setContinueState] = useState(false);

  // Password, email, phone number, country_code state
  const [signInPassword, setSignInPassword] = useState("");
  const [signInPhone, setSignInPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // Getting User Password
  const onPasswordChange = (e) => {
    setSignInPassword(e.target.value);
  };

  // Getting User Phone number
  const onPhoneChange = (e) => {
    setSignInPhone(e.target.value);
  };

  return (
    <div className="Login">
      <div className="Login__container">
        {/* Logo Section  */}
        <div className="Login__header">
          <img className="App__logo" src={logo} alt="trendo logo" />
          {!continueState ? <h2>مرحبًا بك</h2> : <h2>تسجيل الدخول</h2>}
        </div>
        {/* Login Forms section */}
        <div className="Login__Forms">
          {!continueState ? (
            <>
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(tabIndex) => settabIndex(tabIndex)}
              >
                <TabList className="Login__FormsTabList">
                  <Tab className={`${tabIndex === 0 ? "active--tab" : null}`}>
                    رقم الهاتف
                  </Tab>
                  <Tab className={`${tabIndex === 1 ? "active--tab" : null}`}>
                    البريد الإلكتروني
                  </Tab>
                </TabList>

                <TabPanel>
                  <form className="Login__FormPhone">
                    {/* fieldset needs to be a separate component  */}
                    <fieldset id="Login" className="Login__FormPhoneFieldset">
                      <label htmlFor="phone">رقم الهاتف </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{2}"
                        placeholder="010-000-000-00"
                        onChange={onPhoneChange}
                      />
                    </fieldset>

                    <div className="Login__formRegisterButton">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setContinueState(true);
                        }}
                      >
                        استمرار
                      </button>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel>
                  {/* Email Form */}
                  <EmailForm />
                </TabPanel>
              </Tabs>
            </>
          ) : (
            <>
              <fieldset id="Login" className="Login__FormEmailFieldset">
                <label htmlFor="email-address">كلمة المرور</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={onPasswordChange}
                />
              </fieldset>

              <div className="Login__formRegisterButton">
                <button>تسجيل الدخول</button>
              </div>
            </>
          )}
        </div>
        {/* Download the apps section */}
        <FormsFooter />
      </div>
    </div>
  );
};

export default Login;
