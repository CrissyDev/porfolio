import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[CommonModule, FormsModule],
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
    emailjs
      .send(
        'your_service_id', 
        'your_template_id', 
        {
          from_name: this.form.name,
          from_email: this.form.email,
          message: this.form.message
        },
        'your_public_key' 
      )
      .then(
        () => {
          alert('Message sent successfully!');
          this.form = { name: '', email: '', message: '' };
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  }
}
