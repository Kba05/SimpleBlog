import React from "react";
import Tic from "./Timer"

class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            tempText:"",
            // comments: []
        }
    }

    onChangeInput(e){
        this.setState({
            tempText:e.target.value
        })
    }

    onClickSendComment(){
        if(this.state.tempText.length === 0){
            return
        }
        const temObj={
            id: Math.floor(Math.random( ) * (100+1)),
            date: new Date().toUTCString(),
            text: this.state.tempText
        }
        this.props.onSendComment(temObj);
        this.setState({
            tempText:"",
            // comments: this.state.comments.concat(temObj)
        })
       
    }

    render(){
        const commetsList = this.props.comments.map(function(comment,index){
            return (
                <li key={comment.id}> 
                    <p className='text-secondary'>{comment.date}</p> 
                    <p>{comment.text}</p>     
                </li>
            )
        })
        return (
            <div className='card mt-1'>
                <div className="card-body">
                    <p>Вы тут: <Tic/></p> 
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={this.state.tempText} onChange={(e)=>this.onChangeInput(e)}/>
                        <button className="btn btn-outline-secondary bi bi-send" onClick={(e)=>this.onClickSendComment(e)}></button>
                    </div>
                    <ul >
                        {commetsList}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Comment;