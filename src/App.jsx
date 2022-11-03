import { useRef } from 'react';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import PlaceContentCenter from './components/PlaceContentCenter';
import Todo from './components/Todo';

export default function App() {
    // const [tick, setTick] = useState(0);
    const inputRef = useRef(null);

    function handleClick() {
        // tick.current = tick.current + 1;
        // console.log(tick.current);
        // const nextTick = tick + 1;
        // setTick(nextTick);
        // console.log(nextTick);
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useRef Hooks</Card.Title>
                <Card.Body>
                    <Input isFocused className='border border-slate-600' ref={inputRef} />
                    <Button onClick={handleClick}>Tick</Button>
                </Card.Body>
                {/* <Card.Footer>You click {tick.current} times.</Card.Footer> */}
            </Card>
        </PlaceContentCenter >
    );
}
