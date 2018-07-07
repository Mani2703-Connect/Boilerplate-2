import React, { Fragment, Component } from "react";
import {Header, Footer,Button} from './components/layouts/index'
import Excercises from './components/excercises/index'
import {muscles, exercises} from '../src/store'
//import logo from './SoleFIT_logo.jpg'




export default class extends Component{
  

/*getExercisesByMuscles() {
  return Object.entries (this.state.exercises.reduce((exercises, exercise) => {
    const {muscles} = exercise

    exercises[muscles] = exercises[muscles]
    ? [exercises[muscles], exercise]
    : [exercise]

    return exercises
  },{})
)
}
*/
  render() {
    //console.log(this.getExercisesByMuscles())
    /*background={logo} >
      <img src={logo}  width="500" height="200" />*/
    

    return <Fragment>
    
      <Header />
      
      
      <Footer   />

      <Button />
      </Fragment>
  }
}