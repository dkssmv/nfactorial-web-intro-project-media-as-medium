
const articleDIV = document.getElementById("articles");

let article =
`<div class="article_box" >
<div class="content">

<p id="author_name"></p>

 <div class="main_part">

    <p id="main_title"></p>
    <p id="main_body"></p>
    
</div>

<div class="content_footer">
<div class="footer_text">
<button class="button"></button>
<p class="readingTime"></p>
</div>

<div class="footer_img">
<img style="width: 16px; height: 18px;" />
<img style="width: 16px; height: 18px;"/>
<img style="width: 16px; height: 18px;"/>  
</div>
</div>
</div>
<img class="article_img" src=" "/>
</div>`


async function getArticles() {
    const responce = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=9UKddjHd7A6QFDl4znkHJU4yvnZNszGr');
    const respJSON = await responce.json();
    const articles = respJSON.results;

console.log(articles);
    articles.forEach(item => {
            let newArticle = article.replace('id="author_name">', `<id="author_name"> ${item.byline}`);
                newArticle = newArticle.replace('id="main_title">',`id="main_title">${item.title}`);
                newArticle = newArticle.replace(' id="main_body">',` id="main_body">${item.abstract}`);
                newArticle = newArticle.replace('<button class="button">', `<button class="button">${item.section}`);
                newArticle = newArticle.replace('src=" "', `src="${item.multimedia[0].url}"`);
                
                articleDIV.innerHTML += newArticle;
    });
};

getArticles();