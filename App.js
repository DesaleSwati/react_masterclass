// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React!");

// console.log(heading); //react element is an object

const parent = React.createElement(
    "div", {id:"parent"}, 
    [   
        React.createElement("div", {id:"child"}, [
            React.createElement("h1", {},"This is a h1 tag"), 
            React.createElement("h2", {},"This is a h2 tag")
        ]),
        React.createElement("div", {id:"child2"}, [
            React.createElement("h1", {},"This is a h1 tag"), 
            React.createElement("h2", {},"This is a h2 tag")
        ])
    ]
);

console.log(parent);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);