import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-models-page',
  templateUrl: './models-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsPageComponent { }
