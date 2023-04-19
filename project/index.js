const articles = [
    {
        title: "7 Practical CSS Tips",
        name: "Bob",
        topic: "Coding",
        date: "7 July",
        content: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.", 
        button: "JavaScript",
        readingTime: "12 min read",
        picture: "./assets/0.png",
    },

    {
        title: "7 Practical CSS Tips",
        name: "Julie",
        topic: "Coding",
        date: "8 July",
        content: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        button: "Java",
        readingTime: "14 min read",
        picture: "./assets/1.png",
    },
    
    {
        title: "7 Practical CSS Tips",
        name: "Chloe",
        topic: "Coding",
        date: "9 July",
        content: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        button: "HTML",
        readingTime: "16 min read",
        picture: "./assets/2.png",
    }
];


const articleDIV = document.getElementById("articles");

articles.map((item) => {
const html =
`<div class="article_box" >
    <div class="content">
    <div class="header">
        <img src="./assets/Img-4.png" class="profile_pic"/>
        <p>${item.name}<span> in</span> ${item.topic}<span class="date">  · ${item.date} </span></p>
    </div>
     <div class="main_part">
        <p class="main_title"><a href="./article.html" target="_blank">${item.title}</a></p>
        <p class="main_body">${item.content}</p>
    </div>

    <div class="content_footer">
    <div class="footer_text">
    <button class="button">${item.button}</button>
    <p class="readingTime">${item.readingTime}</p>
    <p class="readingTime"> · Selected for you</p>
    </div>

    <div class="footer_img">
    <img src="./assets/Icon.png" style="width: 16px; height: 18px;" />
    <img src="./assets/Icon.png" style="width: 16px; height: 18px;"/>
    <img src="./assets/Icon.png" style="width: 16px; height: 18px;"/>  
    </div>
</div>
</div>
<img class="article_img" src="${item.picture}"/>
</div>`;

articleDIV.innerHTML += html;
});
