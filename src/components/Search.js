import React, { useState, useEffect } from "react"
import axios from "axios";


const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data}  = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
            
        };

       
       const timeoutI = setTimeout(() => {
            if(term){
                search();
            }
        }, 500);
    
    }, [term]);

    const renderedResult = results.map((result) => {
    
    
        return ( 
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">{result.title}</div>
                    {result.snippet}
                </div>
                <div className=" right floated content ">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
            </div>
        );
    });

    return (<div>
        <div className="ui form">
            <div className="field">
                    <label > Enter Search Term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input"  />
            </div>
        </div>
        <div className="ul celled list">{renderedResult}</div>
        </div>
    );
};

export default Search
