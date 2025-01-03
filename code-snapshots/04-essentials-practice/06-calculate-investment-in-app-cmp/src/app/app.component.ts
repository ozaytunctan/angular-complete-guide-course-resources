import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {calculateInvestmentResults, Investment, InvestmentResult} from "../investment-results";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles:`

    .investment-results {
      padding: 1rem;
      max-width: 30rem;
      margin: 2rem auto;
      border-radius: 4px;

      list-style: none;
    }

    .investment-results li {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: space-evenly;
    }



  `,
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {

  investmentResults: InvestmentResult[] = [];

  calculate(data: Investment) {
    this.investmentResults = calculateInvestmentResults(data);
  }

}
