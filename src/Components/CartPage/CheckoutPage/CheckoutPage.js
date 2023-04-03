import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Util/Button";
import './CheckoutPage.css';

export default function CheckoutPage() {
    return (
        <div className="CheckoutPageComponent">
            <h1>That's All, fOlks.</h1>
            <p>You've reached the end of this portfolio project. Thank you from the bottom of my heart for taking the time to explore this site, I truly hope you enjoyed what I made. If you would like to discuss the site or get in touch for anything else, please write to me from the Contact Page. I'd be more than happy to discuss any of the work I've done, on this site or any of my previous projects.</p>
            <div className="CheckoutButtons" >
                <Link to="/Contact"><Button text="Contact Page" /></Link>
                <Link to="/"><Button text="Home Page" /></Link>
                <a href="https://ejuneau.me" target="_blank"><Button text="My portfolio" /></a>
            </div>
            <p>Once again, thank you. This was incredibly fun to work on and I've learned so much from this project.</p>
            <div className="spacer" />
        </div>
    )
}