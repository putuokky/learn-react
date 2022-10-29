import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandTwitter,
} from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
    return (
        <div className={`bg-slate-900 grid place-content-center min-h-screen`}>
            <div className='flex gap-x-2'>
                <Button
                    {...{
                        type: 'submit',
                        onClick: () =>
                            console.log('Login with another style....'),
                    }}
                >
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button onClick={() => console.log('Register')} type='submit'>
                    <IconBrandFacebook />
                    Login
                </Button>
                <Button
                    className='bg-sky-600'
                    onClick={() => console.log('Login')}
                    type='button'
                >
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button
                    className='bg-black'
                    onClick={() => console.log('Login')}
                    type='button'
                >
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}

function Button(props) {
    const { className = 'bg-blue-600', children, text } = props;
    return (
        <button
            {...props}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-2 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
