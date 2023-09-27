import React from "react"



export default function MemeForm() {

    const [memeImage,setMemeImage] = React.useState("");

    const [memeText,setMemeText] = React.useState({
        topText:"",
        bottomText:""
    })
    const [allMemes,setAllMemes] = React.useState([])
    function handleChange(event){
        const {name,value} = event.target
        setMemeText(prevMemeText => ({
            ...memeText,
            [name]:value
        }))
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])

    function randomMemeImage(){
    const randomImage = Math.floor(Math.random() * allMemes.length)
    setMemeImage(allMemes[randomImage].url)
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