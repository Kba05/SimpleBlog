import React from 'react';
import Tic from "./Timer"


class Article extends React.Component {
    constructor(props) {
      console.log("----------------------","constructor")
      super(props);
      this.state = {
        date: new Date().toDateString()
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

    shouldComponentUpdate(nextProps,nextState){
      console.log("----------------------","shouldComponentUpdate")
      return this.props.isOpen !== nextProps.isOpen
    }
  
    render() { 
      console.log("----------------------","render")
      const { article,isOpen, onButtonClick } = this.props;
      console.log(isOpen)
      return (
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
        </div>
      );
    }
  }
  export default Article;