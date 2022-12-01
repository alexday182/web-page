import {
  COMPILER_OPTIONS,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @ViewChild('toggle', { static: true }) menu!: ElementRef;
  @ViewChild('overlay', { static: true }) menuItems!: ElementRef;
  @ViewChild('icon', { static: true }) menuIcon!: ElementRef;
  @ViewChild('overlayMenu', { static: true }) overlay!: ElementRef;
  isOpen = false;
  ngOnInit() {}
  toggleMenu() {
    this.menuItems.nativeElement.classList.toggle('open');
    this.menuIcon.nativeElement.classList.toggle('fa-bars');
    this.menu.nativeElement.classList.toggle('full-menu');
    this.menuIcon.nativeElement.classList.toggle('fa-times');
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event']) documentClickEvent($event: any) { 
    const insideMenu =
      this.menuIcon.nativeElement === $event.target ||
      this.overlay.nativeElement === $event.target ||
      this.menu.nativeElement === $event.target ||
      this.menuItems.nativeElement === $event.target;
    if (!insideMenu) {
      this.menuIcon.nativeElement.classList.add('fa-bars');
      this.menu.nativeElement.classList.remove('full-menu');
      this.menuIcon.nativeElement.classList.remove('fa-times');
      this.menuItems.nativeElement.classList.remove('open');
      this.isOpen = false;
    }
  }
  closeMenu() {}
}
