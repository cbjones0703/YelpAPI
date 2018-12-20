import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-yelp-search',
  templateUrl: './yelp-search.component.html',
  styleUrls: ['./yelp-search.component.scss']
})
export class YelpSearchComponent implements OnInit {

  useBtn = false;
  searchYelp: FormGroup;
  usersearches = [
    
  ]

  userInput = [];
  public _yelps: any[] = []

  constructor(private _dbService: DatabaseService, private _fb: FormBuilder) { 
    setTimeout(() => {
      this.useBtn = true
    }, 800)
  };

  ngOnInit() {
    this.searchYelp = this._fb.group({
      usersearch: new FormControl(),
      userInput: new FormControl(),
    })
  };

  onFetch(): void {
    this._dbService.getData(this.searchYelp.controls['usersearch'].value,
    this.searchYelp.controls['userInput'].value)
    .subscribe((res: any) => (this._yelps = res))
    console.log(this._yelps);
  }

}
