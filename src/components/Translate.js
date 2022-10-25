import React, {useState} from 'react'
import Dropdown from './Dropdown';


const options =[
    {
        label: 'Africaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Urdu',
        value: 'ur'
    },
];


const Translate = () => {

    const [language, setLanguage] = useState(options[0]);


    return (
        <div>
        <Dropdown 
            selected={language} 
            onSelectedChange={setLanguage}  
            options={options} 
        />
        </div>
    )
}

export default Translate;
