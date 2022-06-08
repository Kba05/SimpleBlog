import React from 'react';
import Article from "./Article";


function ArticleList() {
    const data = [
        { id:"12", title: "React", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" },
        { id:"34", title: "Vue", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" },
        { id:"56", title: "Svelte", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit deleniti neque quam ab eius magnam molestiae expedita porro dicta odit soluta debitis a praesentium voluptas officiis, magni accusantium corrupti sunt sint ut? Consequuntur possimus reprehenderit corrupti deleniti officia fuga?" }
    ];
    const articles = data.map(function(article){
        return <li className='d-block' key={article.id}><Article article={article}/></li>
    })

    return(
        <ul>
          {articles}
        </ul>
    )
}

export default ArticleList;