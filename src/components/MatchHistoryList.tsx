import React from "react";
import { Form, Match } from './Form';
import { MatchDisplay } from './MatchDisplay';

export function MatchHistoryList(results: any) {
    const MatchArray: any = Object.values(results)[0]
    // console.log(MatchArray)
    // for (var element of MatchArray) {
    //     console.log(element.result)
    // }
    return (
        <div className="match-history-list">
            {MatchArray.map((match, id) => {
                return <div key={id}><MatchDisplay result={match.result} type={match.type} damage={match.damage} /></div>
            })}
        </div>
    );
}

