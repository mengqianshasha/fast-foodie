import React from "react";
import './index.css';
import SearchHeaderComponent from "./public_components/SearchHeaderComponent";
import SearchResultComponent from "./SearchResultComponent";
import Footer from "../HomeScreen/public-components/Footer";
import BrandName from "../HomeScreen/public-components/BrandName";

const SearchScreen = () => {
    return (
        <div className={"bg-white"}>
            <SearchHeaderComponent loggedIn={false}/>
            <div className={"searchscreen-body-container d-flex"}>
                <SearchResultComponent />
            </div>
            <Footer />
        </div>

    )
}

export default SearchScreen;