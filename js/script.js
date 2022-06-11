/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
-Al click su una freccia, l’immagine mostrata cambia.
-la lista delle thumbs deve essere generata tramite un v-for

``

*/


const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
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

            //button prev on my html
            prevSlide(){
                //I create my condition to slide the images down
                if (this.currentNumber > 0) {
                    this.currentNumber--;
                } else {
                    this.currentNumber = slides.length - 1;
                }
                
                
            },
            //Button next on my html
            nextSlide(){
                //I create my condition to slide the images up
                if (this.currentNumber < (slides.length - 1)){
                    this.currentNumber++;
                } else {
                    this.currentNumber = 0;
                }
            },
            
        }
    }
)