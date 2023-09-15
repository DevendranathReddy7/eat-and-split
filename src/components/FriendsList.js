import Button from "./Button"
import '../../src/index.css'
const FriendsList = (props) => {
    return (
        <div className="app">
            <div className="sidebar">
                <ul>
                    {props.initialFriends.map(friend => (
                        <li key={friend.id}>
                            <img src={friend.image} alt={friend.name} />
                            <h4>{friend.name}</h4>
                            {friend.balance < 0 ? <p className="red">you owe {friend.name} ${Math.abs(friend.balance)}</p> :
                                friend.balance > 0 ? <p className="green">{friend.name} owes you ${friend.balance}</p> :
                                    <p>you and {friend.name} are even</p>}
                            <Button onClick={() => props.onSelect(friend)}>{props.selectedFrds.id === friend.id ? 'Close' : 'Select'}</Button>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FriendsList