import React from "react";
import ArticleList from "./ArticleList";
const data = [
  { id:"12", title: "React", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" },
  { id:"34", title: "Vue", text: "Ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" },
  { id:"56", title: "Svelte", text: "Dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" }
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reverted: false
    }
    
    this.articles = [...data];
    this.revert = this.revert.bind(this);
  }
  

  revert = () => {
    this.articles.reverse();
    this.setState({
      reverted: !this.state.reverted
    })
  }


  render(){
    return (
      <div className="container">
        <header className="row my-4 border-bottom">
          <h1 className="display-4">
            First React.js App
            <button className="btn btn-light btn-sm float-end" onClick={this.revert}>Revert</button>
          </h1>
        </header>
        <ArticleList articles={this.articles }/>
      </div>
    );
  }

}

export default App;
