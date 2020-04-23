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
  });

  keyword = 'name';
  public data;
  selectedCategory: number;
  public clipsList;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    this.data = await this.appService.getCategories();
    console.log(this.data);
    this.clipsList = await this.appService.getClips();
  }

  selectEvent(item) {
    // do something with selected item
    this.selectedCategory = item.id;
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
    const postData = {
      categoryid: this.selectedCategory,
      link: this.profileForm.value.link,
      userid: '',
      id: 0
    }
    this.clipsList = this.appService.addClip(postData);

  }

}
