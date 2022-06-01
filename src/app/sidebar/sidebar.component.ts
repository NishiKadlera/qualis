
import {Component} from '@angular/core';

/** @title Basic sidenav */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
isShown1: boolean = false ; // hidden by default
toggleShow1() {

  this.isShown1 = ! this.isShown1;
  
  }
}

// import {FlatTreeControl} from '@angular/cdk/tree';
// import {Component} from '@angular/core';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

// /**
//  * Food data with nested structure.
//  * Each node has a name and an optional list of children.
//  */
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   // {
//   //   name: 'Reports',
//   //   children: [{name: 'Standard'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   // },
//   {
//     name: 'Reports',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];

// /** Flat node with expandable and level information */
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

// /**
//  * @title Tree with flat nodes
//  */
// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent {
//   private _transformer = (node: FoodNode, level: number) => {
//     return {
//       expandable: !!node.children && node.children.length > 0,
//       name: node.name,
//       level: level,
//     };
//   };

//   treeControl = new FlatTreeControl<ExampleFlatNode>(
//     node => node.level,
//     node => node.expandable,
//   );

//   treeFlattener = new MatTreeFlattener(
//     this._transformer,
//     node => node.level,
//     node => node.expandable,
//     node => node.children,
//   );

//   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

//   constructor() {
//     this.dataSource.data = TREE_DATA;
//   }

//   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
// }



