import React from 'react';

export default function({ src, width = 300, height = 200 })
{
    return(
        <div 
            className="AwesomeImage"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px'
            }}
        />
    );
}