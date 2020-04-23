import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface IHash {
  [details: string]: string;
}

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
  safeURL: SafeResourceUrl;
  public myHash: IHash = {};

  constructor(public appService: AppService, public sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
    this._init();
  }

  private async _init() {
    this.data = await this.appService.getCategories();
    this.clipsList = await this.appService.getClips();

    this.data.forEach(el => {
      this.myHash[el.id] = el.name;
    });

    if (this.clipsList.length > 0) {
      this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.clipsList[0].link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/'));
    }
    
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

  async onSubmit() {
    console.log(this.selectedCategory)
    const postData = {
      categoryid: this.selectedCategory,
      link: this.profileForm.value.link,
      userid: '',
      id: 0
    }
    this.clipsList = await this.appService.addClip(postData);

  }

  onChooseMovie(index: number) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.clipsList[index].link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/'));
  }

}
