import { Component, OnInit } from '@angular/core';
import { UxpGlobalsService } from '@uxp/framework';
import { Observable } from 'rxjs';
import { Tile, Section, AppListService } from '../app-list.service';

@Component({
  selector: 'uxg-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  tiles$: Observable<Tile[]>;
  folders: Section[];
  user: string;
  
  constructor(
    private uxpGlobalsService: UxpGlobalsService,
    private appListService: AppListService,
  ) {
    this.user = this.uxpGlobalsService.user.username
  }

  ngOnInit() {
    this.tiles$ = this.appListService.get();
  }
}