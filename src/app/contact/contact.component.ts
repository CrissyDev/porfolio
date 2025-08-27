import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage() {
    const serviceID = 'service_gdv6wqn'; 
    const templateID = 'template_116wi01'; 
    const publicKey = 'SrnSORaR4WTA4NNC3'; 

    emailjs
      .send(
        serviceID, 
        templateID, 
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message,
          to_email: 'christalriziki@gmail.com'
        },
        publicKey
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          alert('Message sent successfully!');
          this.form = { name: '', email: '', message: '' };
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  }
}