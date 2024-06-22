import { useSelector } from 'react-redux';
import './App.css'
import { selectContacts } from './reducers/contactSlice';
import { useState } from 'react';

function App() {
  const contacts = useSelector(selectContacts);

const alphArray = [
  {
    letter: "A"
  },
  {
    letter: "B"
  },
  {
    letter: "C"
  },
  {
    letter: "D"
  },  {
    letter: "E"
  },
  {
    letter: "F"
  },  {
    letter: "G"
  },
  {
    letter: "H"
  },  {
    letter: "I"
  },
  {
    letter: "J"
  },  {
    letter: "K"
  },
  {
    letter: "L"
  },  {
    letter: "M"
  },
  {
    letter: "N"
  },  {
    letter: "O"
  },
  {
    letter: "P"
  },  {
    letter: "Q"
  },
  {
    letter: "R"
  },  {
    letter: "S"
  },
  {
    letter: "T"
  },  {
    letter: "U"
  },
  {
    letter: "V"
  },  {
    letter: "W"
  },
  {
    letter: "X"
  },  {
    letter: "Y"
  },
  {
    letter: "Z"
  },
];
const [tabAlph, setTabAlph] = useState(alphArray)
// const handleTabs = (i) => {
// const filteredContacts = contacts.filter( contact => contact.name.last.charAt(0) === i.letter);
// console.log(filteredContacts, "filtered");
// return filteredContacts.map((contact, index) => (
//   <button className='btn' key={index}>{contact.name.last}</button>
// ))
// };  
const filters = tabAlph === "" ? alphArray : contacts.filter( (contact) => contact.name.last.charAt(0) === tabAlph.letter)
;

console.log(filters, "tab");
  return (
      <div className="container">
        <div className="box-one">
          <p>salam</p>
          {
            alphArray.map((i,index) => (
               <div className="tabs" key={index}>
                <button className='btn' onClick={() => setTabAlph(i)} >{i.letter}</button>
               </div>
            ))         
          }          
        </div>   
        <div className='box-two'>
          {
            filters.map( (filter, index) => (
              <button className="btn btn-contact" key={index}>
                <img src={filter.picture.thumbnail} />
                <p>{` ${filter.name.title}  \u0020\u00A0  ${filter.name.first} \u00A0 ${filter.name.last}`}</p>                
              </button>
            ))
          }
        </div>    

      </div>
  )
}

export default App
