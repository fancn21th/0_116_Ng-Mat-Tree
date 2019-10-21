import { NestedTreeControl } from "@angular/cdk/tree";
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { Folder } from "../../model/folder";

@Component({
  selector: "tree-folder",
  templateUrl: "./tree-folder.component.html",
  styleUrls: ["./tree-folder.component.css"]
})
export class TreeFolderComponent implements OnInit, OnChanges {
  treeControl = new NestedTreeControl<Folder>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Folder>();

  @Input() folders: Folder[];

  hasChild = (_: number, node: Folder) =>
    !!node.children && node.children.length > 0;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const { folders } = changes;
    this.dataSource.data = folders.currentValue;
  }
}
