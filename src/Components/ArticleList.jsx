import React from 'react';
import Article from "./Article";


function ArticleList(props) {

    const articles = props.articles.map(function(article,index){
        return (
            <li className='d-block' key={article.id}>
                <Article article={article} defaultOpen={ index === 0}/>
             </li>
        ) 
    });

    return(
        <ul>
          {articles}
        </ul>
    )
}

export default ArticleList;