import React from "react";
import Hero from "../Component/Hero/Hero"
import Popular from "../Component/Popular/Popular";
import Offers from "../Component/Offers/offers";
import NewCollections from "../Component/NewCollections/newcollections";
import NewsLetter from "../Component/NewsLetter/NewsLetter";

const shop =() => {
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default shop