import { Pipe, PipeTransform } from '@angular/core';
import { CountryList } from 'src/app/pin/pin-list/pin-list';

@Pipe({
  name: 'filterCountriesByRegion',
})
export class FilterCountriesByRegionPipe implements PipeTransform {
  transform(items: CountryList[], selectedRegion: string): CountryList[] {
    if (!items || !selectedRegion) {
      return items;
    }

    return items.filter((item) => item.region === selectedRegion);
  }
}
