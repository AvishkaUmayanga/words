const express = require('express');
const wordModel = require('../models/wordModel');
const router = express.Router();

router.post('/add_word', async (req, res) => {
  try {
    const addWord = req.body;

    const existingWord = await wordModel.findOne({ word: addWord.word });
    if (existingWord) {
      return res.status(400).json({ error: 'word already exists' });
    }

    const modifiedData = {
      id: addWord.id,
      word: addWord.word,
      wordMeaning: addWord.wordMeaning,
      noun: {
        nounSingular: addWord.nounSingular,
        nounPlural: addWord.nounPlural,
        nounExample: addWord.nounExample,
      },
      proNoun: {
        proNounExample: addWord.proNounExample,
      },
      adjective: {
        adjectiveExample: addWord.adjectiveExample,
      },
      adverb: {
        adverbExample: addWord.adverbExample,
      },
      verb: {
        pastTense: addWord.pastTense,
        pastParticiple: addWord.pastParticiple,
        presentParticiple: addWord.presentParticiple,
        futureTense: addWord.futureTense,
        verbSingular: addWord.verbSingular,
        verbPlural: addWord.verbPlural,
        verbExample: addWord.verbExample,
      },
      prePosition: {
        prePositionExample: addWord.prePositionExample,
      },
      conjunction: {
        conjunctionExample: addWord.conjunctionExample,
      },
      interjection: {
        interjectionExample: addWord.interjectionExample,
      },
      articles: {
        articleExample: addWord.articleExample,
      },
    };
   
    const insertData = await wordModel.create(modifiedData);
    res.status(201).json({ message: 'data added successfully', data: insertData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'internal server error', error });
  }
});

module.exports = router;
