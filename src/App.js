import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className='bg-warning p-5'>
        <MyJumbotron />
      </div>
      <AllTheBooks />
      <div>
        <MyFooter paraFooter="All rights reserved" mail="EpicBookstore@epicmail.com" />
      </div>
    </div>
  );
}

export default App;
