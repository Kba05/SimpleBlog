import React from 'react';
import Tic from "./Timer"


class Article extends React.Component {
    constructor(props) {
      console.log("----------------------","constructor")
      super(props);
      this.state = {
        isOpen: props.defaultOpen,
        date: new Date().toDateString()
      };
      // обязательно должны забиндить контекст иначе не получиться вызвать метод setState()
      this.handleClick = this.handleClick.bind(this); 
    }

    UNSAFE_componentWillMount(){
      console.log("----------------------","will mount")
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      console.log("----------------------","WillReceiveProps")
      if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
        isOpen : nextProps.defaultOpen
      })
    }

    UNSAFE_componentWillUpdate(){
      console.log("----------------------","WillUpdate")
    }
    
    componentWillUnmount(){
      console.log("----------------------","will Unmount")
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log("----------------------","shouldComponentUpdate")
      return this.state.isOpen !== nextState.isOpen
    }

    handleClick() {
      this.setState({ isOpen: !this.state.isOpen });  //переприсваем значения в состоянии
    }
  
    render() { 
      console.log("----------------------","render")
      const { article } = this.props;
      return (
        <div className='card mb-3'>
          <h3 className='card-header'>
            {article.title}    
            <button className='btn btn-primary btn-sm float-end' onClick={this.handleClick}> {this.state.isOpen ? "Close": "Open"} </button>   
          </h3>
          <div className="card-body">
            <p className='card-subtitle text-muted mb-3'> 
              creation date: {this.state.date} 
            </p>
            {this.state.isOpen && <section className='card-text mb-3'>{article.text} <Tic/> </section>}
          </div>
        </div>
      );
    }
  }
  export default Article;