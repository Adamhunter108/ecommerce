import React from 'react'
import { Spinner } from 'react-bootstrap'

// https://react-bootstrap.github.io/components/spinners/

function Loader() {
    return (
        <Spinner
        animation='border'
        role='border'
        style={{
            height: '100px',
            width: '100px',
            margin: 'auto',
            display: 'block'
        }}
        >
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader
