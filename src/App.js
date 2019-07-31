import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import TasksManager from './Pages/TasksManager'
import MyInfo from './Pages/MyInfo'
import './App.css'


class App extends React.Component {
 
  render () {

    return(
      <BrowserRouter>
      <div>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path="/mytasks" component={TasksManager} />
        <Route exact path="/mytasks/add" component={() => <h1>Add a task</h1>} />
        <Route exact path="/mytasks/view/:id" component={() => <h1>A View task page</h1>} />
      </Switch>
      <Route exact path="/my-info" component={MyInfo} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App
