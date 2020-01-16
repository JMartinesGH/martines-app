import React from 'react';
import '../css/Messages.css';

export default function Messages() {
    return (
        <div id='Messages' className="column aside">
            <header>
                <button>Trash</button>
                <h2>Payment Method</h2>
                <h3>NAME <span className='positive'>+37</span>/<span className='negative'>-1</span></h3>
            </header>
            <article>
                <ul>
                    <li>text</li>
                    <li className='other-contact'>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
            </article>
            <footer>
                <form action="">
                    <input type="text" placeholder="Type Your Message" />
                    <button>SEND</button>
                </form>
            </footer>

        </div>
    );
}