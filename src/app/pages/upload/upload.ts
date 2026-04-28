import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.html',
})
export class UploadPage {          // ← Важно: именно UploadPage

  file: File | null = null;
  meetingTitle = '';
  meetingDescription = '';

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer?.files[0];
    if (droppedFile) {
      this.file = droppedFile;
    }
  }

  onSubmit() {
    if (!this.file || !this.meetingTitle.trim()) {
      alert('Пожалуйста, выберите файл и укажите название встречи');
      return;
    }

    console.log('Файл:', this.file);
    console.log('Название:', this.meetingTitle);
    console.log('Описание:', this.meetingDescription);

    // TODO: отправка на бэкенд
    // this.router.navigate(['/dashboard']);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}