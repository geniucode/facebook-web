import React, { useState } from 'react';

function loadRefreshContent() {
    console.log ("correcT");

    const [value, setValue] = useState();

    const refresh = ()=>{
        // re-renders the component
        setValue({});
    }
  
    return (
      <div>
        <button onClick={ refresh }>Refresh Component</button>
      </div>
    );
  }
  
  export default loadRefreshContent;