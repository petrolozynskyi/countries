import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/getCountries/get-countries.service';

interface Holiday {
  date: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="country-page-container">
      <h1>Holidays in {{ countryCode }}</h1>

      <div class="year-selector">
        <button
          *ngFor="let year of years"
          (click)="changeYear(year)"
          [class.active]="year === currentYear">
          {{ year }}
        </button>
      </div>

      <table class="holiday-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let holiday of holidays">
            <td>{{ holiday.date | date }}</td>
            <td>{{ holiday.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
  countryCode: string = '';
  holidays: Holiday[] = [];
  currentYear: number = new Date().getFullYear();
  years: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {
    this.years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.countryCode = params['countryCode'];
      this.fetchHolidays(this.currentYear);
    });
  }

  fetchHolidays(year: number) {
    this.countriesService.getHolidays(year, this.countryCode).subscribe(
      data => {
        this.holidays = data;
      },
      error => console.error('Error fetching holidays:', error)
    );
  }

  changeYear(year: number) {
    this.currentYear = year;
    this.fetchHolidays(year);
  }
}