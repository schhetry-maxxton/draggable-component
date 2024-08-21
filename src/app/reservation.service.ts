import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoom } from './models/Iroom';
import { IRoomAvailability } from './models/IRoomAvailability';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private roomsUrl = 'https://jadhavsudhit.github.io/Booking-module/rooms.json';
  private staysUrl = 'https://jadhavsudhit.github.io/Booking-module/stays.json';

  constructor(private http: HttpClient) { }

  getRoomsAndStays(): Observable<{ rooms: IRoom[], stays: IRoomAvailability[] }> {
    return forkJoin({
      rooms: this.http.get<IRoom[]>(this.roomsUrl),
      stays: this.http.get<IRoomAvailability[]>(this.staysUrl)
    });
  }


  
}
