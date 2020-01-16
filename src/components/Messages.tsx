import React from 'react';
import '../css/Messages.css';

export default function Messages(){
    return (
        <div id='Messages' className="column aside">
            <h1>Messages</h1>
            <header>
                <button>Trash</button>
                <h1>Payment Type</h1>
                <h2>NAME <span className='positive'>+37</span>/<span className='negative'>-1</span></h2>
            </header>
        </div>
    );
}