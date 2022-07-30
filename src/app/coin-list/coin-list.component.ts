import { Component, OnInit } from '@angular/core';
import { CoinApiService } from '../coin-api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];

  constructor(private api: CoinApiService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }

  getBannerData() {
    this.api.getTrendingCurrency("LKR")
    .subscribe(res => {
      console.log(res);
      this.bannerData = res;
    }) 
  }

  getAllData() {
    this.api.getCurrency("LKR")
    .subscribe(res => {
      console.log(res);
    }) 
  }

}
