import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, 
  Validators } from '@angular/forms';

import 'rxjs/Rx';

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
      this.searches.push(term);
    });
  }

}
