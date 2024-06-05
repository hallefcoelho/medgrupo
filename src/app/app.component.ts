import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'medgrupo';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(`icon-home`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-home.svg"));
    this.matIconRegistry.addSvgIcon(`icon-home-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-home-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-play`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-play.svg"));
    this.matIconRegistry.addSvgIcon(`icon-play-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-play-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-mentoring`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-mentoring.svg"));
    this.matIconRegistry.addSvgIcon(`icon-mentoring-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-mentoring-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-training`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-training.svg"));
    this.matIconRegistry.addSvgIcon(`icon-training-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-training-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-metrics`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-metrics.svg"));
    this.matIconRegistry.addSvgIcon(`icon-metrics-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-metrics-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-arrow-down`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-down.svg"));
    this.matIconRegistry.addSvgIcon(`icon-book`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-book.svg"));
    this.matIconRegistry.addSvgIcon(`icon-question`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-question.svg"));
    this.matIconRegistry.addSvgIcon(`icon-interrogation`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-interrogation.svg"));
    this.matIconRegistry.addSvgIcon(`icon-arrow-right`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-right.svg"));
    this.matIconRegistry.addSvgIcon(`icon-arrow-right-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-right-light.svg"));
    this.matIconRegistry.addSvgIcon(`icon-category`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-category.svg"));
    this.matIconRegistry.addSvgIcon(`icon-category-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-category-light.svg"));
    this.matIconRegistry.addSvgIcon(`icon-course`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-course.svg"));
    this.matIconRegistry.addSvgIcon(`icon-course-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-course-light.svg"));
    this.matIconRegistry.addSvgIcon(`icon-revision`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-revision.svg"));
    this.matIconRegistry.addSvgIcon(`icon-revision-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-revision-light.svg"));
    this.matIconRegistry.addSvgIcon(`icon-moon`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-moon.svg"));
    this.matIconRegistry.addSvgIcon(`icon-moon-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-moon-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-sun`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-sun.svg"));
    this.matIconRegistry.addSvgIcon(`icon-sun-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-sun-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-coffee`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-coffee.svg"));
    this.matIconRegistry.addSvgIcon(`icon-coffee-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-coffee-light.svg"));

    this.matIconRegistry.addSvgIcon(`perfil`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/perfil.svg"));
    this.matIconRegistry.addSvgIcon(`menu`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu.svg"));
    this.matIconRegistry.addSvgIcon(`menu-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu-light.svg"));
    this.matIconRegistry.addSvgIcon(`card`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/card.svg"));
  }
}
