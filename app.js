$.ajax("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T")
.then((data)=>{
console.log(data)
console.log(data.results[1].book_author)
})