import React, {useEffect, useState} from "react";
import './index.css';
import SearchHeader from "./SearchHeader";
import SearchResultComponent from "./SearchResultComponent";
import Footer from "../footers/Footer";
import BrandName from "../CustomerHomeScreen/public-components/BrandName";
import {searchRestaurants} from "../../services/searchService";
import {useHistory, useLocation} from "react-router-dom";
import {concatQueries} from "../CustomerHomeScreen/utils/url";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../services/profileService";
import isLoggedIn from "../CustomerHomeScreen/utils/isLoggedIn";
import defaultLocation from "../CustomerHomeScreen/utils/defaultLocation.json";

const SearchScreen = () => {
    window.scrollTo(0, 0);


    // get profile
    const profile = useSelector(state=>state.profile);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchProfile(dispatch)
    }, [])


    // Query parameters
    const history = useHistory();

    // get query string from router url
    function useQuery() {
        return new URLSearchParams(history.location.search);
    }
    let query = useQuery();

    const [params, setParams] = useState({})
    const [searchResult, setSearchResult] = useState([]);


    // Set default params
    const initParams = () => {

        let defaultParams = {};
        query.forEach((value,key)=> {
            defaultParams[key] = value;
        });
        if (Object.keys(defaultParams).length === 0 || !("location" in defaultParams)) {
            defaultParams['location'] = isLoggedIn(profile) ? profile.location : defaultLocation;
        }
        setParams(defaultParams);
    }
    useEffect(initParams, [history.location.search, profile]);

    useEffect(()=>{
        searchRestaurants(params)
            .then(restaurants => {
                setSearchResult(restaurants)
            })
    }, [params]);

    const clickHandler = (newParams) => {
        history.push(`search?${concatQueries(newParams)}`);
    }


    return (
        <div className={"bg-white app-window-container"}>
            <SearchHeader profile={profile} params={params} clickFunction={clickHandler}/>
            <div className={"searchscreen-body-container d-flex"}>
                <SearchResultComponent location={params.location} searchResultList={searchResult}/>
            </div>
            <Footer />
        </div>

    )
}

export default SearchScreen;