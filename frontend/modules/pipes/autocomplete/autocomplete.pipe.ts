import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {

  transform(value: any[], search: string, searchField?: string): any[] {
    if (search) {
      return [...value
        .filter(element =>
          searchField && element[searchField].toString().toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          !searchField && element.toString().toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      ]
    }

    return value
  }

}
