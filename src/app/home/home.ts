import { ContentContainer } from '@/components/content-container/content-container';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ContentContainer],
  templateUrl: './home.html',
})
export class Home {
  title = 'Angular Portfolio';
}
