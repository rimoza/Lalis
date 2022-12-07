import React, { useState } from "react";

import Top from "./components/top/top";
import Games from "./components/games/games";
import FinishButton from "./components/buttons/finishButton";

// Move types to types.ts.

export type UserType = 'guest' | 'home';  // GameType

export declare interface IUser {  // IGameScore
  title: UserType;
  value: number;
}

export declare interface IUserHistory {  // IGameHistory
  no: number;
  guest: IUser;  // guestScore: IGameScore;
  home: IUser;  // homeScore: IGameScore;
}

function App() {
  const [guest, setGuest] = useState<IUser>({ title: 'guest', value: 0 });  // currentGuestScore
  const [home, setHome] = useState<IUser>({ title: 'home', value: 0 });  // currentHomeScore
  const [userHistory, setUserHistory] = useState<IUserHistory[]>([]);  // gameHistory

  const increment = (userType: UserType) => {
    if (userType === 'guest') {
      setGuest((prevState) => ({ ...prevState, value: guest.value + 1 }));
      return;
    };
    setHome((prevState) => ({ ...prevState, value: home.value + 1 }));
  }

  const decrement = (userType: UserType) => {
    if (userType === 'guest') {
      setGuest((prevState) => ({ ...prevState, value: guest.value == 0 ? guest.value : guest.value - 1 }));
      return;
    };
    setHome((prevState) => ({ ...prevState, value: home.value == 0 ? home.value : home.value - 1 }));
  }

  const finish = () => {
    setUserHistory((prevState) => [
      ...prevState,
      { no: prevState.length, guest: guest, home: home },
    ]);
    setGuest({ title: 'guest', value: 0 });
    setHome({ title: 'home', value: 0 });
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
      const newHistory = [...userHistory];
      newHistory.splice(item.no - 1, 1);
      setUserHistory(newHistory);
    }
  }

  return (
    <div className='bg-dark w-full min-h-screen flex justify-center text-white'>
      <div id='wrapper' className='px-5 py-5 my-5 rounded-md drop-shadow-md'>
        <Top increment={increment} decrement={decrement} guest={guest} home={home} />
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

export default App;
