import React from 'react';
class Gatete extends React.Component {

    constructor (props) {
        super(props);
        this._id = props.id
    }
    get id() {return this._id}
    set id(val) {this._id = val}
    render() {
        var img = getGatete(this.id)
        if (isValidId(this.id))  {
            this.id = img.id
            return (
                <div>
                    <a href={img.url}><img src={"/img/" + img.fileName} alt={"Autor: " + img.author} /></a>
                    <p>Autor: <a href={img.authorUrl}>{img.author}</a></p>
                </div>
            );
        }
        else 
            return (<div><h2>Esa url no es la de un gatete :(</h2></div>);
    }
    componentDidMount() {
        if (this.id)
            window.history.pushState(null, "Gatete - "+this.id, "/id/"+this.id)
    }

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