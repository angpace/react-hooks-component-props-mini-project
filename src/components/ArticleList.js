import Article from "./Article"

function ArticleList({posts}) {

    const articles = posts.map((post) => {
        return (
            <Article title={post.title} date={post.date} preview={post.preview} key={post.id}/>
        )});

        return (
            <main>
                {articles}
            </main>
        )
    }

export default ArticleList;

// //id: 1,
//       title: "Components 101",
//       date: "December 15, 2020",
//       preview: "Setting up the building blocks of your site",
//       minutes: 5,