import {Pipe, PipeTransform} from '@angular/core';

/**
 * @author ozay.tunctan
 */
@Pipe({
    name: 'sort',
    standalone: true,
    pure: false // Objeler referansları aynı herhangi bir değişiklik yapmaz. false ise objede herhangi bir değişiklik olursa yeniden render eder.
})
export class SortPipe implements PipeTransform {

    transform(value: any[], sortBy: string | null = null, direction: 'asc' | 'desc' = 'asc'): any[] {
        if (!Array.isArray(value) || value.length === 0) {
            return value;
        }

        const sorted = [...value]; // Veriyi kopyala orijinal veri değiştirme
        return sortBy ? this.sortByKey(sorted, sortBy, direction) : this.sortArray(sorted, direction);
    }

    private sortByKey(array: any[], key: string, direction: 'asc' | 'desc'): any[] {
        return array.sort((a, b) => this.compare(a[key], b[key], direction));
    }

    private sortArray(array: any[], direction: 'asc' | 'desc'): any[] {
        return array.sort((a, b) => this.compare(a, b, direction));
    }

    private compare(a: any, b: any, direction: 'asc' | 'desc'): number {
        if (a === b) return 0;

        // Sıralamayı küçükten büyüğe (asc) veya büyükten küçüğe (desc) yap
        const comparison = a > b ? 1 : -1;
        return direction === 'asc' ? comparison : -comparison;
    }
}
