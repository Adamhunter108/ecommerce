import React from 'react'
import { Alert } from 'react-bootstrap'

// https://react-bootstrap.github.io/components/alerts/

function Message({variant, children}) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

export default Message
