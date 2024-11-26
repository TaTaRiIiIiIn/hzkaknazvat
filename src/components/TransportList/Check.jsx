import React from "react";
import { CheckboxGroup, AllCheckerCheckbox, Checkbox } from '@createnl/grouped-checkboxes';

const Chec = () => {
  const [onChange, setOnChange] = React.useState({});

  return (
    <div>
      <CheckboxGroup onChange={setOnChange}>
        <ul>
          <li>
            <label>
              <Checkbox name="upperbody" />
              <span>Download only the upper body points</span>
            </label>
          </li>
        </ul>
      </CheckboxGroup>
      
      <div>
        <h1>Values</h1>
        <pre>{JSON.stringify(onChange, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Chec;