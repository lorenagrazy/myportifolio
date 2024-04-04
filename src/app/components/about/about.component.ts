import { Component, OnInit, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

declare const VanillaTilt: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  jobTitle: string = '';

  ngOnInit() {
    this.initTypedJS();
    this.setJobTitle();
  }

  ngAfterViewInit() {
    VanillaTilt.init(document.querySelector('.tilt'), {
      max: 15,
    });
  }

  private setJobTitle() {
    const jobTitles = [
      'Software Engineering',
      'Frontend Development',
      'Angular Development',
      'Web Development',
    ];

    this.jobTitle = jobTitles[2];
  }

  private initTypedJS() {
    const options = {
      strings: [
        'Software Engineering',
        'Frontend Development',
        'Angular Development',
        'Web Development',
      ],
      loop: true,
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 500,
    };

    new Typed('.tag', options);
  }
}
