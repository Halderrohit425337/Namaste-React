// <div class="parent">
// <div class="child">
//     <h1>Im h1 tag</h1>
//     <h2>Im h2 tag</h2>
// </div>
// </div> 

const heading = React.createElement("div", {id:"parent"}, 
React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "Im h1 tag"),
React.createElement("h2", {}, "Im h2 tag")
]));

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);