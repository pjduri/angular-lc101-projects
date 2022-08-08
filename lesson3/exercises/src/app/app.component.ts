import { Component } from '@angular/core'
import { Builder } from 'protractor'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Exercises: Angular Lesson 3'
  color: string = 'green'
  height: number = 0
  width: number = 0
  message: string = 'Space shuttle ready for takeoff!'
  takeOffEnabled: boolean = true
  disableLeftButton: boolean = false
  disableRightButton: boolean = false
  disableUpButton: boolean = false
  disableDownButton: boolean = false

  handleTakeOff(rocket: { style: { bottom: string; left: string } }) {
    
    if (this.message === 'Shuttle in flight.') {
      window.alert('Shuttle already in flight.')
      return
    }
    this.takeOffEnabled = false
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?')
    if (result && this.message !== 'Shuttle in flight.') {
      this.color = 'blue'
      this.height = 10000
      this.width = 0
      this.message = 'Shuttle in flight.'
      rocket.style.left = '240px'
      rocket.style.bottom = '10px'
      return
    }
  }
  
  handleLanding(rocket: { style: { bottom: string; left: string } }) {
    if (this.message !== 'Shuttle in flight.') {
      window.alert('Shuttle is already on ground.')
    } else {
      this.takeOffEnabled = true
      window.alert('The shuttle is landing. Landing gear engaged.')
      this.color = 'green'
      this.height = 0
      this.width = 0
      this.message = 'Shuttle has landed.'
      rocket.style.bottom = '0px'
      rocket.style.left = '0px'
    }
  }

  handleAbort(rocket: { style: { bottom: string; left: string } }) {
    if (this.message !== 'Shuttle in flight.') {
      window.alert('Shuttle is already on ground.')
    } else {
      this.takeOffEnabled = true
      let result = window.confirm('Are you sure you want to abort?')
      if (result) {
        this.color = 'red'
        this.height = 0
        this.width = 0
        this.message = 'Mission aborted.'
        rocket.style.bottom = '0px'
        rocket.style.left = '0px'
      }
    }
  }

  moveRocket(rocket: { style: { left: string; bottom: string } }, direction: string) {
    
    if (this.message !== 'Shuttle in flight.') {
      window.alert('Must take off first.')
    } 
    if (direction === 'right') {
      rocket.style.left = parseInt(rocket.style.left) + 10 + 'px'
    } 
    if (direction === 'left') {
      rocket.style.left = parseInt(rocket.style.left) - 10 + 'px'
    } 
    if (direction === 'up') {
      this.height += 10000
      rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
    } 
    if (direction === 'down') {
        this.height -= 10000
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px'
    }

    if (parseInt(rocket.style.left) < 0 && this.message === 'Shuttle in flight.') {
      this.color = 'orange'
      this.disableLeftButton = true
    } else {
      this.color = 'blue'
      this.disableLeftButton = false
    }
    if (parseInt(rocket.style.left) > 460 && this.message === 'Shuttle in flight.') {
      this.color = 'orange'
      this.disableRightButton = true
    } else {
      this.color = 'blue'
      this.disableRightButton = false
    }
    if (parseInt(rocket.style.bottom) > 300 && this.message === 'Shuttle in flight.') {
      this.color = 'orange'
      this.disableUpButton = true
    } else {
      this.color = 'blue'
      this.disableUpButton = false
    }
    if (parseInt(rocket.style.bottom) < 10 && this.message === 'Shuttle in flight.') {
      this.color = 'orange'
      this.disableDownButton = true
    } else {
      this.color = 'blue'
      this.disableDownButton = false
    }
    
  }

}
