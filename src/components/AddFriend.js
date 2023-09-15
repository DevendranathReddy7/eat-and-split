import { useState } from 'react'
import '../../src/index.css'
import Button from './Button'
const AddFriend = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('https://i.pravatar.cc/48?u=499476')
    const submitHandle = (e) => {
        e.preventDefault()
        if (name === '' || image === '') return;
        let id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}${id}`,
            balance: 0
        }
        props.onAddFriend(newFriend)
        setName('')
        setImage('https://i.pravatar.cc/48?u=')
    }

    return (
        <form className="form-add-friend" onSubmit={submitHandle}>
            <label>🧑‍🤝‍🧑Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>🧑Image URL: </label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            <Button >Add</Button>
        </form>
    )
}

export default AddFriend