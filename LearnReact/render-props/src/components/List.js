import React from 'react';

export default function({ data, render })
{
    // data.map(item => render(item)) như dòng dưới
    return <div>{ data.map(render) }</div>
}