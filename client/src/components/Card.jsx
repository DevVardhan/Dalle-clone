import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const randColour = () => {
    const letters = '0123456789ABCDEF'
    let colour = '#'
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)]
    }
    return colour
}

const card = ({ _id, name, prompt, photo }) => (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full object-cover  flex justify-center items-center text-white text-xs font-bold" style={{ backgroundColor: randColour() }}>
                        {name[0].toUpperCase()}
                    </div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
                    <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                </button>
            </div>
        </div>
    </div>
);

export default card