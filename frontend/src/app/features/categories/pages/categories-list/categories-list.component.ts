import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CategoryCardComponent} from '../../components/category-card/category-card.component';
import {InputComponent} from '../../../../shared/ui/search/input.component';
import {SortButtonsComponent, SortOption} from '../../../../shared/ui/sort-buttons/sort-buttons.component';
import {FormsModule} from '@angular/forms';
import {CategoriesStore} from '../../stores/categories.store';
import {SelectComponent} from '../../../../shared/ui/select/select.component';
import {Category} from '../../models/category.model';
import {CommonModule} from '@angular/common';
import {SliceToRowsPipe} from '../../../../shared/pipes/slice-to-rows.pipe';
import {LoadingComponent} from '../../../../shared/ui/loading/loading.component';
import {FooterComponent} from '../../../../core/components/footer/footer.component';
import {HeaderComponent} from '../../../../core/components/header/header.component';
import {Subject, takeUntil} from 'rxjs';
import {EmptyColumnsPipe} from '../../../../shared/pipes/empty-column.pipe';

@Component({
  selector: 'app-categories-list',
  imports: [
    CategoryCardComponent,
    InputComponent,
    SortButtonsComponent,
    FormsModule,
    SelectComponent,
    CommonModule,
    SliceToRowsPipe,
    LoadingComponent,
    FooterComponent,
    HeaderComponent,
    EmptyColumnsPipe,
  ],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent implements OnInit {
  public categoriesStore: CategoriesStore = inject(CategoriesStore);

  public listColumnNumber = 2;

  public sortOptions: SortOption[] = [
    { label: 'Groupe de catégorie', value: 'group', icon: 'icon-group'},
    { label: 'Ordre alphabétique', value: 'alphabet', icon: 'icon-alphabet'},
  ];

  public ngOnInit(): void {
    this.categoriesStore.init();
  }

  public getSelectedCategory(value: Category): void {
    this.categoriesStore.setCategory(value);
  }

  public displayCategory(selectedCategory: Category): void {
    console.log('category selected : ', selectedCategory);
  }
}
