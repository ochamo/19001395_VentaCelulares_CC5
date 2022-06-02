import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NitResponse } from '../shared/model/response/nit.response';
import { NitService } from '../shared/service/nit/nit.service';
import { CreateNitDialogComponent } from './views/create-nit-dialog/create-nit-dialog.component';

@Component({
  selector: 'app-nit',
  templateUrl: './nit.component.html',
  styleUrls: ['./nit.component.scss']
})
export class NitComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  listOfNits: NitResponse[] = [];
  constructor(
    private nitService: NitService,
    private dialog: MatDialog
  ) {
    this.getNits();
  }
  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe);
  }

  ngOnInit(): void {
  }

  private getNits() {
    const getNitsSub = this.nitService.getNits().subscribe({
      next: (res) => {
        this.listOfNits = res;
      }
    });
    this.subs.push(getNitsSub);
  }

  openCreateNit(): void {
    const ref = this.dialog.open(CreateNitDialogComponent, {
      width: '500px',
      height: '500px'
    });

    const sub = ref.afterClosed().subscribe({
      next: (res) => {
        this.getNits();
      }
    });

    this.subs.push(sub);

  }


}
