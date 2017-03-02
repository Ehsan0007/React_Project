import React ,{Component} from 'react'

class ChatRoom extends Component{
      constructor(props,context){
        super(props,context)
        this.updateState = this.updateState.bind(this)
        this.submit = this.submit.bind(this)
        this.state = {
            messeges:[]
        }
    }
    componentDidMount(){
        console.log("componentDidMount")
        firebase.database().ref('messeges/').on('value',(snapshot)=>{
            const currentMessege = snapshot.val()
            if(currentMessege !=null){
                this.setState({
                    messeges : currentMessege
                })
            }
        })  
    }

updateState(event){
    console.log("Update State")
    this.setState({
        message : event.target.value
    })
}

submit(event){
    // alert("Submited value is " + this.state.message )
     console.log("Data Submit is " + this.state.message)
     const nextMessage = { 
         id:this.state.messeges.length,
         text: this.state.message
     }
     firebase.database().ref('messeges/'+nextMessage.id).set(nextMessage)
    //  var list = Object.assign([],this.state.messeges)
    //  list.push(nextMessage)
    //  this.setState({
    //      messeges:list
    //  })
}

    render(){
         const currentMessege = this.state.messeges.map((messeege,i)=>{
        return (
            <li key={messeege.id}>{messeege.text}</li>
        )
        })
        return (
            <div>
            <ol>
             {currentMessege}
            </ol>

            <input onChange={this.updateState} type="text" placeholder="Messege" />
            <br/>
            <button onClick={this.submit}>Submit Messege</button>
            </div>
        )
    }
}
export default ChatRoom