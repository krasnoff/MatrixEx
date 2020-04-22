import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['../sign-up/sign-up.component.scss']
})
export class YoutubeListComponent implements OnInit {
  profileForm = new FormGroup({
    link: new FormControl(''),
    category: new FormControl(''),
  });

  keyword = 'name';
  public data;
  selectedCategory = {};

  constructor(public appService: AppService) { }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    this.data = await this.appService.getCategories();
    console.log(this.data);
  }

  selectEvent(item) {
    // do something with selected item
    this.selectedCategory = item;
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  onSubmit() {
    console.log(this.selectedCategory)
  }

}
