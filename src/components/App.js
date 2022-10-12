import React from "react";
import blogData from "../data/blog";
import Header from "/Users/ap/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/Header.js"
import About from "/Users/ap/Development/code/phase-2/react-hooks-component-props-mini-project/src/components/About.js"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name={blogData.name} />
    <About image={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts}/>
     
    </div>
  );
}

export default App;
