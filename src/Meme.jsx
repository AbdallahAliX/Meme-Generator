import React from "react"
import memesData from "./memesData"



export default function MemeForm() {

    const [memeImage,setMemeImage] = React.useState("");

    const [memeText,setMemeText] = React.useState({
        topText:"",
        bottomText:""
    })

    function handleChange(event){
        const {name,value} = event.target
        setMemeText(prevMemeText => ({
            ...memeText,
            [name]:value
        }))
    }

    function randomMemeImage(){
    const memesArray = memesData.data.memes;
    const randomImage = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomImage].url)
    }

    return(
        <>
            <div className="body-container">
                <div className="input-layout">
                    <input 
                        className="meme-input" 
                        placeholder="Top Text"
                        name="topText"
                        value={memeText.topText}
                        onChange={handleChange}
                    />
                    <input
                        className="meme-input" 
                        placeholder="Bottom Text" 
                        name="bottomText"
                        value={memeText.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={randomMemeImage} className="image-generator">Get a new meme image 🖼</button>
                
                <div className="meme">
                <img src={memeImage} className="meme--image" />
                <h2 className="meme--text top">{memeText.topText}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText}</h2>
            </div>
            </div>
            
        </>

    )
}