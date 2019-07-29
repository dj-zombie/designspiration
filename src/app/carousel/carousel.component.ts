import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	slides = [
	  {img: "https://s.dspncdn.com/a1/webapp/img/content/featured/welcome_signup.jpg"},
	  {img: "https://s.dspncdn.com/a1/webapp/img/content/featured/follow_instagram.jpg"},
	  {img: "https://s.dspncdn.com/a1/webapp/img/content/featured/color-search-is-back-bg.jpg"}, 
	  {img: "https://s.dspncdn.com/a1/webapp/img/content/featured/follow_instagram.jpg"},
	];
	slideConfig = {
	  "centerMode": true, 
	  "slidesToShow": 3,
	  centerPadding: '60px',
	  adaptiveHeight: true
	};	

  constructor() { }

  ngOnInit() {
  }
}
