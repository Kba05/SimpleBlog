import React from 'react';
import Tic from "./Timer"


class Article extends React.Component {
    constructor(props) {
      console.log("----------------------","constructor")
      super(props);
      this.state = {
        date: new Date().toDateString(),
        like: 0,
        isLiked: false,
        isOpenComment:false
      };
    }

    UNSAFE_componentWillMount(){
      console.log("----------------------","will mount")
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      console.log("----------------------","WillReceiveProps")
    }

    UNSAFE_componentWillUpdate(){
      console.log("----------------------","WillUpdate")
    }
    
    componentWillUnmount(){
      console.log("----------------------","will Unmount")
    }

    // shouldComponentUpdate(nextProps,nextState){
    //   console.log("----------------------","shouldComponentUpdate")
    //   // return this.props.isOpen !== nextProps.isOpen
    // }
    
    onLikePost(){
      if(this.state.isLiked !== true){
        this.setState({
          like: this.state.like + 1,
          isLiked: true
        })
      } else{
          this.setState({
            like: this.state.like - 1,
            isLiked: false

          })
      }

    }

    onOpenComment(){
      this.setState({
        isOpenComment:!this.state.isOpenComment
      })
    }

    render() { 
      console.log("----------------------","render")
      const { article,isOpen, onButtonClick } = this.props;
      console.log(isOpen)
      return (
        <div className="d-flex flex-column">
          
          <div className='card mb-3'>
            <h3 className='card-header'>
              {article.title}    
              <button className='btn btn-primary btn-sm float-end' onClick={onButtonClick}> {isOpen ? "Close": "Open"} </button>   
            </h3>

            <div className="card-body">
              <p className='card-subtitle text-muted mb-3'> 
                creation date: {this.state.date} 
              </p>
              {isOpen && <section className='card-text mb-3'>{article.text} <Tic/> </section>}
            </div>

            <div className="card-footer">
              <button 
                className={!this.state.isLiked?'btn bi bi-hand-thumbs-up':'btn bi bi-hand-thumbs-up-fill'} 
                onClick={()=>this.onLikePost()}>
                  {this.state.like}
              </button>
              <button 
                className='btn bi bi-chat-right'
                onClick={()=>this.onOpenComment()}>
              </button>
            </div>
          </div>

          {this.state.isOpenComment && <div className='card mb-3'>
              <div className="card-body">
                asdasd
              </div>
          </div>}
          
        </div>
      );
    }
  }
  export default Article;