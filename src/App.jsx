import Card from './components/Card';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import { IconBrandGithub } from '@tabler/icons';
import Input from './components/Input';
import Label from './components/Label';

export default function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function submit(e) {
        e.preventDefault();

        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Sign up for new account!</Card.Title>
                <form onSubmit={submit}>
                    <Card.Body>
                        <div className='mb-5 border  rounded-lg p-4'>
                            <p>Name: {form.name || '----'}</p>
                            <p>Email: {form.email || '----'}</p>
                        </div>
                        <div className="mb-6">
                            <Label htmlFor='name' value={'Name'} />
                            <Input value={form.name} onChange={onChange} id='name' name='name' />
                        </div>
                        <div>
                            <Label htmlFor='email' value={'Email'} />
                            <Input value={form.email} onChange={onChange} id='email' name='email' />
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button>
                            <IconBrandGithub />
                            Register
                        </Button>
                    </Card.Footer>
                </form>
            </Card>
        </PlaceContentCenter >
    );
}
