import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  //region fields

  /**
   * The counter.
   * * Can't be less than 0
   * * Can't be larger than 10^15
   */
  protected counter = 0;

  //endregion

  //region methods

  ngOnInit() {
    this.getCounter();
  }

  /** Getting the counter current value. */
  protected getCounter() {
    // TODO: retrieving the counter value from the API
  }

  /**
   * Updating the counter value.
   * @param value The value to add to the counter.
   */
  protected updateCounter(value: number) {
    this.counter = Math.min(Math.max(0, this.counter + value), Math.pow(10, 15)); // TODO: updating the counter in the database (send request on button release!)
    this.getCounter();
  }

  //endregion

}
