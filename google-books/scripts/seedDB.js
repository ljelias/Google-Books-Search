const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Little House on the Prairie",
    author: "Laura Ingalls Wilder",
    imageUrl: "http://books.google.com/books/content?id=A2rzN-_jOnkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    summary: "When Laura Ingalls and her family set out for Kansas, they travel for many days in their covered wagon until they find the perfect place to call home. Pioneer life is sometimes hard, but Laura and her family are busy and happy building their new little house. To celebrate the 75th anniversary of Laura Ingalls Wilder's timeless classic, this gorgeous new hardcover edition features Garth Williams's charming illustrations in vibrant full color. For anyone who has ever read and loved Little House on the Prairie, and for those who have yet to discover Laura's world, this is a volume to cherish.",
    link: "http://books.google.com/books?id=A2rzN-_jOnkC&printsec=frontcover&dq=Little+House+on+the+Prairie&hl=&cd=3&source=gbs_api"
  },
  {
    title: "Little House is the Big Woods",
    author: "Laura Ingalls Wilder",
    imageUrl: "http://books.google.com/books/content?id=VE-dCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    summary: "The first book in Laura Ingalls Wilder’s treasured Little House series—now available as an ebook! This digital version features Garth Williams’s classic illustrations, which appear in vibrant full color on a full-color device and in rich black-and-white on all other devices. This beloved story of a pioneer girl and her family begins in 1871 in a log cabin on the edge of the Big Woods of Wisconsin. Four-year-old Laura lives in the little house with her Pa, her Ma, her sisters Mary and Carrie, and their dog, Jack. Pioneer life is sometimes hard for the family, but it is also exciting as they celebrate Christmas with homemade toys and treats, do the spring planting, bring in the harvest, and make their first trip into town. And every night Laura and her family are safe and warm in their little house, with the happy sound of Pa’s fiddle to send them off to sleep. The nine Little House books are inspired by Laura’s own childhood and have been cherished by generations of readers as both a unique glimpse into America’s frontier history and as heartwarming, unforgettable stories. Correlates to the Common Core State Standards in English Language Arts",
    link: "http://books.google.com/books?id=VE-dCwAAQBAJ&printsec=frontcover&dq=Little+House+on+the+Prairie&hl=&cd=2&source=gbs_api"
  },
  {
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    imageUrl: "http://books.google.com/books/content?id=8uUgn2U1AoMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    summary: "Meg Murry and her friends become involved with unearthly strangers and a search for Meg's father, who has disappeared while engaged in secret work for the government, in a re-release of the classic story. A Newbery Medal Book. Simultaneous.",
    link: "http://books.google.com/books?id=8uUgn2U1AoMC&printsec=frontcover&dq=A+Wrinkle+in+Time&hl=&cd=2&source=gbs_api"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
