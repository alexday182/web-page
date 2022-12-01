import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LightDarkModeService } from '../shared/light-dark-mode.service';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  sent: string = '';
  constructor(
    private serviceMode: LightDarkModeService,
    private elemetRef: ElementRef,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.serviceMode.actualMode.subscribe((darkMode) => {
      this.serviceMode.setTheme(darkMode, this.elemetRef.nativeElement);
    });
  }
  onSubmit(form: NgForm) {
    this.contactService.sendMessage(form.value).subscribe((data) => {
      form.reset();
      this.sent = 'Menssage was send, Thank You';
    });
  }
}
