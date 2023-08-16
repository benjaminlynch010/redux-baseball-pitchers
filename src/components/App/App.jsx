import {useState} from 'react';

function App() {
  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
  const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);
  const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');

  const handlePitcherNameChange = event => {
    setNewPitcher(event.target.value);
  };

  // add new pitcher to the array. this will move to the pitcher reducer!
  const handlePitcherSubmit = event => {
    event.preventDefault();
    // spread: give me everything in pitcherList, then add this new thing
    setPitcherList([...pitcherList, newPitcher]);
    setNewPitcher('');
  };

  const handleCatcherNameChange = event => {
    setNewCatcher(event.target.value);
  };

  // add new catcher to array. this will move to the catcher reducer!
  const handleCatcherSubmit = event => {
    event.preventDefault();
    // spread: give me everything in catcherList, then add this new thing
    setCatcherList([...catcherList, newCatcher]);
    setNewCatcher('');
  };

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <div>Total Pitchers: {pitcherList.length}</div>
      <div>Total Catchers: {catcherList.length}</div>
      <h3>All Pitchers</h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <ul>
        {pitcherList.map(pitcher => (
          <li
            onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={handleCatcherNameChange}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <ul>
        {catcherList.map(catcher => (
          <li
            onClick={() => setCurrentCatcher(catcher)}
          >
            {catcher}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
