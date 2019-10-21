import { NestedTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { DataServiceService } from "../../services/data-service.service";
import { Folder } from "../../model/folder";

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// const TREE_DATA: FoodNode[] = [
//   {
//     name: "Fruit",
//     children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
//   },
//   {
//     name: "Vegetables",
//     children: [
//       {
//         name: "Green",
//         children: [{ name: "Broccoli" }, { name: "Brussel sprouts" }]
//       },
//       {
//         name: "Orange",
//         children: [{ name: "Pumpkins" }, { name: "Carrots" }]
//       }
//     ]
//   }
// ];

@Component({
  selector: "tree-folder",
  templateUrl: "./tree-folder.component.html",
  styleUrls: ["./tree-folder.component.css"]
})
export class TreeFolderComponent implements OnInit {
  treeControl = new NestedTreeControl<Folder>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Folder>();

  constructor(private dataService: DataServiceService) {
    // this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: Folder) =>
    !!node.children && node.children.length > 0;

  ngOnInit() {
    this.getFolders();
  }

  getFolders(): void {
    this.dataService.getAllFolders().subscribe(folders => {
      this.dataSource.data = folders;
    });
  }
}
