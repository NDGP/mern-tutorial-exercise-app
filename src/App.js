import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/" component={CreateExercise} />
      <Route path="/" component={CreateUser} />
    </Router>
  );
}

export default App;
