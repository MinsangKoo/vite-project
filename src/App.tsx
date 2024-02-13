import { Form, Match } from './components/Form';
import {MatchHistoryList} from './components/MatchHistoryList';
import { useState } from "react";
import { Header } from './components/Header';

function App() {

  const [results, setResults] = useState([])

  return (
    <div>
      <Header />
      <Form setResults={setResults} />
      <MatchHistoryList results={results}/>
    </div>
  );
}

export default App;