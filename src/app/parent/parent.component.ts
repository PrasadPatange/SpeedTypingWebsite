import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild("Intext") Intext: ElementRef;
  InputText : any = "Click On Start...";
  public timeLeft : number = 30 ;
  setTime : any;
  totalWords: string;
  wordCount: any;
  words: any;
  displayText:any;
  
  constructor() {
    
    // console.log("InputText: - ", this.InputText);
    // console.log("Intext: - ", this.Intext);
    console.log("displayText: - ", this.displayText);
    console.log("displayText Type: - ", typeof this.displayText);
    
  }
  
  ngOnInit(): void {}
  

   DataSend(){

     this.InputText = "Honour to our Army.Your Job is to fight for our country, my job is to love and support you.Some goals are so worthy, it's glorious even to fail.Warriors are not born, they are made in the Indian army.";
   
     
     
    //   ************ Timmer ****************************
    this.setTime = setInterval(()=>{
      if( this.timeLeft > 0 ){
        this.timeLeft--;
      }
    },1000);
    
    
  }
  
  
  wordCounter() {

    this.wordCount = this.Intext ? this.Intext.nativeElement.value.split(/\s/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
    console.log(this.words);
    // console.log("DataSend Intext :-",this.Intext)
    // console.log("DataSend Intext :-",typeof this.Intext)
  }
  
  
  //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
  
  
  
  
public wordColor()
 {
  if(!this.displayText) {
    return this.InputText;
  }
  return this.InputText.replace(new RegExp(this.displayText, "gi"), match => {
    // console.log("displayText : -",this.displayText)
    // console.log("displayText : -",typeof this.displayText)
    
    return '<span class="highlightText">' + match + '</span>';
    
  });
}


   
}
