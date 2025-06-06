import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3 fs-2'>Open a Zerodha account</h1>
                <p className='mb-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 fs-5 mb-2' style={{width: "15%", margin: "0 auto", backgroundColor: "#387ed1"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;