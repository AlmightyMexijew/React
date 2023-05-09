import * as React from 'react';
import { btnlist } from '../data.js';

export default function NavBtn(){
    const listItems = btnlist.map(item=><li key="item.id">{item.name}</li>)
    return(listItems)
}