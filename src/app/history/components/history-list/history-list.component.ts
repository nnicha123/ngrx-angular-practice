import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { History } from '../../definitions/module.definitions';
import { ModuleFacade } from '../../store/module.facade';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  histories$:Observable<History[]>;

  constructor(private moduleFacade:ModuleFacade) {
    this.histories$ = this.moduleFacade.histories$;
  }

  ngOnInit(): void {
    this.histories$.pipe(take(1)).subscribe(
      (histories) => {
        if(histories.length === 0){
          this.moduleFacade.loadHistories();
        }
      }
    )
  }

}
