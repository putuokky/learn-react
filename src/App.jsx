import Card from './components/Card';
import Button from './components/Button';

export default function App() {
    return (
        <div className={`bg-slate-100 text-slate-800 tracking-tighter antialiased flex items-center justify-center min-h-screen`}>
            <div className='max-w-xl w-full'>
                <Card>
                    <Card.Title>Hellow React</Card.Title>
                    <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro harum deserunt, a in soluta incidunt consectetur libero accusamus, dolore qui tempora itaque recusandae quod, vel hic minima laudantium aperiam.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}
