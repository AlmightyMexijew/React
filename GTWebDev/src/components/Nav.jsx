import * as React from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
export default function Nav(){
    return(
        <nav>
            <NavLogo/>
            <NavMenu/>
        </nav>
    )
}