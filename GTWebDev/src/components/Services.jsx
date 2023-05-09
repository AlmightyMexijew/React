import * as React from 'react';
import { serviceslist } from '../data';
export default function Services(){
    const listItems = serviceslist.map(item=><li key="{item.id}" className='{item.className}'>
        <h2>{item.name}</h2>
        <p>{item.contents}</p>
    </li>)
    return(
        <ul>{listItems}</ul>
    )
}