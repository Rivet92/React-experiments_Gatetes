import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useAppContext, ContextProvider} from './ContextProvider';

const Gatete = () => { 
    const context = useAppContext()
    console.log(context.id)
    if (useParams?.id)
        context.setId(useParams.id)
    var img = getGatete(context.id)
    useEffect(() => {
        if (context.id) {
            window.history.pushState(null, `Gatete - ${context.id}`, `/id/${context.id}`)
            console.log(context.id)
        }
            
    }, [context.id])
    
    const verMasGatetes = (event) => {
        event.preventDefault()
        let id = Math.floor(Math.random() * 30)
        window.history.pushState(null, `Gatete - ${id}`, `/id/${id}`)
        context.setId(id)
    }

    if (isValidId(context.id))  {
        context.setId(img.id)
        return (
            <div>
                <a href={img.url}><img src={"/img/" + img.fileName} alt={"Autor: " + img.author} /></a>
                <p>Autor: <a href={img.authorUrl}>{img.author}</a></p>
                <a href="/" onClick={verMasGatetes} >Quiero ver otro gatete!!</a>
            </div>
        );
    }
    else 
        return (<div><h2>Esa url no es la de un gatete :(</h2></div>);


}



function isValidId(id) {
    return !id || (id>=0 && id<30)
}

function getGatete(i) {
    var images = require('./images.json')
    var j = (i && i>=0 && i<30)? i:  Math.floor(Math.random()*30)
    var index = Object.keys(images)[j]
    return {id: j,
            fileName: index + ".jpg", 
            url: images[index]['photo_url'], 
            author: images[index]['user_name'], 
            authorUrl: images[index]['user_url']}
}

export default Gatete;