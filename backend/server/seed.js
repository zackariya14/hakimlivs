import express from 'express';

import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import Admin from '../models/user.model.js';
import bcrypt from 'bcrypt';
const uri = "mongodb+srv://OlleOllsson:test1234@hakimslivs4.zrzjb7b.mongodb.net/";
const dbName= 'test';


  async function addAdmin(adminData) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
  
      await client.connect();
  
    
      const db = client.db(dbName);
  
      // Check if the admin already exists
      const existingAdmin = await db.collection('admins').findOne({ username: adminData.username });
      if (existingAdmin) {
        console.log('Admin already exists');
        return -1; 
      }
  
      // Insert the new admin
      const result = await db.collection('admins').insertOne(adminData);
      console.log('Admin added successfully');
      return result.insertedId; 
    } catch (error) {
      console.error('Error :', error);
      return null; 
    } finally {
    
      await client.close();
    }
  }

  const adminData = {
    username: 'admin',
    password: 'adminpassword'
  };
  
  addAdmin(adminData)
    .then((result) => {
      console.log('Result:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


