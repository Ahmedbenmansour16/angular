import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import type { Conference } from '../conferencelist/conferencelist';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  conference = input<Conference | null>(null);
  title: string = 'Conference Details';
}
