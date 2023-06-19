import { useState } from "react";
import "./App.css";
import Spoiler from "./components/Spoiler";
import RangeInput from "./components/RangeInput";
import LoginForm from "./components/LoginForm";
import PasswordConfirm from "./components/PasswordConfirm";

import WatchContainer from "./components/Watch/WatchContainer";
function App() {
  return (
    <div className="App">
      <Spoiler header={<h1>Заголовок</h1>} open>
        <h2>Контент 1</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <Spoiler>
        <h2>Контент 2</h2>
        <p>лорем іпсум тралівалі і тп.</p>
      </Spoiler>
      <hr />
      <h2>RangeInput</h2>
      <RangeInput min={2} max={10} />
      <hr />
      <h2>LoginForm</h2>
      <LoginForm />
      <hr />
      <h2>PasswordConfirm</h2>
      <PasswordConfirm min={2} />
      <hr />

      <WatchContainer />
    </div>
  );
}

export default App;
