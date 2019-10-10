import React from 'react'
import PropTypes from 'prop-types'
import animatGIF from '../images/animat.gif'



const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={animatGIF} height="80px" width="80px"/>
        </div>
        <div className="content">
            <div className="inner">
            <h1>Ciao, mi chiamo Daniele D'Amico</h1>
                <p>Quando racconto ai miei genitori che lavoro faccio mi guardano con faccia enigmatica</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header