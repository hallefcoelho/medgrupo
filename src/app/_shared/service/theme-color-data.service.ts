import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeColorDataService {

  private _themeColor!: string | null;
  themeColor = new BehaviorSubject<string | null>(this._themeColor);
  themeColor$ = this.themeColor.asObservable();

  setColorTheme(typeThemeColor: string | null ){
    if(typeThemeColor === 'dark'){
      document.documentElement.style.setProperty("--med-color-brand-1", '#0A515C');
      document.documentElement.style.setProperty("--med-color-brand-2", '#0F7888');
      document.documentElement.style.setProperty("--med-color-brand-3", '#14A2B8');
      document.documentElement.style.setProperty("--med-color-brand-4", '#47D5EB');
      document.documentElement.style.setProperty("--med-color-brand-5", '#A3EAF5');

      document.documentElement.style.setProperty("--med-color-neutral-alternative-1", '#1E2424');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-1-opacity", '#0e1111');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-2", '#57686B');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-3", '#C1CBCD');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-4", '#404d4f');

      document.documentElement.style.setProperty("--med-color-neutral-1", '#121616');
      document.documentElement.style.setProperty("--med-color-neutral-10", '#F9FAFA');
    }
    else {
      document.documentElement.style.setProperty("--med-color-brand-1", '#B8DBE0');
      document.documentElement.style.setProperty("--med-color-brand-2", '#70B7C2');
      document.documentElement.style.setProperty("--med-color-brand-3", '#3D848F');
      document.documentElement.style.setProperty("--med-color-brand-4", '#47D5EB');
      document.documentElement.style.setProperty("--med-color-brand-5", '#A3EAF5');

      document.documentElement.style.setProperty("--med-color-neutral-alternative-1", '#B8DBE0');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-1-opacity", '#0e1111');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-2", '#57686B');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-3", '#404d4f');
      document.documentElement.style.setProperty("--med-color-neutral-alternative-4", '#B8DBE0');

      document.documentElement.style.setProperty("--med-color-neutral-1", '#F9FAFA');
      document.documentElement.style.setProperty("--med-color-neutral-10", '#121616');
    }
    localStorage.setItem('theme', typeThemeColor == 'dark' ? 'dark' : 'light')
    this.themeColor.next(typeThemeColor)
  }

}
