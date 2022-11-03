import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password_length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  checkButtonState() : boolean
  {
    if (this.password_length > 0 && ( this.includeLetters || this.includeNumbers || this.includeSymbols))
    {
      return false;
    }
    else 
    {
      return true;
    }
  }
  onChangeUseLetters()
  {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers()
  {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols()
  {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event)
  {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    if (!isNaN(parsedValue)) { // check if the value is a number
      this.password_length = parsedValue;
    }
  }

  onButtonClick() {
      const numbers = '1234567890';
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const symbols = '~!@#$%^&*()_+{}[]:;|/>.,<';

      let validChars = '';
      if (this.includeLetters) {
        validChars += letters;
      }
      if (this.includeNumbers) {
        validChars += numbers;
      }
      if (this.includeSymbols) {
        validChars += symbols;
      }

      let generatedPassword = '';

      for ( let i = 0 ; i < this.password_length && validChars.length > 0; i++)
      {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
      }
      this.password = generatedPassword;
    // console.log(
    //   `About to generate a password with the following:
    //   Includes Letters: ${this.includeLetters}
    //   Includes Numbers: ${this.includeNumbers}
    //   Includes Symbols: ${this.includeSymbols}
      
    // `);
    
  }
}
