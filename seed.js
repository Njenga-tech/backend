const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Book = require("./models/Book"); // Adjust the path if your model is elsewhere

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected...");
    return seedBooks();
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

async function seedBooks() {
  try {
    await Book.deleteMany();

    const sampleBooks = [
      // Academic
      {
        title: "Intro to CS",
        author: "John Smith",
        category: "Academic Library",
        genre: "Computer Science",
        cover: "https://covers.openlibrary.org/b/id/56486-M.jpg",
        readLink: "https://learn.saylor.org/index.php?",
      },
      {
        title: "Physics Basics",
        author: "Isaac Newton",
        category: "Academic Library",
        genre: "Physics",
        cover: "https://covers.openlibrary.org/b/id/301031-M.jpg",
        readLink:
          "https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundless)/1%3A_The_Basics_of_Physics/1.1%3A_The_Basics_of_Physics",
      },
      {
        title: "Biology Intro",
        author: "Charles Darwin",
        category: "Academic Library",
        genre: "Biology",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q5fZK_w9BywaWgo-gUt-4bU-FZvW30YUEQ&s",
        readLink:
          "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/01%3A_The_Study_of_Life/1.01%3A_The_Science_of_Biology_-__Introduction_to_the_Study_of_Biology",
      },
      {
        title: "Chemistry 101",
        author: "Marie Curie",
        category: "Academic Library",
        genre: "Chemistry",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxbPSCc8tflGk9taEOUnHG-HgBcq-tafTTg&s",
        readLink:
          "https://chem.libretexts.org/Courses/Palomar_College/PC%3A_CHEM100_-_Fundamentals_of_Chemistry/01%3A_The_Chemical_World",
      },

      // General
      {
        title: "Atomic Habits",
        author: "James Clear",
        category: "General Library",
        genre: "Self-Help",
        cover: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
        readLink:
          "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf",
      },
      {
        title: "Deep Work",
        author: "Cal Newport",
        category: "General Library",
        genre: "Focus",
        cover: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
        readLink: "https://example.com/books/deep-work.pdf",
      },
      {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "General Library",
        genre: "Success",
        cover:
          "https://d2j6dbq0eux0bg.cloudfront.net/images/40569255/4724582899.webp",
        readLink:
          "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf",
      },
      {
        title: "Make Your Bed",
        author: "William H. McRaven",
        category: "General Library",
        genre: "Leadership",
        cover: "https://m.media-amazon.com/images/I/81GqtNbs+PL.jpg",
        readLink: "https://online.fliphtml5.com/kfzmx/irup/#p=1",
      },
      {
        title: "Power of Habit",
        author: "Charles Duhigg",
        category: "General Library",
        genre: "Psychology",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaTZT7KeSlBPyMQIncPC3CBDhN04yedw95Q&s",
        readLink:
          "https://www.slideserve.com/haile/the-power-of-habit#google_vignette",
      },

      // Novels
      {
        title: "Pride & Prejudice",
        author: "Jane Austen",
        category: "Novels",
        genre: "Romance",
        cover:
          "https://www.loyalbooks.com/image/detail/Pride-and-Prejudice-Jane-Austen.jpg",
        readLink: "https://example.com/books/pride-and-prejudice.pdf",
      },
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        category: "Novels",
        genre: "Fantasy",
        cover: "",
        readLink: "https://example.com/books/harry-potter.pdf",
      },
      {
        title: "1984",
        author: "George Orwell",
        category: "Novels",
        genre: "Dystopian",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhi4WJbRcUel2BjP2lQKkYECVQzV3uBa_kQ&s",
        readLink: "https://example.com/books/1984.pdf",
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        category: "Novels",
        genre: "Fantasy",
        cover: "https://www.pinterest.com/pin/68891069299363993/",
        readLink: "https://anyflip.com/jdktq/yqqm/basic/301-350",
      },
      {
        title: "Alchemist",
        author: "Paulo Coelho",
        category: "Novels",
        genre: "Adventure",
        cover: "",
        readLink: "https://example.com/books/the-alchemist.pdf",
      },
    ];

    await Book.insertMany(sampleBooks);
    console.log("✅ Successfully inserted 14 books!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding books:", err);
    process.exit(1);
  }
}
