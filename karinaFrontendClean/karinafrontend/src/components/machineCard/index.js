import React, { useState, useEffect, useRef } from 'react';
import volvo from '../../images/volvo.JPG';

const MachineCard = () => {
    const [applyMask, setApplyMask] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const isOverflowing = textRef.current.scrollHeight > textRef.current.clientHeight;
            setApplyMask(isOverflowing);
        }
    }, []);

    const maskStyle = applyMask ? {
        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
    } : {};

    return (
        <div className="card shadow-lg bg-blue-100 flex" style={{ maxWidth: '960px', maxHeight: '240px' }}>
            <img src={volvo} alt="Volvo" style={{ maxWidth: '50%', maxHeight: '100%', objectFit: 'cover' }} />
            <div className="card-body bg-white" style={{ width: '50%', padding: '20px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <h1 className='text-2xl' style={{ marginTop: '0', marginBottom: '1rem' }}>Volvo</h1>
                <div ref={textRef} style={{
                    maxHeight: 'calc(100% - 3rem)', // Adjust based on the h1 size and desired padding
                    overflow: 'hidden',
                    position: 'relative',
                    ...maskStyle
                }}>
                    <p className="card-text" style={{ margin: '0' }}>
                        Contrary to popular belief,
                         Lorem Ipsum is not simply random text.
                          It has roots in a piece of classical Latin literature from 45 BC, 
               
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MachineCard;
