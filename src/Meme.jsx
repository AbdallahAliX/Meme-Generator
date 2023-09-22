import React from "react"

export default function MemeForm() {
    return(
        <div className="body-container">
            <div className="input-layout">
                <input className="meme-input" placeholder="Top Text" />
                <input className="meme-input" placeholder="Bottom Text" />
            </div>
            <button className="image-generator">Get a new meme image 🖼</button>
        </div>
    )
}