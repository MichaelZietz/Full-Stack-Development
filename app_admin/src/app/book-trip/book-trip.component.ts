import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-book-trip',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './book-trip.component.html',
  styleUrl: './book-trip.component.css'
})

// This class defines the Book Trip page and it's funcitonality
export class BookTripComponent {
  public bookForm!: FormGroup;
  public formError: string = '';
  trip!: Trip;
  submitted = false;
  message: string = '';

  // Creates constructor variables for FormBuilder, Router, and TripDataService classes
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
    // Retrieve stashed trip ID  and alerts if not found  
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, issue locating stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    // Defines the bookForm's required variables
    this.bookForm = this.formBuilder.group({
      code: [tripCode, Validators.required],
      current_availability: [0, Validators.required],
      max_availability: [0, Validators.required]
    })
    
    // Populates the live database data into form
    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;   
          this.bookForm.patchValue(value[0]);
          if (!value) {
            this.message = 'No Trip Retrieved!';
          }
          else {
            this.message = 'Trip: ' + tripCode + ' retrieved';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
  
  // This function occurs when Book-trip submit button is pressed
  // It ensures that the data is acceptable
  public onSubmit() {
    this.formError = '';
    if (!this.bookForm.get('max_availability') || !this.bookForm.get('current_availability')) {
      this.formError = 'All fields are required, please try again';
      if (this.bookForm.value.max_availability < this.bookForm.value.current_availability) {
        this.formError = 'Current Availability cannot be greater than Maximum Availability, please try again';
      }
      this.router.navigate(['/book-trip']);
    } else {
      this.doSubmit();
    }
  }

  // This function populates the new data into the database after being approved by onSubmit
  // Only call doSubmit after onSubmit has been called
  public doSubmit() {
    this.submitted = true;
    if (this.bookForm.valid) {
      this.tripDataService.updateTrip(this.bookForm.value)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        })
    }
  }
  
  // get the form short name to access the form fields 
  get f() { return this.bookForm.controls; }
}
