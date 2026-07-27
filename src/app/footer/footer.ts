import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {currentYear} from '../tools';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  year = currentYear();
}
