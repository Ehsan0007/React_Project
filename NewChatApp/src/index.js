import React ,{Component} from 'react'
import reactDOM from 'react-dom'
import ChatRoom from './component/chatRomm'

class App extends Component{
  

    render(){
       
        return(
            <div>
               Hello Guys! this is our first program

               <ChatRoom />
            </div>
        )
    }
}
reactDOM.render(<App />,document.getElementById('root'))