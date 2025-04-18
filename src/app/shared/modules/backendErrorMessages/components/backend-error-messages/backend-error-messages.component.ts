import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../../types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss'
})
export class BackendErrorMessagesComponent implements OnInit {

  ngOnInit(): void {

    console.log('backendErrorsProps', this.backendErrorsProps)

    console.log('PR', Object.values(this.backendErrorsProps).join(', '));

    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')
        return `${name} ${messages}`
    });

    console.log('errorMessages', this.errorMessages)
  }

  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];
}
