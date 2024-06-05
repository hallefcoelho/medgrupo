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
    this.matIconRegistry.addSvgIcon(`icon-home-active`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-home-active.svg"));
    this.matIconRegistry.addSvgIcon(`icon-play`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-play.svg"));
    this.matIconRegistry.addSvgIcon(`icon-mentoria`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-mentoria.svg"));
    this.matIconRegistry.addSvgIcon(`icon-treinamento`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-treinamento.svg"));
    this.matIconRegistry.addSvgIcon(`icon-metricas`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-metricas.svg"));
    this.matIconRegistry.addSvgIcon(`icon-arrow-down`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-down.svg"));
    this.matIconRegistry.addSvgIcon(`icon-book`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-book.svg"));
    this.matIconRegistry.addSvgIcon(`icon-question`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-question.svg"));
    this.matIconRegistry.addSvgIcon(`icon-interrogacao`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-interrogacao.svg"));
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

    this.matIconRegistry.addSvgIcon(`perfil`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/perfil.svg"));
    this.matIconRegistry.addSvgIcon(`menu`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu.svg"));
    this.matIconRegistry.addSvgIcon(`menu-light`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu-light.svg"));
    this.matIconRegistry.addSvgIcon(`card`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/card.svg"));
  }
}
