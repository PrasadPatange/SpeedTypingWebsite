import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }
    for(const text of args) {
        var reText = new RegExp(text, 'gi');
        // value = value.replace(reText, "<mark>" + text + "</mark>");
      
        value = value.replace(reText, "<span class='highlight-search-text'>" + text + "</span>"); 


    }
    return value;
}

}
