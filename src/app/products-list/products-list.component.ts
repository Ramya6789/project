import { Component, OnInit } from '@angular/core';
import { MainService } from '../CommonService/main.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  list: any = [];
  data: any;
  product: string;
  catarray: [];
subCatArray:[];
  constructor(private services: MainService, private router: Router) {
   // var x = get id from home
   //call product det by id api
   }

  ngOnInit() {
    this.getCatDetails();
    this.getDetails();
  }
  goToProductslist(){
    this.router.navigate(['/productslist'])
  }
  

  getCatDetails(){
    this.services.getCategoryDetails().subscribe((data)=>{
      // debugger
      console.log('Data requested ... ',data["message"]);
      this.catarray = data["message"];
      console.log(this.catarray);
      
      // console.log(this.subCatArray);
    })
  }

  getDetails() {
    this.services
      .getAllProducts()
      .subscribe((data) => {

        console.log('Data requested ... ', data["message"]);
        this.list = data["message"];


      });

  }
  goToPRodDet(prod) {
    console.log(prod);
    //nav - details + pass prod
  }

  goToProdDetais(prod) {
    console.log(prod)
    this.product = JSON.stringify(prod);
    console.log(this.product)
    this.router.navigate(['./productdetails', { product: this.product }], { skipLocationChange: true })
  }
}
