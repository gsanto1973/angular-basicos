import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  // Debe cambiar el emitir un núero por un string, ya que los uuid son string y se borrará por ese id
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  //public onDelete: EventEmitter<number> = new EventEmitter();

  //onDeleteCharacter(index: number): void {
  onDeleteCharacter(id?: string): void {
    //console.log({ index });
    if (!id) return;
    this.onDelete.emit(id);
  }
}
