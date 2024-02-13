import React from "react";
import "./MatchDisplay.css";

export function MatchDisplay(result: any, type: any, damage: any, match_id: any, puuid: any) {
    // const resultObject = JSON.parse(result)
    console.log(result)
    // return <div>{JSON.stringify(result.result)}</div>
    return (
        <div className="match-display-box">
            <p>{result.result + " - " + result.type}</p>
            <p>{"Damage Dealt: " + result.damage}</p>
        </div>

    )
}
