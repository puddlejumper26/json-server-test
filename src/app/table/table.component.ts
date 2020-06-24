import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // list data
  listData = [];
  // edit data
  editData = {};
  // simulate dialog
  modalIsVisible: boolean = false;
  // dialog
  confirmModal: NzModalRef;

  constructor(private http: HttpClient, private modal: NzModalService) {}

  ngOnInit(){
    this.getListData();
  }

  //obtain data from localhost:3000/users, and give it to listData
  getListData() {
    this.http
      .get('http://localhost:3000/users')
      .subscribe((res: Array<object>) => {
        this.listData = res;
      });
  }

  // add
  addPeople() {
    this.editData = {};
    this.modalIsVisible = true;
  }

  // edit
  edit(data: Object) {
    this.editData = data;
    this.modalIsVisible = true;
  }

  //delete
  delete(data: Object) {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Info',
      nzContent: 'Confirm to delete',
      nzOkText: 'Confirm',
      nzCancelText: 'Cancel',
      nzOnOk: () => {
        this.http
          .delete('http://localhost:3000/users/' + data['id'])
          .subscribe((res) => {
            //after delete the data inside localhost:3000/users/, then ask to run getListData() again to obtain the updated data
            this.getListData();
          });
      },
    });
  }

  // new add
  clickEvent(){
    this.getListData();
  }
}
