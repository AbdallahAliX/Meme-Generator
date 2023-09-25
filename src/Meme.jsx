import React from "react"
import memesData from "./memesData"



export default function MemeForm() {

    const [memeImage,setMemeImage] = React.useState("");

    function randomMemeImage(){
    const memesArray = memesData.data.memes;
    const randomImage = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomImage].url)
    }

    return(
        <>
            <div className="body-container">
                <div className="input-layout">
                    <input className="meme-input" placeholder="Top Text" />
                    <input className="meme-input" placeholder="Bottom Text" />
                </div>
                <button onClick={randomMemeImage} className="image-generator">Get a new meme image 🖼</button>
                <img src={memeImage} className="meme" />
            </div>
            
        </>

    )
}