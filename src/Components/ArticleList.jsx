import React from 'react';
import Article from "./Article";


function ArticleList() {
    const data = [
        { id:"12", title: "React", text: "i love react.js" },
        { id:"34", title: "Vue", text: "i love Vue.js" },
        { id:"56", title: "Svelte", text: "i love Svelte.js" }
    ];

    const articles = data.map(function(article){
        return <li key={article.id}><Article article={article}/></li>
    })

    return(
        <ul>
          {articles}
        </ul>
    )
}

export default ArticleList;