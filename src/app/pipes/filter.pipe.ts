import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false,
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selectedStatus: string): any[] {
    if (selectedStatus.length == 0) return value;
    else {
      return value.filter((serveur) => serveur['status'] == selectedStatus);
    }
    //   let newTabServers = [];
    //   for (const serveur of value) {
    //     if (serveur['status'] == selectedStatus) newTabServers.push(serveur);
    //   }
    //   return newTabServers;
    // }
  }
}
