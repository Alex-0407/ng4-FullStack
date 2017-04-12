import { Component,Inject,ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent { 
    
   constructor() { 
        
   }

   version = 'v1.0.0';

   name = 'ng4-FullStack';

   year = '2017';
}
