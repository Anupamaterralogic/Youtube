import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

export interface Category {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  Categories: Category[] = [
    { name: 'All' },
    { name: 'Live' },
    { name: 'Gaming' },
    { name: 'Music' },
    { name: 'Bhavya Gandi' },
    { name: 'Tamil Cinema' },
    { name: 'T-series' },
    { name: 'Yash' },
    { name: 'Trailers' },
    { name: 'Cricket' },
    { name: 'Gadgets' },
    { name: 'Trains' },
    { name: 'Love Songs' },
    { name: 'Eating' },
    { name: 'Tourist Places' },
    { name: 'Conversation' },
    { name: 'Cars' },
    { name: 'Electronic Music' },
    { name: 'Recently Uploaded' },
  ];
  // hidden = false;

  // toggleBadgeVisibility() {
  //   this.hidden = !this.hidden;
  // }
  showFiller = true;

}
