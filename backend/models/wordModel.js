const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
    id: Number,
    word: String,
    wordMeaning: String,
    noun:{
        nounSingular: String,
        nounPlural: String,
        nounExample: String,
    },
    proNoun:{
        proNounExample: String,
    },
    adjective:{
        adjectiveExample: String,
    },
    adverb:{
        adverbExample: String,
    },
    verb:{
        pastTense: String,
        pastParticiple: String,
        presentParticiple: String,
        futureTense: String,
        verbSingular: String,
        verbPlural: String,
        verbExample: String,
    },
    prePosition:{
        prePositionExample: String,
    },
    conjunction:{
        conjunctionExample: String,
    },
    interjection:{
        interjectionExample: String,
    },
    articles:{
        articleExample: String,
    },
})

module.exports =  mongoose.model('Words', wordSchema);