#Project
### By Haley Zitzmann

DEPLYOYED SITE: [Click Here](https://zitzmah.github.io/Project-1/)

## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a website that looks up New York Times book reviews

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

- `https://api.nytimes.com/svc/books/v3/reviews.json`: This returns a json array with all of the reviews

Sample Fetch/Ajax called:
```js
const url = "https://api.nytimes.com/svc/books/v3/reviews.json?title="
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
{
"status": "OK",
"copyright": "Copyright (c) 2023 The New York Times Company.  All Rights Reserved.",
"num_results": 1,
"results": [
{
"url": "https://www.nytimes.com/2018/12/06/books/review/michelle-obama-becoming-memoir.html",
"publication_dt": "2018-12-06",
"byline": "Isabel Wilkerson",
"book_title": "Becoming",
"book_author": "Michelle Obama",
"summary": "The former first lady’s long-awaited new memoir recounts with insight, candor and wit her family’s trajectory from the Jim Crow South to Chicago’s South Side and her own improbable journey from there to the White House.",
"uuid": "00000000-0000-0000-0000-000000000000",
"uri": "nyt://book/00000000-0000-0000-0000-000000000000",
"isbn13": [
"9781524763138"
]
}
]
}
```

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://imgur.com/a/clyqZhX)

#### Mobile View

![My Mobile View](https://imgur.com/a/fqZMGBI)

## Schedule of work

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||