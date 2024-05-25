const express = require('express');
//const bodyParser = require('body-parser');
//const { connectToDatabase, insertDocument, findDocuments, deleteDocument } = require('./db');
import bodyParser from "body-parser";
import {connectToDatabase, insertDocument, findDocuments, deleteDocument} from './db'
const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.post('/api/documents', async (req, res) => {
    try {
        const { collectionName, document } = req.body;
        await insertDocument(collectionName, document);
        res.status(201).json({ message: 'Документ создан успешно' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при создании документа' });
    }
});

app.get('/api/documents/:collectionName', async (req, res) => {
    try {
        const { collectionName } = req.params;
        const query = req.query;
        const documents = await findDocuments(collectionName, query);
        res.json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при поиске документов' });
    }
});

app.delete('/api/documents/:collectionName', async (req, res) => {
    try {
        const { collectionName } = req.params;
        const query = req.query;
        await deleteDocument(collectionName, query);
        res.json({ message: 'Документ удален успешно' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при удалении документа' });
    }
});

// Старт сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
//const mongoose = require('mongoose')