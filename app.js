$.ajax("https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T")
.then((data)=>{
console.log(data)
console.log(data.results[0].summary)
})

//******************************* */
//GLOBAL VARIABLES
//******************************* */
const apikey = "um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T"
const baseURL = "https://api.nytimes.com/svc/books/v3/reviews.json?title="

//*************************** */
//FUNCTIONS
//**************************** */
// function to fetch the data
function getReview(bookTitle) {

    // construct our url
    const url = `${baseURL}${bookTitle}&api-key=${apikey}`

    // fetch from the url
    fetch(url)
        .then((res) => { return res.json() })
        .then((data) => {
            renderReview(data)
        })

}

const url = "https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T"

fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))

//function that renders the movie to the dom
function renderReview(book) {
    //grab the div.movie
    const bookdiv = document.querySelector(".book")
    //alter the HTML inside the div
    bookdiv.innerHTML = `
    <h1>${book.results}</h1>
    <h2>${book.results}</h2>
    `
}

//function to handle the form submission
function handleSubmit(event) {
    //prevent the refreshing of the page from the form submission
    event.preventDefault()
    //grab the form from the event
    const form = event.target
    //create a formData object to access the form formData
    const formData = new FormData(form)
    //grab the movieTitle
    const movieTitle = formData.get("bookTitle")
    //fetch the specified
    getBook(bookTitle)
}