import React from 'react';
import '../css/Messages.css';

let Messages = (props: any) => {
    return (
        <div id='Messages' className={`column aside ${props.isActive ? 'display' : ''}`}>
            <header>
                <button onClick={() => props.toggleMessages() }>Back</button>
                <button onClick={() => props.toggleInformation() }>Information</button>
                <h2>{props.trades[props.activeTrade].type}</h2>
                <h3>{props.trades[props.activeTrade].user.username}
                    <span className='positive'>+{props.trades[props.activeTrade].user.positive}</span>
                    {props.trades[props.activeTrade].user.negative ? '/' : ''}
                    <span className='negative'>{props.trades[props.activeTrade].user.negative ? '-' + props.trades[props.activeTrade].user.negative : ''}</span>
                </h3>
                <hr />
            </header>
            <article>
                <ul>
                    {props.trades[props.activeTrade].messages.map((m: any) => (
                        // console.log(m)
                        <li key={m.id}
                            className={m.type === 'received' ? 'received' : ''}>
                            <div className='avatar'>Avatar</div>
                            <div className='message-body'>
                                {m.text}
                            </div>
                        </li>
                    ))}
                    {/* <li><div className='avatar'>Avatar</div><div className='message-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies velit, eget gravida tellus. Etiam consequat, metus vel sodales fermentum, metus tortor accumsan risus, id porta dolor ante nec ante.</div> </li>
                    <li className='received'><div className='avatar'>Avatar</div><div className='message-body'>Aenean eget luctus eros, eu fermentum enim. Phasellus non sagittis nisi. Vivamus sit amet felis vehicula, maximus lorem in, imperdiet eros. Cras posuere vitae enim a venenatis. Nullam molestie feugiat gravida. Phasellus iaculis rhoncus nulla at pulvinar. Proin sit amet nisi vulputate, pellentesque sem sit amet, feugiat metus. Morbi dolor massa, faucibus vitae arcu ornare, porta efficitur ex. Sed sollicitudin ex dui, non aliquam massa ultricies id.</div> </li>
                    <li><div className='avatar'>Avatar</div><div className='message-body'>Aliquam vel ante malesuada, rutrum augue nec, gravida metus.</div> </li>
                    <li><div className='avatar'>Avatar</div><div className='message-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies velit, eget gravida tellus. Etiam consequat, metus vel sodales fermentum, metus tortor accumsan risus, id porta dolor ante nec ante.</div> </li> */}
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

export default Messages