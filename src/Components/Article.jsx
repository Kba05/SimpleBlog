import React from 'react';

class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: true,
        date: new Date().toDateString()
      };
      
      // обязательно должны забиндить контекст иначе не получиться вызвать метод setState()
      this.handleClick = this.handleClick.bind(this); 
      
    }
  
    handleClick() {
      this.setState({ isOpen: !this.state.isOpen });  //переприсваем значения в состоянии
    }
  
    render() {
      const { article } = this.props;
      return (
        <div className='card mb-3'>
          <h3 className='card-header'>
            {article.title}    
            <button className='btn btn-primary btn-sm float-end' onClick={this.handleClick}> {this.state.isOpen ? "Close": "Open"} </button>   
          </h3>
          <div className="card-body">
            <p className='card-subtitle text-muted mb-3'> creation date: {this.state.date}</p>
            {this.state.isOpen && <section className='card-text mb-3'>{article.text}</section>}
          </div>
        </div>
      );
    }
  }
  export default Article;