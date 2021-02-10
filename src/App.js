import './App.css';
import {useState} from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input/input';

function App() {
  const [value, setValue] = useState();
  return (
    <div className="Payment">
      <div className="movie">movies</div>
      <div className="panel">
        Account → Choose Plan → Make Payment → Confirmation
      </div>
      <div className="acc">
      Start your membership.
      <br/><br/>
       <PhoneInput
      placeholder="+91 xxx-xxxx-xxx"
      value={value}
      onChange={setValue}/>
      </div>
    </div>
  );
}

export default App;
