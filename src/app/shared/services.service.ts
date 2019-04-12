import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Country, CountryDetails, Currency } from './models';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly endpoint = environment.baseURL;

  constructor(private http: HttpClient) {}

  getEuropeRegion(): Observable<Country[]> {
    // console.log(this.httpParams);
    // const params = this.httpParams;
    return this.http.get<Country[]>(this.endpoint);
  }

  getEuropeRegionDetails(capital: string): Observable<CountryDetails[]> {
    return this.http.get<CountryDetails[]>(this.endpoint + '/capital/' + capital);
  }

  getCountriesName(currency: string): Observable<string[]> {
    return this.http.get<string[]>(this.endpoint + '/currency/' + currency + '/?fields=name');
  }

}
