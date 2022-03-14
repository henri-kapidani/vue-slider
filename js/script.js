const app = new Vue({
	el: '#root',
	data: {
		interval: 3000,
		intervalId: null,
		activeIndex: 0,
		// arrSlides: null, // se vogliamo simulare lo scaricamento dei dati dal server
		arrSlides: [
			{
				title: 'Svezia',
				img: '01.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
			},
			{
				title: 'Svizzera',
				img: '02.jpg',
				text: 'Lorem ipsum',
			},
			{
				title: 'Gran Bretagna',
				img: '03.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			},
			{
				title: 'Germania',
				img: '04.jpg',
				text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
			},
			{
				title: 'Paradise',
				img: '05.jpg',
				text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
			},
		],
	},
	methods: {
		next() {
			if (this.activeIndex == this.arrSlides.length - 1) {
				this.activeIndex = 0;
			} else {
				this.activeIndex++;
			}
		},
		previus() {
			if (this.activeIndex == 0) {
				this.activeIndex = this.arrSlides.length - 1;
			} else {
				this.activeIndex--;
			}
		},
		setActiveIndex(index) {
			this.activeIndex = index;
		},
		stopSlider() {
			clearInterval(this.intervalId);
		},
		startSlider() {
			// salvare il valore che ritorna setInterval è importante perchè è l'identificativo da passare a clearInterval per fermare le ripetizioni
			this.intervalId = setInterval(this.next, this.interval);
		}
	},
	created() {
		/* simulazione di scaricamento dei dati dal server */
		// setTimeout(() => {
		// 	this.arrSlides = [
		// 		{
		// 			title: 'Svezia',
		// 			img: '01.jpg',
		// 			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
		// 		},
		// 		{
		// 			title: 'Svizzera',
		// 			img: '02.jpg',
		// 			text: 'Lorem ipsum',
		// 		},
		// 		{
		// 			title: 'Gran Bretagna',
		// 			img: '03.jpg',
		// 			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		// 		},
		// 		{
		// 			title: 'Germania',
		// 			img: '04.jpg',
		// 			text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
		// 		},
		// 		{
		// 			title: 'Paradise',
		// 			img: '05.jpg',
		// 			text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
		// 		},
		// 	];
		// }, 3000);
	},
	mounted() {
		// quando il DOM viene montato nella pagina avviamo lo slider automatico
		this.startSlider();
	},
});
