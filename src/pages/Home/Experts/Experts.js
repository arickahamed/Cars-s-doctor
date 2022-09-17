import React from 'react';
import { experts } from '../../../assets/data/experts';
import Expert from '../Expert/Expert';

const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    />)
                }
            </div>
        </div>
    );
};

export default Experts;