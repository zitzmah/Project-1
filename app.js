$.ajax("https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T")
    .then((data) => {
        console.log(data)
        console.log(data.results[0].summary)
    })

$.ajax("https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T")
    .then((data) => {
        console.log(data)
        console.log(data.results[0].summary)
    })

//******************************************* */
//JQUERY
//******************************************* */
$(document).ready(function () {
    let quote = '<div class="KVquote">\"As for literary criticism in general: I have long felt that any reviewer who expresses rage and loathing for a novel or a play or a poem is preposterous. He or she is like a person who has put on full armor and attacked a hot fudge sundae or a banana split.\"― Kurt Vonnegut</div>';
    $('header').append(quote)
});
//******************************* */
//GLOBAL VARIABLES
//******************************* */
const apikey = "um9z5rw7W0ubMoP5dQFcqTz9L6RZuJ6T"
const baseURL = "https://api.nytimes.com/svc/books/v3/reviews.json?title="

const authorBaseURL = "https://api.nytimes.com/svc/books/v3/reviews.json?author="

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
        .catch((error) => {
            document.querySelector(".book").innerText = error.message
        })
}

//function that renders the book to the dom
function renderReview(book) {
    //grab the div.movie
    const bookdiv = document.querySelector(".book")
    //alter the HTML inside the div
    bookdiv.innerHTML = `
     <h1>${book.results[0].book_title}</h1>
     <h2>${book.results[0].book_author}</h2>
     <h3>${book.results[0].summary}</h3>
     <a title="url" href="${book.results[0].url}"')>Link to the New York Times review of ${book.results[0].book_title}<a>
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
    //grab the bookTitle
    const bookTitle = formData.get("bookTitle")
    //fetch the specified
    getReview(bookTitle)
}

//*************************** */
//MAIN CODE
//*************************** */
//add the function to the form submission
document.querySelector("form").addEventListener("submit", handleSubmit)
//getReview("Becoming")