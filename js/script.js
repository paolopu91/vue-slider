/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
-Al click su una freccia, l’immagine mostrata cambia.
-la lista delle thumbs deve essere generata tramite un v-for

``

*/


const slides = [
    {
        id: 1,
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        id: 2,
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        id:3,
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 4,
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        id: 5,
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

//start with create initialize vue.
new Vue (
    {
        el: "#app", //reading my id div in html

        //here is where i'm writing my variable
        data: {
            imgSlide :slides,
            currentNumber: 0,
        },

        //here i will create my function
        methods:{
            prevSlide(){
                this.currentNumber++;
            },
            nextSlide(){
                this.currentNumber--;
               
            },
        }
    }
)