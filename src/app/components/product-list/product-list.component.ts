import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // filteredProducts: Product[] = [];
  // categories: string[] = [];
  // brands: string[] = [];
  // selectedCategory: string = '';
  // selectedBrand: string = '';
  // selectedPrice: string = '';
  // searchTerm: string = '';
  // itemsPerPage: number = 5;
  // currentPage: number = 1;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  //   this.http.get<any>('https://dummyjson.com/products')
  //     .subscribe(data => {
  //       this.products = data.products;
  //     }, error => {
  //       console.error('Error fetching data:', error);
  //     });
    this.apiService.getProducts().subscribe((data:any) => {
      this.products = data.products;
      console.log(data)
    // this.filteredProducts = data;
    // this.categories = [...new Set(data.map((product) => product.category))];
    // this.brands = [...new Set(data.map((product) => product.brand))];
    // this.filterProducts();
    },
    error => {
      console.error('Error fetching data:', error);
    });
  }

  // filterProducts() {
  //   let filteredProducts = this.products;

  //   if (this.selectedCategory) {
  //     filteredProducts = filteredProducts.filter(
  //       (product) => product.category === this.selectedCategory
  //     );
  //   }

  //   if (this.selectedBrand) {
  //     filteredProducts = filteredProducts.filter(
  //       (product) => product.brand === this.selectedBrand
  //     );
  //   }

  //   if (this.selectedPrice === 'low') {
  //     filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  //   } else if (this.selectedPrice === 'high') {
  //     filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  //   }

  //   if (this.searchTerm) {
  //     filteredProducts = filteredProducts.filter(
  //       (product) =>
  //         product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //         product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //   }

  //   this.filteredProducts = filteredProducts;
  //   this.currentPage = 1;
  // }

  // get paginatedProducts(): Product[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.filteredProducts.slice(startIndex, endIndex);
  // }

  // get totalPages(): number {
  //   return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  // }

  // prevPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }
}

