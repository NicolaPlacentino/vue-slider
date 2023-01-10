/*Partendo dal markup della versione svolta in js plain, 
rifare lo slider ma questa volta usando Vue.

Deve vedersi un'immagine grande che è l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente 
messo in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": 
se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; 
se sono alla prima immagine e clicco sul prev vado all'ultima.*/

const app = Vue.createApp({
    data(){
        return{
            games: [
                {
                  image: 'img/01.webp',
                  title: 'Marvel\'s Spiderman Miles Morales',
                  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                  image: 'img/02.webp',
                  title: 'Ratchet & Clank: Rift Apart',
                  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                  image: 'img/03.webp',
                  title: 'Fortnite',
                  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                  image: 'img/04.webp',
                  title: 'Stray',
                  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                  image: 'img/05.webp',
                  title: "Marvel's Avengers",
                  text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    }
});

app.mount('#root');