import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent {
  donationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.donationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
}
