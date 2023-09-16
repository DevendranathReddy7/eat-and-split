import { useState } from "react";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";
const initialFriendsList = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  }
];


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [initialFriends, setInitialFriends] = useState(initialFriendsList)
  const [selectedFrd, setSelectedFrd] = useState('')
  const showAddFriendHandle = () => {
    setIsOpen(open => !open)

  }
  const addedNewFriend = (newFrd) => {
    setInitialFriends(frdList => [...frdList, newFrd])
    setIsOpen(false)
  }

  const handleSelectedFriend = (sFrd) => {
    setSelectedFrd(selected => selected.id === sFrd.id ? '' : sFrd)
  }

  const msgHandler = (balance) => {
    setInitialFriends(intFrd => intFrd.map(frd => frd.id === selectedFrd.id ? { ...frd, balance: balance } : frd))
    setSelectedFrd('')
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList initialFriends={initialFriends} onSelect={handleSelectedFriend} selectedFrds={selectedFrd} />
          {isOpen && <AddFriend onAddFriend={addedNewFriend} />}
          <Button onClick={showAddFriendHandle}>{isOpen ? 'Close' : 'Add Friend'}</Button>
        </div>
        {selectedFrd && <SplitBill selectedFrds={selectedFrd} onMsg={msgHandler} />}
      </div>

    </>
  )
}

export default App