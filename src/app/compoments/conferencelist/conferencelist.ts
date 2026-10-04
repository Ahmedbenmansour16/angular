import { Component, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ConferenceDetails } from '../conference-details/conference-details';

export interface Conference {
  id: number;
  title: string;
  description: string;
  date: string;
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}

@Component({
  selector: 'app-conferencelist',
  imports: [DatePipe, ConferenceDetails],
  templateUrl: './conferencelist.html',
  styleUrl: './conferencelist.css',
})
export class Conferencelist {
  today = new Date().toISOString().split('T')[0];
conferences = signal<Conference[]> ([
{
id: 1,
title: 'Angular 21 Conference',
description: 'Découvrir les nouveautés d’Angular 21.',
date: '2026-10-15',
place: 'Tunis',
maxParticipants: 50,
nbParticipants: 25
},
{
id: 2,
title: 'Signals Workshop',
description: 'Atelier pratique sur les Signals Angular.',
date: '2026-10-30',
place: 'Ariana',
maxParticipants: 20,
nbParticipants: 17
},
{
id: 3,
title: 'Web Conference',
description: 'Conférence sur le développement web moderne.',
date: '2026-11-20',
place: 'Sousse',
maxParticipants: 30,
nbParticipants: 30
},
{id: 4,
title: 'Ancienne Conference',
description: 'Cette conférence est ancienne et ne doit pas être affichée.',
date: '2026-08-15',
place: 'Tunis',
maxParticipants: 40,
nbParticipants: 3
}
]);

  private selectedId = signal<number | null>(null);
  conferenceSelectionnee = computed(() =>
    this.conferences().find(conference => conference.id === this.selectedId()) ?? null
  );

  choisirConference(conference: Conference): void {
    this.selectedId.set(conference.id);
  }

  placesRestantes(conference: Conference): number {
    return Math.max(0, conference.maxParticipants - conference.nbParticipants);
  }

  reserve(conference: Conference): void {
    this.conferences.update(conferences =>
      conferences.map(item =>
        item.id === conference.id && this.placesRestantes(item) > 0
          ? { ...item, nbParticipants: item.nbParticipants + 1 }
          : item
      )
    );
  }
}
