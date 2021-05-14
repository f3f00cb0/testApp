/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

window.onload = function() {
    class Randomize {
            
        constructor(){
            this.init()
            this.onClick()
        }
    
        init(){
            console.log('OK !');
            const images = [
                {id: 0, url: './images/grimace1.png'},
                {id: 1, url: './images/grimace2.png'},
                {id: 2, url: './images/grimace3.png'},
                {id: 3, url: './images/grimace4.png'}
            ];
            const infos = {id:1, texte: 'coucou les moches'};
            const titres = {id:1, texte: 'coucou les beaux'};
            this.randomizeImage(images);
            document.getElementById('deux').innerHTML = '<p>' + infos.texte + '</p>';
            document.getElementById('trois').innerHTML = '<p>' + titres.texte + '</p>';
        }
    
        onClick(){
            let clickEvent = document.getElementById('initParagraphe');
            clickEvent.onClick = this.actualiseConteneur;
        }
    
        /* on peut pas aller à la ligne dans les box */
        actualiseConteneur(){
            let texteun = document.getElementById('textun').value;
            document.getElementById('deux').innerHTML = '<p>' + texteun + '</p>';
    
            let textedeux = document.getElementById('textdeux').value;
            document.getElementById('trois').innerHTML = '<p>' + textedeux + '</p>';
        }
    
        randomizeImage(images){
            let randomValue = Math.floor(Math.random() * Math.floor(images.length));
            document.getElementById('un').innerHTML = '<img src="' + images[randomValue].url + '"/>';
        }
    }
    
    const randomize = new Randomize();
};

