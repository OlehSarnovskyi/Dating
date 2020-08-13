import { Pipe, PipeTransform } from '@angular/core';


const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase()

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0)
}

@Pipe({
  name: 'autocompleteGroup'
})
export class AutocompleteGroupPipe implements PipeTransform {

  transform(value: any[], search: string, label: string, searchField: string): any[] {
    if (search) {
      return value
        .map(element => ({[label]: element[label], [searchField]: _filter(element[searchField], search)}))
        .filter(element => element[searchField].length > 0)
    }

    return value
  }

}
