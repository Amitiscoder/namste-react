//   <div class="parent">
//  <div class="child">
//  <div class="sibling">
//      <h1 class="heading">
//          Hello world!
//      </h1>
//      <h2>Hello Javascript!</h2>
//      <h3>Hii Amit. keep practice daily</h3>
//  </div>
// </div>
//<div class="child">
//  <div class="sibling">
//      <h1 class="heading">
//          Hello world!
//      </h1>
//      <h2>Hello Javascript!</h2>
//      <h3>Hii Amit. keep practice daily</h3>
//  </div>
// </div>
// </div> 

const parent=React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child"}, 
React.createElement("div", {id:"sibling"},
[React.createElement("h1", {class:"heading"}, "Hello world!")],
[React.createElement("h2", {class:"heading"}, "Hello javascript!")],
[React.createElement("h1", {class:"heading"}, "Hii Amit, keppt practice daily!")]
))],
[React.createElement("div", {id:"child"}, 
React.createElement("div", {id:"sibling"},
[React.createElement("h1", {class:"heading"}, "Hello world!")],
[React.createElement("h2", {class:"heading"}, "Hello javascript!")],
[React.createElement("h1", {class:"heading"}, "Hii Amit, keppt practice daily!")]
))],
[React.createElement("div", {id:"child"}, 
React.createElement("div", {id:"sibling"},
[React.createElement("h1", {class:"heading"}, "Hello world!")],
[React.createElement("h2", {class:"heading"}, "Hello javascript!")],
[React.createElement("h1", {class:"heading"}, "Hii Amit, keppt practice daily!")]
))],
[React.createElement("div", {id:"child"}, 
React.createElement("div", {id:"sibling"},
[React.createElement("h1", {class:"heading"}, "Hello world!")],
[React.createElement("h2", {class:"heading"}, "Hello javascript!")],
[React.createElement("h1", {class:"heading"}, "Hii Amit, keppt practice daily!")]
))]);


console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);