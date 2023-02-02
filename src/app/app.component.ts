import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xo-app';
  status = '';
  viewBoard = true;
  xscore = 0;
  oscore = 0;
  onWin(e:any){
    if(e.winner == 'draw')
      this.status = "DRAW"
    else{
      this.status = e.winner + 'WINS!'
      if(e.winner == 'X')
        this.xscore++;
      else if(e.winner == 'O')
        this.oscore++;
    }
    this.viewBoard = false;
    setTimeout(() => {
      this.viewBoard = true;
    }, 2000 );
  }
}
