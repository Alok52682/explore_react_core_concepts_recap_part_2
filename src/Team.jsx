/* eslint-disable no-empty-pattern */
import { useState } from "react"

/* eslint-disable no-unused-vars */
export default function Team() {

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }
    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const removePlayer = () => {
        setTeam(team - 1);
    }

    return (
        <>
            <div style={teamStyle}>
                <h4>Players: {team}</h4>
                <button onClick={addPlayer}>Add</button>
                <button onClick={removePlayer}>Remove</button>
            </div>
        </>
    )
}