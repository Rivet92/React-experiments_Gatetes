import React from 'react';
import {useAppContext} from '../ContextProvider';

export default function MoarGatetes() {
    const context = useAppContext()
    const verMasGatetes = (event) => {
        event.preventDefault()
        let id = Math.floor(Math.random() * 30)
        window.history.pushState(null, `Gatete - ${id}`, `/id/${id}`)
        context.setId(id)
    }
    return (<button onClick={verMasGatetes} >Quiero ver otro gatete!!</button>);

}