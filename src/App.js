import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body  from './components/Body';
import React  from 'react';


class App extends React.Component{

  // refreshClicked (e) {
  //   e.preventDefault();
  //   alert("refresh clicked!");
  //   console.log('value: ',e.target.value);
  // }


  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

}



export default App;
