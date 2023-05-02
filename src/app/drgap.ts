import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './drgap.html',
  styleUrls: ['./drgap.css']
})
export class CdkDragDropAxisLockExample {

  items = Array.from({length: 100000}).map((_, i) => `x `);
}
