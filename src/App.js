
import './App.css';
import Search from './components/search/Search';
function App() {
  const handleOnSearchChange=(searchData)=>
  {
console.log('')
  }
  return (
    <div className="App">
     <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
