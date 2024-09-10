import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CountriesService } from '../../services/getCountries/get-countries.service';

interface Country {
  countryCode: string;
  name: string;
}

interface Holiday {
  date: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="home-container"> <img src="assets/2ba6fbbb9c6f8a20d4f4d54c3e9308ae.png" alt="Country Holidays Logo" />
      <h1>Country Holidays</h1>

      <div class="random-countries">
        <h2>Random Countries and Their Next Holiday</h2>
        <div *ngFor="let item of randomCountries" class="random-country-item">
          <h3>{{ item.country.name }}</h3>
          <p>Next Holiday: {{ item.nextHoliday.name }}</p>
          <p>Date: {{ item.nextHoliday.date | date }}</p>
        </div>
      </div>

      <div class="search-container">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (input)="filterCountries()"
          placeholder="Search countries..." />
        <ul class="country-list">
          <li *ngFor="let country of filteredCountries">
            <a [routerLink]="['/country', country.countryCode]">{{
              country.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  searchTerm: string = '';
  randomCountries: { country: Country; nextHoliday: Holiday }[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.fetchCountries();
  }

  fetchCountries() {
    this.countriesService.getCountries().subscribe(
      data => {
        this.countries = data;
        this.filteredCountries = data;
        this.getRandomCountries();
      },
      error => console.error('Error fetching countries:', error)
    );
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getRandomCountries() {
    const shuffled = this.countries.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    selected.forEach(country => {
      this.fetchNextHoliday(country);
    });
  }

  fetchNextHoliday(country: Country) {
    this.countriesService.getNextHolidays(country.countryCode).subscribe(
      holidays => {
        if (holidays.length > 0) {
          this.randomCountries.push({ country, nextHoliday: holidays[0] });
        }
      },
      error => console.error(`Error fetching holidays for ${country.name}:`, error)
    );
  }
}