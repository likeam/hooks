import React from 'react'

 const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <a href="/" className="item">
                Accordion
            </a>
            <a href="/list" className="item">
                Search
            </a>
            <a href="/dropdwon" className="item">
                Dropdwon
            </a>
            <a href="/translate" className="item">
                Translate
            </a>
        </div>
    )
}
export default Header;
