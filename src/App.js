import React from 'react';
import Home from './components/Home'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        isLoggedIn: false,
        user: {}
      }
    }
  }
  
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
  
  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
  
    render(){
  
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/login' component={}/>
          <Route exact path='/signup' component={}/>
        </Switch>
      </Router>
    );
  }
  }
  
  export default App;