import Card from './components/Card';
import Button from './components/Button';
import PlaceContentCenter from './components/PlaceContentCenter';
import { useState } from 'react';
import Counter from './components/Counter';

export default function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}
