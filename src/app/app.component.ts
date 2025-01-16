import { Component } from '@angular/core';
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
export class AppComponent {

  //region fields

  /**
   * The counter.
   * * Can't be less than 0
   * * Can't be larger than 10^15
   */
  protected counter = 0;

  //endregion

  //region methods

  /**
   * Updating the counter value, so it can't neither be less than 0 nor larger than 10^15.
   * @param value The value to add to the counter.
   */
  protected updateCounter(value: number) {
    this.counter = Math.min(Math.max(this.counter + value, 0), Math.pow(10, 15));
  }

  //endregion

}
