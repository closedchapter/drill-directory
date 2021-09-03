import React from 'react';
import Container from './list.js';
import Convicts from './data.json';

const Home = () => {
    return (
        <div className='flex flex-col p-5 absolute inset-0'>
            <div className='text-3xl font-bold mt-5'>Drill Directory</div>
            <div className='text-xl mt-5 font-normal'>Find out what your favourite artist is locked up for, and when they are coming out.</div>
            <div className='mt-10 grid grid-flow-row grid-cols-2 gap-5'>
                <Container data={Convicts} />
            </div>
        </div>
    )
}

export default Home;