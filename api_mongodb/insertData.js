import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Company } from "./modals/Company.modal.js";

dotenv.config();
console.log("DBURI:", process.env.DBURI);

const data = [
  {
    title: 'Company1',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company2',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company3',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company4',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company5',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company6',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company7',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company8',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company9',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company10',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company11',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
  {
    title: 'Company12',
    descrip: "Anything",
    date: 'Any Date',
    link: 'Any Link'
  },
];

async function insertData() {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("Database Connected!");

    await Company.insertMany(data);
    console.log("Data inserted successfully!");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting data: ", err);
  }
}

insertData();
