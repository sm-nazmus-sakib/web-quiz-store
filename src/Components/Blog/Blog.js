import React from "react";

const Blog = () => {
  return <div className="md:px-4 px-2 md:mt-5 mt-5 bg-slate-400 rounded-lg px-4 py-4">
    <h1 className="text-2xl py-2">What does the purpose of react router?</h1>
    <p> React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native. 
    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
    </p>
    <h1 className="text-2xl py-2">How does context api work?</h1>
    <p> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
    </p>
    <h1 className="text-2xl py-2">What does work of useRef?</h1>
    <p> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
    </p>

    <footer className="text-center text-white font-bold pt-4 rounded">
        <p><small>Copyright © 2022 web quiz store.</small></p>
    </footer>

  </div>;



};

export default Blog;
