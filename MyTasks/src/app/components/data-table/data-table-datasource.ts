import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Tasks } from 'src/app/models/tasks.model';

export class DataTableDataSource extends DataSource<Tasks> {
  data: Tasks[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(data) {
    super();
    this.data = data
  }

  connect(): Observable<Tasks[]> {

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}

  private getPagedData(data: Tasks[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: Tasks[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'data' : return compare(a.data.toString(), b.data.toString(), isAsc);
        case 'isFinished' : return compare(a.isFinished, b.isFinished, isAsc);
        case 'importance' : return compare(a.importance, b.importance, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
