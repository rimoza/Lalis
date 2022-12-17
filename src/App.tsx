import React, { useState } from "react";
import Top from "./components/top/top";
import FinishButton from "./components/buttons/finishButton";
import Games from "./components/games/games";

export type UserType = 'guest' | 'home'
export declare interface IUser {
  title: UserType;
  value: number;
}
export declare interface IUserHistory {
  no: number;
  guest: IUser;
  home: IUser;
}

function App() {
  const [guest, setGuest] = useState<IUser>({ title: 'guest', value: 0 });
  const [home, setHome] = useState<IUser>({ title: 'home', value: 0 });
  const [userHistory, setUserHistory] = useState<IUserHistory[]>([]);
  const [message, setMessage] = useState<string>('');

  const increment = (userType: UserType) => {
    if (userType === 'guest') {
      setGuest((prevState) => ({ ...prevState, value: guest.value + 1 }));
    };
    if (userType === 'home') {
      setHome((prevState) => ({ ...prevState, value: home.value + 1 }));
    };
  }

  const decrement = (userType: UserType) => {
    if (userType === 'guest') {
      if (guest.value <= 0) {
        return
      } else {
        setGuest((prevState) => ({ ...prevState, value: guest.value - 1 }));
      }
    };
    if (userType === 'home') {
      if (home.value <= 0) {
        return
      } else {
        setHome((prevState) => ({ ...prevState, value: home.value - 1 }));
      }
    };
  }

  const finish = () => {
    // Check for 0-0 score.
    if (guest.value === 0 && home.value === 0) {
      setMessage('Please enter a score.');
      return
    }

    setUserHistory((prevState) => [
      ...prevState,
      { no: 0, guest: guest, home: home },
    ].map((item, index) => ({ ...item, no: index })));
    setGuest({ title: 'guest', value: 0 });
    setHome({ title: 'home', value: 0 });
    setMessage('');
  }

  const deleteHistoryItem = (item: IUserHistory) => {
    // Confirm delete from user.
    const confirmDelete = window.confirm('Are you sure you want to delete this game?');
    if (confirmDelete) {
      // Only one item in the history.
      if (userHistory.length === 1) {
        setUserHistory([]);
        return
      }
      console.log('userHistory:', userHistory)
      debugger;
      const newHistory = userHistory.filter(uh => uh.no !== item.no);
      setUserHistory(newHistory);
    }
  }

  return (
    <div className='bg-dark w-full min-h-screen flex justify-center text-white'>
      <div id='wrapper' className='px-5 py-5 my-5 rounded-md drop-shadow-md'>
        <Top increment={increment} decrement={decrement} guest={guest} home={home} />
        {message && <p className='text-center text-2xl font-bold'>{message}</p>}
        <div id='divider'>
          <FinishButton onClick={finish}>
            <span>Finish</span>
          </FinishButton>
        </div>
        <Games userHistory={userHistory} onDelete={deleteHistoryItem} />
      </div>
    </div>
  )
}

export default App
