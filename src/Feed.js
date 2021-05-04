import React, {useState, useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ViewDaySharpIcon from '@material-ui/icons/ViewDaySharp';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: "Anom",
            description: "This is a test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost}type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={MovieSharpIcon} title="Video" color="#7FC15E" />
                    <InputOption Icon={EventAvailableIcon} title="Event" color="orange" />
                    <InputOption Icon={ViewDaySharpIcon} title="Write article" color="lightcoral"/>
                </div>
            </div>
            {posts.map(({id, data:{name,description,message,photoUrl} }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed
