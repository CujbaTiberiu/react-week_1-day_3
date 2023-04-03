import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import BookList from './components/BookList';
//import fantasy from './data/fantasy.json'
import scifi from './data/scifi.json'
//import history from './data/history.json'
console.log(scifi)

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className='bg-warning p-5'>
        <MyJumbotron />
      </div>
      <BookList books={scifi} />
      <div className='div__footer'>
        <MyFooter paraFooter="All rights reserved" mail="EpicBookstore@epicmail.com" />
      </div>
    </div>
  );
}

export default App;
