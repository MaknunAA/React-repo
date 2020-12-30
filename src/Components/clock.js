import ReactDOM from 'react-dom'

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>it is the {props.date.localTImeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);