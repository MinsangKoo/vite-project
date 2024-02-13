import { MouseEvent } from "react";
import axios from "axios"
import { useState } from "react";


export interface Match {
    result: string
    type: string
    damage: number
    match_id: string
    puuid: string
}

export function Form({setResults}) {
    const [summonerInput, setSummonerInput] = useState('')

    function request() {
        const url = "http://localhost:8000/matches/" + summonerInput
        console.log(url)
        axios.get<Match[]>(url)
        .then((response) => setResults(response.data))
    }

    return (
        <div className="input-group mb-3 w-25 mx-auto mt-5">
            <input type="summonerName" onChange={(e) => setSummonerInput(e.target.value)} className="form-control" id="SummonerNameInput" placeholder="Summoner Name"></input>
            <div className="input-group-append">
                <button type="button" className="btn btn-primary" onClick={request}>Search</button>
            </div>
        </div>
    );
}

function formatMatch(match: any): Match {
    return { result: match.result, type: match.type, damage: match.damage, match_id: match.match_id, puuid: match.puuid }
}





