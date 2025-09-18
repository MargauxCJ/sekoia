import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyColumns',
  standalone: true
})
export class EmptyColumnsPipe implements PipeTransform {
  transform(usedColumns: number, totalColumns: number): number[] {
    const emptyCount = totalColumns - usedColumns;
    return emptyCount > 0 ? Array(emptyCount).fill(0) : [];
  }
}
