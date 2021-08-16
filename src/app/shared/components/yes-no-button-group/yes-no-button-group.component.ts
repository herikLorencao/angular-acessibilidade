import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  // Devido ao nome da variavel com prefixo Change é possível fazer two-way-data-binding
  // em value
  @Output() public valueChange = new EventEmitter<string>();
  options = YesNoGroupOptions;

  constructor() {}

  ngOnInit(): void {}

  activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoGroupOptions {
  YES = 'yes',
  NO = 'no',
}
