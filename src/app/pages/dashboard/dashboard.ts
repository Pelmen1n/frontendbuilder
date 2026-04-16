import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface Participant {
  name: string;
}

export interface Meeting {
  id: number;
  title: string;
  date: string;
  duration: string;
  participantCount: number;
  participants: Participant[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
})
export class DashboardPage {
  userName = 'Danil Kolbasenko';
  userEmail = 'example&#64;gmail.com';

  meetings: Meeting[] = [
    {
      id: 1,
      title: 'Разработка ASR-инструмента автопротоколирования собраний',
      date: '3 марта 2026,   10:00',
      duration: '45:56',
      participantCount: 3,
      participants: [
        { name: 'Алексей Смирнов' },
        { name: 'Егор Клок' },
        { name: 'Дмитрий Кузнецов' },
      ],
    },
    {
      id: 2,
      title: 'Разговоры о важном',
      date: '1 марта 2026,   13:56',
      duration: '32:16',
      participantCount: 4,
      participants: [
        { name: 'Алексей Смирнов' },
        { name: 'Дарья Козлова' },
        { name: 'Игорь Морозов' },
        { name: 'Родион Волков' },
      ],
    },
    {
      id: 3,
      title: 'Интервью',
      date: '28 февраля 2026,   18:33',
      duration: '1:22:34',
      participantCount: 2,
      participants: [
        { name: 'Анастасия Петрова' },
        { name: 'Арсений Попов' },
      ],
    },
  ];

  constructor(private router: Router) {}

  onLogout() {
    this.router.navigate(['/auth']);
  }

  onUploadFile() {
    // Placeholder for file upload
  }

  onOpenTranscription(meeting: Meeting) {
    // Placeholder for opening transcription
  }
}
