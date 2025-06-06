import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3 fs-2'>404 Not Found</h1>
                <p className='mb-5 text-muted'>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
     );
}

export default NotFound;