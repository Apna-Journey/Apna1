import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Book } from "./modals/Book.modal.js";

dotenv.config();
console.log("DBURI:", process.env.DBURI);

const data = [
  {
    title: 'To Kill a Mockingbird',
    descrip: "To Kill a Mockingbird is a classic novel by Harper Lee that addresses themes of racial injustice, moral growth, and empathy. Set in the Deep South during the 1930s, the story follows young Scout Finch and her brother Jem as they witness their father, lawyer Atticus Finch, defend a black man falsely accused of raping a white woman. Through Scout's innocent perspective, Lee masterfully captures the complexities of society and human nature.",
    price: '150.00',
    author: 'Harper Lee'
  },
  {
    title: '1984',
    descrip: "1984 is a dystopian novel by George Orwell that explores themes of totalitarianism, surveillance, and censorship. Set in a future society where individuality and independent thinking are suppressed, the story follows Winston Smith as he rebels against the oppressive regime of the Party. Orwell's portrayal of a bleak and oppressive world serves as a warning about the dangers of authoritarianism and the erosion of freedom.",
    price: '100.00',
    author: 'George Orwell'
  },
  {
    title: 'The Great Gatsby',
    descrip: "The Great Gatsby is a novel by F. Scott Fitzgerald set in the roaring 1920s. It follows the life of Jay Gatsby, a mysterious millionaire, and his obsession with the beautiful Daisy Buchanan. Through themes of love, wealth, and the American Dream, Fitzgerald explores the decadence and moral emptiness of the Jazz Age.",
    price: '130.00',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Pride and Prejudice',
    descrip: "Pride and Prejudice is a romantic novel by Jane Austen set in early 19th-century England. It follows the tumultuous relationship between the witty and independent Elizabeth Bennet and the proud Mr. Darcy. Austen's sharp social commentary and engaging characters have made this novel a beloved classic.",
    price: '110.00',
    author: 'Jane Austen'
  },
  {
    title: 'Wuthering Heights',
    descrip: "Wuthering Heights is a novel by Emily Bronte that explores the passionate and destructive love between Heathcliff and Catherine Earnshaw. Set against the wild and rugged landscape of the Yorkshire moors, the story unfolds through the eyes of the tenant, Mr. Lockwood, who becomes entangled in the dark secrets of the Earnshaw family. Bronte's haunting tale of love, revenge, and redemption continues to captivate readers around the world.",
    price: '135.00',
    author: 'Emily Bronte'
  },
  {
    title: 'The Catcher in the Rye',
    descrip: "The Catcher in the Rye is a novel by J.D. Salinger that follows the misadventures of Holden Caulfield, a disenchanted teenager who wanders through New York City after being expelled from prep school. Through Holden's cynical and introspective narration, Salinger explores themes of alienation, identity, and the search for authenticity.",
    price: '140.00',
    author: 'J.D. Salinger'
  },
  {
    title: 'Brave New World',
    descrip: "Brave New World is a dystopian novel by Aldous Huxley that envisions a future society where individuality is suppressed, and citizens are controlled through genetic engineering, psychological conditioning, and mind-altering drugs. Through the story of Bernard Marx and his journey of self-discovery, Huxley explores the consequences of technological progress and the loss of human values.",
    price: '125.00',
    author: 'Aldous Huxley'
  },
  {
    title: 'The Lord of the Rings',
    descrip: "The Lord of the Rings is a fantasy epic by J.R.R. Tolkien that follows the quest to destroy the One Ring and defeat the Dark Lord Sauron. Set in the fictional world of Middle-earth, the story follows hobbit Frodo Baggins and a fellowship of companions as they embark on a perilous journey to Mount Doom. Tolkien's masterful world-building and rich mythology have made The Lord of the Rings a beloved classic.",
    price: '180.00',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Moby-Dick',
    descrip: "Moby-Dick is a novel by Herman Melville that tells the story of Ishmael, a sailor who joins the whaling ship Pequod and its obsessed captain, Ahab, on a quest to hunt the elusive white whale, Moby Dick. Through Ishmael's narration and Ahab's relentless pursuit, Melville explores themes of obsession, fate, and the human condition.",
    price: '170.00',
    author: 'Herman Melville'
  },
  {
    title: 'The Hobbit',
    descrip: "The Hobbit is a fantasy novel by J.R.R. Tolkien that follows the adventure of hobbit Bilbo Baggins as he sets out on a journey to reclaim the Lonely Mountain and its treasure from the dragon Smaug. Along the way, Bilbo encounters trolls, elves, goblins, and a mysterious creature named Gollum. Tolkien's charming tale of heroism and friendship has captivated readers of all ages.",
    price: '160.00',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Frankenstein',
    descrip: "Frankenstein; or, The Modern Prometheus is a novel by Mary Shelley that tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment. As the creature seeks acceptance and understanding from society, Victor grapples with the moral implications of his creation. Shelley's groundbreaking work explores themes of ambition, responsibility, and the consequences of scientific discovery.",
    price: '115.00',
    author: 'Mary Shelley'
  },
  {
    title: 'The Picture of Dorian Gray',
    descrip: "The Picture of Dorian Gray is a novel by Oscar Wilde that follows the handsome and wealthy Dorian Gray as he makes a Faustian bargain to retain his youthful appearance while his portrait ages in his place. As Dorian descends into a life of debauchery and moral corruption, his portrait reflects the true extent of his sins. Wilde's novel is a provocative exploration of vanity, beauty, and the nature of evil.",
    price: '145.00',
    author: 'Oscar Wilde'
  }
];

async function insertData() {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Database Connected!");

    await Book.insertMany(data);
    console.log("Data inserted successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting data: ", err);
  }
}

insertData();
