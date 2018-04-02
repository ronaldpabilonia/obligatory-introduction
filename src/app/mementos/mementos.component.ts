import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mementos',
  templateUrl: './mementos.component.html',
  styleUrls: ['./mementos.component.scss']
})
export class MementosComponent implements OnInit {
  
  photos = [
  	{
  		src: 'assets/images/13041276_1191708584172901_3607220337563853781_o.jpg',
  		cap: 'Me and Shaw with Ashley Gosiengfiao. (Unintentional rhyme by the way.)'
  	},
  	{
  		src: 'assets/images/10835122_964842306861099_2552684123225763643_o.jpg',
  		cap: 'The boys in Calaguas, 2015.'
  	},
  	{
  		src: 'assets/images/11038919_10203884079081677_4470096671921405114_n.jpg',
  		cap: 'Bert, me and Esh jamming at some random Cubao studio.'
  	},
  	{
  		src: 'assets/images/487924_10200314433657379_1202730599_n.jpg',
  		cap: "Sleepover at my house, 2013. Featuring Bert's badass tat."
  	},
  	{
  		src: 'assets/images/857025_549986285019641_15055209_o.jpg',
  		cap: 'CCMIT Battle of the bands 2013. We got second place!'
  	},
  	{
  		src: 'assets/images/13613396_1214699071876061_3431700123325887846_o.jpg',
  		cap: "It's a Shakey's kind of dinner with Kristine and the boys"
  	}
  ];

  constructor() { }

  ngOnInit() {
  }

}
