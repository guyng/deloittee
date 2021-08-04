import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, startWith, take, tap } from 'rxjs/operators';
import { cities } from 'src/common/constants/cities.constants';
import { City } from 'src/common/models/city.model';
import { CityWeather } from './models/city-weather.model';
import { loadCityWeather } from './store/weather.actions';
import { WeatherState } from './store/weather.reducers';
import { getCitiesWeather, getWeatherLoading } from './store/weather.selectors';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  myControl = new FormControl();
  public allCities = cities;
  public cities = cities;
  filteredCities: City[] = [];
  filteredCities$?: Observable<City[]>;
  cityWeathers?: CityWeather[] = [];
  selectedCityName: string = '';
  loading$: Observable<boolean>;
  form: FormGroup;

  constructor(
    private weatherStore: Store<WeatherState>,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      selectedOption: new FormControl(),
    });
    this.weatherStore.select(getCitiesWeather).subscribe((cw) => {
      
      if (cw) {
        this.cityWeathers = cw;
        
        this.form.get('selectedOption')?.setValue('');

        let filteredCities = this.allCities.filter(
          (city) => !this.cityWeathers?.find((cw) => city.name === cw.name)
        );
        this.filteredCities = filteredCities;

        // setTimeout(() => {
        //   this.cities = JSON.parse(JSON.stringify(tmp));
        // });
      }

      this.filteredCities$ = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value: any) => this._filter(value))
      );
    });

    this.loading$ = this.weatherStore.select(getWeatherLoading);

    // this.filteredCities = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value: any) => this._filter(value))
    // );
  }

  ngOnInit(): void {}

  private _filter(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.filteredCities.filter((city) =>
      city.name?.toLowerCase().includes(filterValue)
    );
  }

  loadCityWeather() {
    if (
      !this.selectedCityName ||
      this.cityWeathers?.find((cw) => cw.name === this.selectedCityName)
    ) {
      return;
    }
    this.weatherStore.dispatch(
      loadCityWeather({ city: this.selectedCityName })
    );
  }
}
