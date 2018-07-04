import React from "react";
import Link from "gatsby-link";

import { withPrefix } from "gatsby-link";

const books = [
  {
    title: "Remote",
    subtitle: "",
    author: "Jason Fried and David Heinemeier Hansson",
    dateStart: "2018-05-29T10:00:00.000Z",
    dateFinish: null,
    publisher: "Crown Business",
    publisherUrl: "",
    stars: null,
    review: null,
    url:
      "https://www.amazon.com/gp/product/0804137501/ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=&linkId=8a406edc2fe9394925c4e61b826ebf96",
    image: "/static/books/Remote.jpg"
  },
  {
    title: "Conversational Design",
    subtitle: "",
    author: "Erika Hall",
    dateStart: null,
    dateFinish: "2018-05-29T10:00:00.000Z",
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 4,
    review: null,
    url: "https://abookapart.com/products/conversational-design",
    image: "/static/books/ConversationalDesign.png"
  },
  {
    title: "The New CSS Layout",
    subtitle: "",
    author: "Rachael Andrew",
    dateStart: null,
    dateFinish: null,
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: 4,
    review: null,
    url: "https://abookapart.com/products/the-new-css-layout",
    image: "/static/books/TheNewCSSLayout.png"
  },
  {
    title: "JavaScript: The Good Parts",
    subtitle: "",
    author: "Douglas Crockford",
    dateStart: null,
    dateFinish: null,
    publisher: "O'Reilly | Yahoo! Press",
    publisherUrl: "",
    stars: 5,
    review: null,
    url:
      "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=as_li_ss_tl?ie=UTF8&qid=1530649753&sr=8-1&keywords=javascript+the+good+parts&linkCode=ll1&tag=steveostudi0c-20&linkId=d126a9b8a6d772ee0c6532f35c44c388",
    image: "/static/books/JavaScriptTheGoodParts.jpg"
  },
  {
    title: "Rocket Surgery Made Easy",
    subtitle: "",
    author: "Steven Krugg",
    dateStart: null,
    dateFinish: null,
    publisher: "",
    publisherUrl: "",
    stars: 5,
    review: null,
    url:
      "https://www.amazon.com/Rocket-Surgery-Made-Easy-Yourself/dp/0321657292/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1530649852&sr=1-1&keywords=rocket+surgery+made+easy+steve+krug&linkCode=ll1&tag=steveostudi0c-20&linkId=031fcb032fd2ff1c178fd7ddb322a43c",
    image: "/static/books/RocketSurgeryMadeEasy.jpg"
  },
  {
    title: "Practical Design Discovery",
    subtitle: "",
    author: "Dan Brown",
    dateStart: null,
    dateFinish: null,
    publisher: "A Book Apart",
    publisherUrl: "",
    stars: null,
    review: null,
    url: "https://abookapart.com/products/practical-design-discovery",
    image: "/static/books/PracticalDesignDiscovery.png"
  },
  {
    title: "High Performance JavaScript",
    subtitle: "",
    author: "Nicholas C. Zakas",
    dateStart: null,
    dateFinish: null,
    publisher: "O'Reilly | Yahoo! Press",
    publisherUrl: "",
    stars: 3,
    review:
      "This isn't a knock on the book itself. Honestly, if I had read this when it first came out (2010) it would have been an easy 5! It's very practical, and super informative. However, many of the practices are outdated. For me, this book was more about fundamentals and a historical take on the Javascript performance.",
    url:
      "https://www.amazon.com/High-Performance-JavaScript-Application-Interfaces/dp/059680279X/ref=as_li_ss_tl?s=books&ie=UTF8&qid=1530649973&sr=1-3&keywords=high+performance+javascript&linkCode=ll1&tag=steveostudi0c-20&linkId=d770f21677181e67376ded3f912e5d36",
    image: "/static/books/HighPerformanceJavaScript.jpg"
  }
];

class BookshelfPage extends React.Component {
  renderBook(book) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 1rem 1rem 0",
          alignItems: "start",
          fontFamily: "sans-serif",
          fontWeight: "200",
          fontSize: "0.75rem"
        }}
      >
        <a style={{ marginBottom: "0.25rem" }} href={book.url}>
          <img
            style={{ maxWidth: "100%", height: "220px", objectFit: "contain" }}
            src={withPrefix(book.image)}
          />
        </a>
        <div style={{ marginBottom: "0.25rem" }}>
          <a
            href={book.url}
            style={{ textDecoration: "none", fontWeight: "400" }}
          >
            {book.title}
          </a>
        </div>
        <div style={{ marginBottom: "0.25rem" }}>{book.subtitle}</div>
        <div style={{ marginBottom: "0.25rem" }}>{book.author}</div>
        {this.renderStars(book.stars)}
      </div>
    );
  }

  renderStars(stars) {
    return null;
    // return stars !== null ? <div className="stars">{stars}</div> : null;
  }

  render() {
    return (
      <div>
        <h2>2018</h2>
        <div
          style={{
            display: "grid",
            gridGap: "calc(1em + 2vw)",
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "0.875em",
            marginBottom: "calc(1em + 2vw)",
            lineHeight: 1.2
          }}
        >
          {books.map(book => this.renderBook(book))}
        </div>
      </div>
    );
  }
}

export default BookshelfPage;
