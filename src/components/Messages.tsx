import React from 'react';
import '../css/Messages.css';

export default function Messages() {
    return (
        <div id='Messages' className="column aside">
            <header>
                <button>Trash</button>
                <h2>Payment Method</h2>
                <h3>NAME <span className='positive'>+37</span>/<span className='negative'>-1</span></h3>
                <hr/>
            </header>
            <article>
                <ul>
                    <li><div className='avatar'>Avatar</div><div className='message-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies velit, eget gravida tellus. Etiam consequat, metus vel sodales fermentum, metus tortor accumsan risus, id porta dolor ante nec ante.</div> </li>
                    <li className='received'><div className='avatar'>Avatar</div><div className='message-body'>Aenean eget luctus eros, eu fermentum enim. Phasellus non sagittis nisi. Vivamus sit amet felis vehicula, maximus lorem in, imperdiet eros. Cras posuere vitae enim a venenatis. Nullam molestie feugiat gravida. Phasellus iaculis rhoncus nulla at pulvinar. Proin sit amet nisi vulputate, pellentesque sem sit amet, feugiat metus. Morbi dolor massa, faucibus vitae arcu ornare, porta efficitur ex. Sed sollicitudin ex dui, non aliquam massa ultricies id.</div> </li>
                    <li><div className='avatar'>Avatar</div><div className='message-body'>Aliquam vel ante malesuada, rutrum augue nec, gravida metus.</div> </li>
                    <li><div className='avatar'>Avatar</div><div className='message-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies velit, eget gravida tellus. Etiam consequat, metus vel sodales fermentum, metus tortor accumsan risus, id porta dolor ante nec ante.</div> </li>
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