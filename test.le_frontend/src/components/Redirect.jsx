import React, {Component} from 'react';

class Redirect extends Component {

    render() {
        const instaRedirect = () => {
            window.open("https://www.instagram.com/ojos.official/","_blank");
        };
        const fbRedirect = () => {
            window.open("https://www.facebook.com/ojosmusic/","_blank");
        };
        const xRedirect = () => {
            window.open("https://x.com/ojosdotcom/","_blank");
        };

        return (
            <div>
                <button className="card-button" onClick={instaRedirect}>Instagram</button>
                <br/>
                <button className="card-button" onClick={fbRedirect}>Facebook</button>
                <br/>
                <button className="card-button" onClick={xRedirect}>X</button>
                <br/>
            </div>
        );
    }
}

export default Redirect;