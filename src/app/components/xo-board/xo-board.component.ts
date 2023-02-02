import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-xo-board',
  templateUrl: './xo-board.component.html',
  styleUrls: ['./xo-board.component.css']
})
export class XoBoardComponent implements OnInit {
  markTable :any; 
  emtyTable :any;
  currMark :any;
  status :any;
  disableButton: boolean=false;
  count = 0;

  @Output() winEvent = new EventEmitter<any>();
  constructor(){
    
  }
  ngOnInit(): void {
      this.markTable=[['','',''],['','',''],['','','']];
      this.currMark = 'X';
  }
    addMark = (x:number,y:number,e: any) => {
      this.count++;
      this.markTable[x][y] = this.currMark;
      console.log(this.markTable,this.emtyTable);

      e.target.disabled = true;
      if(this.checkWin()==true){
        this.winEvent.emit({winner:this.currMark})
      }
      else if(this.count==9){
        this.winEvent.emit({winner:'draw'})
      }
      else{
        if(this.currMark=='X')
          this.currMark = 'O'
        else
          this.currMark = 'X'
      }


  }

  checkWin():boolean {
    let m = this.markTable
    if(m[0][0]==m[0][1]&&m[0][1]==m[0][2]&&m[0][0]!='')
      return true;
    else if(m[1][0]==m[1][1]&&m[1][1]==m[1][2]&&m[1][0]!='')
      return true;
    else if(m[2][0]==m[2][1]&&m[2][1]==m[2][2]&&m[2][0]!='')
      return true;

    else if(m[0][0]==m[1][0]&&m[1][0]==m[2][0]&&m[0][0]!='')
      return true;
    else if(m[0][1]==m[1][1]&&m[1][1]==m[2][1]&&m[0][1]!='')
      return true;
    else if(m[0][2]==m[1][2]&&m[1][2]==m[2][2]&&m[0][2]!='')
      return true;

    else if(m[0][0]==m[1][1]&&m[1][1]==m[2][2]&&m[0][0]!='')
      return true;
    else if(m[0][2]==m[1][1]&&m[1][1]==m[2][0]&&m[0][2]!='')
      return true;
    else
      return false;
  }


}
