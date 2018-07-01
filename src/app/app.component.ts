import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <input type="text" [(ngModel)]="userFilter.name" placeholder="name">
        <ul>
          <li *ngFor="let user of users | filter: userFilter.name| paginate: { itemsPerPage: 10, currentPage: p }">{{ user.name }}</li>
                <pagination-controls (pageChange)="p = $event"></pagination-controls>

  `
})
 
export class AppComponent {
  users: any[] = [
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John4' }, { name: 'Jane' }, { name: 'Mario' },
{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }
];
  userFilter: any = { name: '' };
}
