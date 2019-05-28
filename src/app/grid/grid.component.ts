import { Component, OnInit, Input } from '@angular/core';

export interface Tile {
	col: number;
	row: number;
	val: string;
}

@Component({
  selector: 'grid',
  styleUrls: ['grid.component.css'],
  templateUrl: 'grid.component.html',
})
export class GridComponent implements OnInit {
	tiles: Tile[] = [
		{col: 1, row: 1, val: '1'},
		{col: 1, row: 1, val: '2'},
		{col: 1, row: 1, val: '3'},
		{col: 1, row: 1, val: '4'},
		{col: 1, row: 1, val: '5'},
		{col: 1, row: 1, val: '6'},
		{col: 1, row: 1, val: '7'},
		{col: 1, row: 1, val: '8'},
		{col: 1, row: 1, val: 'X'}

		];
	// tiles2: Tile = [
	// 	{col:1, row:1, val:'2'}] 

	public wincheck(tiles){
		let win =  false;
		var count = 0;
		for (var i = 0; i < 8; i++){
			if (tiles[i].val == i+1){
				count ++;
			}
		}
		if (count == 8){
			win =  true;
		}
		return win;
	}

	public status = this.wincheck(this.tiles);

	updateList(col: number, row: number, val: string){
		
	}

  constructor() { 
  }

  ngOnInit() {
  }

}
