import { Component, OnInit } from '@angular/core';
import { Vtuber } from '../models/vtuber.model';
import { VtuberService } from '../vtuber.service';

@Component({
  selector: 'app-vtubers-list',
  templateUrl: './vtubers-list.page.html',
  styleUrls: ['./vtubers-list.page.scss'],
})
export class VtubersListPage implements OnInit {
  vtubers!: Array<Vtuber>;

  constructor(
    private Vtuber: VtuberService
  ) { }

  ngOnInit() {
    this.Vtuber.getAll().subscribe((data: any) => {
      this.vtubers = data;
    });
  }

}
