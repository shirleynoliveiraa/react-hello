import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import getAgeFrom from "./helpers/DateHelpers";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";
//import { getNewId } from "./services/idService";

export default function App() {
  // const state = useState('Shirley');
  // const name = state[0];
  // const setName = state[1];

  const [name, setName] = useState('Shirley');
  const [birthDate, setBirthDate] = useState('1992-09-22');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {

    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    }
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange (newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>react-hello2</Header>

      <Main>
        <OnlineOffline isOnline={isOnline}/>
        {showTimer && (
          <div className="text-right mt-1">
          <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Show timer"
          onCheckboxChange={toggleShowTimer}
        />

        <TextInput
          id="textInput"
          labelDescription="Type in your name"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          id="dateInput"
          labelDescription="Type in your bith date"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          Your name is {name}, with {name.length} characters and you are {getAgeFrom(birthDate)} years old.
        </p>
      </Main>
    </>
  );
}
