import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css"
import {useSelector} from "react-redux";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post/Post";
import {useEffect} from "react";
import {useDispatch} from "react-redux"
import {checkIsOnline} from "./redux/actions/users__action";

function App() {
    const isOnline = useSelector(state => state.users__reducer.isOnline)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        dispatch(checkIsOnline())
        if (isOnline) {
            navigate('post')
            if(location.pathname !== "/post" && location.pathname !== '/'){
                navigate(location.pathname)
            }
        } else {
            navigate('/')
        }


    }, [isOnline,location.pathname])


    return (
        <div className="App">
            <Routes>
                <Route  path='/' element={<Login/>}/>
                <Route  path='post' element={<Posts/>}/>
                <Route  path='post/:id' element={<Post/>}/>
            </Routes>
        </div>
    );
}

export default App;
