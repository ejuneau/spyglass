import React from "react";
import HomePage from "../Components/HomePage/HomePage";
import AboutPage from "../Components/AboutPage/AboutPage";
import ShopPage from "../Components/ShopPage/ShopPage";
import ContactPage from "../Components/ContactPage/ContactPage";

export default function LandingPage() {
    return (
        <div id="landingPageWrapper">
            <HomePage />
            <AboutPage />
            <ContactPage />
        </div>
    )
}