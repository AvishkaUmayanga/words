import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InputFields from '../components/InputFields';
import WordDetailsField from '../components/WordDetailsField';

export default function UpdateWord() {
  
  const [word,setWord] = useState(null);
  const [wordMeaning,setWordMeaning] = useState(null);
  const [nounSingular,setNsingular] = useState(null);
  const [nounPlural,setNplural] = useState(null);
  const [nounExample,setNounExample] = useState(null);
  const [proNounExample,setproNounExample] = useState(null);
  const [adjectiveExample,setadjectiveExample] = useState(null);
  const [adverbExample,setadverbExample] = useState(null);
  const [verbSingular,setverbSingular] = useState(null);
  const [verbPlural,setverbPlural] = useState(null);
  const [pastParticiple,setpastParticiple] = useState(null);
  const [pastTense,setpastTense] = useState(null);
  const [presentParticiple,setpresentParticiple] = useState(null);
  const [futureTense,setfutureTense] = useState(null);
  const [verbExample,setverbExample] = useState(null);
  const [prePositionExample,setprePositionExample] = useState(null); 
  const [conjunctionExample,setConjunctionExample] = useState(null);
  const [interjectionExample,setInterjectionExample] = useState(null);
  const [articleExample,setArticleExample] = useState(null);

  const {id} = useParams();

  useEffect(()=>{
    const fetchWordDetails = async() =>{
      const response = await axios.get(`http://localhost:4000/get_word/${id}`,{})
      // const response = await axios.get(`https://word-learning-app.onrender.com/get_word/${id}`,{})
      console.log(response.data)
    }
    fetchWordDetails()
  },[id])

  const handleUpdate = async(e) =>{
    e.preventDefault()
    try{
      // const response = await axios.put(`https://word-learning-app.onrender.com/update_word/${id}`,
      const response = await axios.put(`http://localhost:4000/update_word/${id}`,
      {word, 
      wordMeaning, 
      nounSingular, 
      nounPlural, 
      nounExample,
      proNounExample,
      adjectiveExample,
      adverbExample,
      verbSingular,
      verbPlural,
      pastParticiple,
      pastTense,
      presentParticiple,
      futureTense,
      verbExample,
      prePositionExample,
      conjunctionExample,
      interjectionExample,
      articleExample
      })
      
      if(response.data==='word not found'){
        alert('not found')
      }
      else if(response.data==='update succesfull'){
        alert('update succesfull')
      }
      else{
        console.log(response.data)
      }
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <div className='flex justify-center mt-10'>
            <div className='flex flex-col  p-[10px] rounded-xl  bg-white shadow-xl  gap-5 w-[320px] xs:w-[380px] items-center'>
              <h1 className='self-center mb-5 text-2xl font-bold text-bluecolor'>Update Word</h1>  
              <form onSubmit={handleUpdate}>
                <InputFields label="Word"  name="word" onChange={(e) => setWord(e.target.value)}  required/>
                <InputFields label="Meaning"  name="wordMeaning"  onChange={(e) => setWordMeaning(e.target.value)}  />
                {/* {Noun section} */}
                <WordDetailsField wordType="Noun"
                  inputField={[{label:"Singular",  name:"Nsingular", onChange: (e) => setNsingular(e.target.value)},
                  {label:"Plural", name:"Nplural", onChange: (e) => setNplural(e.target.value)},
                  {label:"Noun Example", name:"nounExample", onChange: (e) => setNounExample(e.target.value)}
                ]}/>
                {/* {Pronoun section} */}
                <WordDetailsField wordType="Pronoun" 
                inputField={[{label:"Pronoun Example", name:"proNounExample", onChange: (e) => setproNounExample(e.target.value)}]}/>
                {/* {Adjective section} */}  
                <WordDetailsField wordType="Adjective"
                  inputField={[{label:"Adjective Example", name:"adjectiveExample", onChange:(e)=> setadjectiveExample(e.target.value)}]}/>
                {/* {Adverb section} */}
                <WordDetailsField wordType="Adverb"
                  inputField={[{label:"Adverb Example", name:"adverbExample", onChange: (e)=> setadverbExample(e.target.value)}]}/>
                {/* {Adverb section} */}
                <WordDetailsField wordType="Verb"
                  inputField={[{label:"Verb Singular", name:"verbSingular", onChange:(e)=> setverbSingular(e.target.value)},
                  {label:"Verb Plural", name:"verbPlural", onChange:(e) => setverbPlural(e.target.value)},
                  {label:"Past Tense", name:"pastTense", onChange:(e)=> setpastTense(e.target.value)},
                  {label:"Past Participle", name:"pastParticiple", onChange:(e)=> setpastParticiple(e.target.value)},
                  {label:"Present Participle", name:"presentParticiple", onChange:(e) => setpresentParticiple(e.target.value)},
                  {label:"FutureTense", name:"futureTense", onChange:(e)=> setfutureTense(e.target.value)},
                  {label:"Verb Example", name:"verbExample", onChange:(e)=> setverbExample(e.target.value)}
                  ]}/>
                {/* {Preposition section} */}
                <WordDetailsField wordType="Preposition"
                  inputField={[{label:"Preposition Example", name:"prePositionExample", onChange:(e) =>setprePositionExample(e.target.value)}
                  ]}/>
                {/* {Conjunction section} */}
                <WordDetailsField wordType="Conjunction"
                  inputField={[{label:"Conjunction Example", name:"conjunctionExample", onChange: (e)=> setConjunctionExample(e.target.value)}
                  ]}/>
                {/* {Interjection section} */}
                <WordDetailsField wordType="Interjection"
                  inputField={[{label:"Interjection Example", name:"interjectionExample", onChange: (e)=> setInterjectionExample(e.target.value)}
                  ]}/>
                {/* {Articles section} */}
                <WordDetailsField wordType="Articles"
                  inputField={[{label:"Article Example", name:"articleExample", onChange:(e)=> setArticleExample(e.target.value)}
                  ]}/>
                <div className='flex justify-center mt-3'>
                  <div className='h-8 w-[120px] bg-bluecolor rounded-full'>
                    <button type="submit" className='w-full h-full text-lg font-bold text-white '>Update </button>
                  </div>             
                </div>
              </form>
          </div>
        </div>
  )
}
