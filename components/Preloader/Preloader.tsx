import React from 'react'

const Preloader = () => {
    let style = {
        width: '150px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <>
            <img
                style={style}
                src="/Preloader.svg" alt="Loader"
            />
        </>
    );
};

export default Preloader