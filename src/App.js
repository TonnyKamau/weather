import './App.css';
import Search from './components/search/Search';
import Currentweather from './components/currentweather/Currentweather'

function App() {
  const handleOnSearchChange=(searchData)=>
  {
console.log('')
  }
  return (
    <div className="App">
     <Search onSearchChange={handleOnSearchChange}/>
     <Currentweather />
    </div>
  );
}

export default App;
