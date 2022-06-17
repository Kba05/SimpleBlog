import React from 'react';
import Comment from './Comment';


class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date().toDateString(),
        like: 0,
        isLiked: false
      };
    }

    // shouldComponentUpdate(nextProps,nextState){
    //   console.log("----------------------","shouldComponentUpdate")
    //   // return this.props.isOpen !== nextProps.isOpen
    // }
    
    onLikePost(){
      if(this.state.isLiked){
        this.setState({
          like: this.state.like - 1,
          isLiked: false
        })
      } else{
        this.setState({
          like: this.state.like + 1,
          isLiked: true
        })
      }
    }

    render() { 
      const { article, onButtonClick, isOpenComment } = this.props;
      return (
        <div className="d-flex flex-column">
          
          <div className='card mt-4'>
            <h3 className='card-header'>
              {article.title}      
            </h3>

            <div className="card-body">
              <p className='card-subtitle text-muted mb-3'> 
                creation date: {this.state.date} 
              </p>
              <section className='card-text mb-3'>
                {article.text} 
              </section>
            </div>

            <div className="card-footer">
              <button 
                className={!this.state.isLiked?'btn bi bi-hand-thumbs-up':'btn bi bi-hand-thumbs-up-fill'} 
                onClick={()=>this.onLikePost()}>
                  {this.state.like}
              </button>
              <button 
                className='btn bi bi-chat-right'
                onClick={onButtonClick}>
              </button>
            </div>
          </div>

          {isOpenComment &&  <Comment/>}
        </div>
      );
    }
  }
  export default Article;