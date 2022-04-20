import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./posts.scss"
import {fetchCurrentPost, fetchPostsData, logoutHandler, setCurrentPost} from "../../redux/actions/users__action";
import {NavLink} from "react-router-dom";
import preloader from "../assets/preloader.svg"
import Preloader from "../helpers/Preloader/Preloader";

const Posts = () => {
    const data = useSelector(data=>data.users__reducer)
    const dispatch = useDispatch()
    const email = localStorage.getItem("EMAIL")

    useEffect(()=>{
        dispatch(fetchPostsData())
    },[])


    return (
        <div className='posts'>
            <div className="posts__header">
                <h3 className="posts__userEmail">
                    {email}
                </h3>
                <button className="posts__logoutButton" onClick={()=>{dispatch(logoutHandler())}}>
                    Logout
                </button>
            </div>
            <div className="posts__boxes">
                {data.posts.length ? data.posts.map(el => {
                    return(
                        <div className='posts__boxesItem' key={`${el.title}_${el.price}`}>
                            <div className="posts__title">
                                <p>{el.title}</p>
                            </div>
                            <div className="posts__imgWrapper">
                                <img src={el.image} alt={el.category}/>
                            </div>
                            <div className="posts__price">
                                <p>{el.price}$</p>
                            </div>
                            <div className='posts__button'>
                               <NavLink to={`${el.id}`}>Show More</NavLink>
                            </div>

                        </div>
                    )
                }) :<Preloader/>}
            </div>
        </div>
    );
};

export default Posts;