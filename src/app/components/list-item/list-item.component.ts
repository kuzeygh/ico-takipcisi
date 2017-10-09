import { Component, OnInit } from '@angular/core';
import { IcoListService } from '../../services/ico-list.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Ico } from '../../models/ico.model';

@Component({
  selector: 'ico-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  public icos: Ico[];
  public icoSubscription: Subscription;

  constructor(private icoService: IcoListService) { }

  public ngOnInit() {
    this.loadIcos();
  }

  private loadIcos(): void {
    const icoList: Observable<Ico[]> = this.icoService.getIcos();

    const ico$: Observable<Ico[]> = this.icoService.getIcos();
    this.icoSubscription = ico$.subscribe(
      (icos: Ico[]) => this.icos = icos
    );
  }

  public ngOnDestroy() {
    if (this.icoSubscription) {
      this.icoSubscription.unsubscribe();
    }
  }
}