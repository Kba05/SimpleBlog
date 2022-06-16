import React from 'react';
import Article from "./Article";


 class ArticleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          openArticleId:null
        };
    }

    handleClick(openArticleId){
        this.setState({
             openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
        }) 
    }

    render(){
        const self = this;
        const articles = this.props.articles.map(function(article,index){
            return (
                <li  key={article.id} className='d-block'>
                    <Article article={article} 
                             isOpen={self.state.openArticleId === article.id}
                             onButtonClick={ ()=>self.handleClick(article.id)} /> 
                 </li>
            ) 
        });
        return(
            <ul>
              {articles}
            </ul>
        )
    }
}

export default ArticleList;