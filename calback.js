const posts = [
  {
    title: "Post One",
    body: "This is the content for post one",
  },
  {
    title: "Post Two",
    body: "This is the content for post two",
  }
];

const getPosts = () =>{
    setTimeout(() =>{
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`            
        });
        document.body.innerHTML = output;
    }, 1000)
} 

getPosts();