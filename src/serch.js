const posts = [
  { id: 1, title: "Learn React", body: "React is a JavaScript library" },
  { id: 2, title: "Cooking Tips", body: "Best recipes for beginners" },
  { id: 3, title: "JavaScript Basics", body: "Variables, loops, and functions" }
];

const search = "react";  // user types this in search box

const filteredResults = posts.filter((post) =>
  post.body.toLowerCase().includes(search.toLowerCase()) ||
  post.title.toLowerCase().includes(search.toLowerCase())
);

console.log(filteredResults);
