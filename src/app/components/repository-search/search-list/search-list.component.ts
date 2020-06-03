import { ChangeDetectionStrategy,Component, Input } from '@angular/core';

import { Repository } from '../../../models/repository';
// import {CollectionViewer, DataSource} from '@angular/cdk/collections';
// import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'repository-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class SearchListComponent {
  @Input() searchSubmitted: boolean;
  @Input() repositoryList: Repository[];
}