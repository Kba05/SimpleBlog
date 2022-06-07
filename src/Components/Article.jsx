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
        <div>
          <h1>
            {article.title}       
          </h1>
          <button onClick={this.handleClick}> {this.state.isOpen ? "Close": "Open"} </button>
          {this.state.isOpen && <section>{article.text}</section>}
          <h2 id="dataText"> creation date: {this.state.date}</h2>
        </div>
      );
    }
  }
  export default Article;