import React, { useEffect } from 'react'
import axios from 'axios';

const Convert = ({language, text}) => {

    useEffect(() =>{
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: 
            }
        })
    }, [language, text]);


    return (
        <div>Convert</div>
    )
}

export default Convert