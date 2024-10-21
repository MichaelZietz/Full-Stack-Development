import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})

export class TripCardComponent implements OnInit{
  @Input('trip') trip: any;

  constructor( private router: Router, 
    private authenticationService: AuthenticationService 
  ) {}

  ngOnInit(): void {
  }

  // This function returns the determined user's state if they are signed in as an authenticated
  // guest
  public isGuestLoggedIn() 
  { 
    return this.authenticationService.isGuestLoggedIn(); 
  }

  // This function returns the determined user's state if they are signed in as an authenticated
  // admin
  public isAdminLoggedIn() 
  { 
    return this.authenticationService.isAdminLoggedIn(); 
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public bookTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['book-trip']);
  }

}