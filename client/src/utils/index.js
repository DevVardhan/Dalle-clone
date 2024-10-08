import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver'

import React from 'react'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt) {
        return getRandomPrompt(randomPrompt)
    }

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}