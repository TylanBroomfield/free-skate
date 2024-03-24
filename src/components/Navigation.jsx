import { useState } from "react";

export default function Navigation() {

const [login, setLogin] = useState(false);

function handleClickPopUp(){
  
}

  return (
    <div className="header-display">
      <header>
        <nav>
          <ul>
            <li><a href="">HOME</a></li>
            <li><h1>Free Skate</h1></li>
            {/* Change based on user login to display login/profile, also to alternate button
              function to <a> tag that opens profile page*/ }
            <li><button onClick={handleClickPopUp}>LOGIN</button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
