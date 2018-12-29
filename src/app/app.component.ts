import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  showNav = true;

  ngOnInit() {
  var status = localStorage.getItem('loginCheck');
   if (status == '1'){
     this.showNav = true;
   }
   else {
     this.showNav = true;
   }
  }
  logOut(){
    localStorage.setItem("loginCheck", "0");
    // this.showNav = false;
  }
}
