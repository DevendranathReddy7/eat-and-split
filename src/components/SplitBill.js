import Button from "./Button"
import '../index.css'
import { useState } from "react"
const SplitBill = (props) => {
    const [totalBill, setTotalBill] = useState(0)
    const [yourBill, setYourBill] = useState(0)
    const frdBill = totalBill ? totalBill - yourBill : ''

    const handleSubmit = (e) => {
        e.preventDefault()

        if (totalBill === '' || yourBill === '') return
        // let detailedExpanses = {
        //     totalBill,
        //     yourBill, frdBill
        // }
        if (yourBill > frdBill) {
            props.onMsg(totalBill / 2 - yourBill)
        }
        else if (yourBill < frdBill) {
            props.onMsg(totalBill / 2 - frdBill)

        } else {
            props.onMsg(0)
        }

    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split bill with {props.selectedFrds.name}</h2>
            <label>Bill value</label>
            <input type="text" value={totalBill} onChange={(e) => setTotalBill(e.target.value)}></input>

            <label>Your expense</label>
            <input type="text" value={yourBill} onChange={(e) => setYourBill(e.target.value)}></input>

            <label>{props.selectedFrds.name}'s expense</label>
            <input type="text" value={frdBill} disabled></input>

            <label>Who paid the bill</label>
            <select>
                <option value='user'>You</option>
                <option value='friend'>{props.selectedFrds.name}</option>
            </select>
            <Button >Split Bill</Button>
        </form>
    )
}

export default SplitBill