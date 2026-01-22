import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // Form model
  form = {
    name: '',
    email: '',
    message: '',
  };

  // EmailJS configuration
  private readonly SERVICE_ID = 'service_gdv6wqn';
  private readonly TEMPLATE_ID = 'template_116wi01';
  private readonly PUBLIC_KEY = 'SrnSORaR4WTA4NNC3';

  /**
   * Sends the contact form message using EmailJS
   */
  sendMessage(): void {
    // Simple form validation
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Please fill in all fields.');
      return;
    }

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message,
      to_email: 'christalriziki@gmail.com', // Optional if template already has recipient
    };

    // Send email using EmailJS
    emailjs
      .send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      )
      .then((response: EmailJSResponseStatus) => {
        console.log('✅ Email sent:', response.status, response.text);
        alert('Message sent successfully!');
        this.resetForm();
      })
      .catch((error: unknown) => {
        // Properly typed error handling
        if (error && typeof error === 'object' && 'status' in error) {
          console.error('❌ EmailJS failed:', error);
        } else {
          console.error('❌ EmailJS failed:', error);
        }
        alert('Failed to send message. Please try again.');
      });
  }

  /**
   * Resets the form fields
   */
  private resetForm(): void {
    this.form = {
      name: '',
      email: '',
      message: '',
    };
  }
}
