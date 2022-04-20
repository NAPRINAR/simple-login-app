import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {useLocation, useMatch} from "react-router-dom";
import {clearCurrentPost, fetchCurrentPost} from "../../../redux/actions/users__action";
import "./post.scss"
import Preloader from "../../helpers/Preloader/Preloader";


const Post = () => {
    const currentPost = useSelector(data => data.users__reducer.current)
    let location = useLocation()
    let id = location.pathname.length < 8 ? location.pathname.slice(-1):location.pathname.slice(-2)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCurrentPost(id))
        return () => {
            clearCurrentPost()
        }
    }, [])

    return (
        <div className='currentPost'>
                {currentPost.title ?
                    <div className="currentPost__wrapper">
                        <h3 className="currentPost__title">
                            {currentPost.title}
                        </h3>
                        <div className="currentPost__imgWrapper">
                            <img src={currentPost.image} alt="" className="currentPost__img"/>
                        </div>
                        <div className="currentPost__rating">
                            <p><b>rate:</b>{currentPost.rating.rate}</p>
                            <p><b>buyed:</b>{currentPost.rating.count}</p>
                        </div>
                        <div className="currentPost__desc">
                            <p>{currentPost.description}</p>
                        </div>
                    </div> : <Preloader/>}
        </div>
    );
};

export default Post;