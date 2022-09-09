import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { DEFAULT_BASE_THEME, DEFAULT_SIDEBAR_COLLAPSED } from '@shared/types/general.types';
import { storage } from '@shared/utils/storage/storage.utils';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppTheme } from './theme.config';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  //#region attributes
  currentTheme$ = new BehaviorSubject<AppTheme | null>(this._storedTheme);

  private _destroy$ = new Subject();
  //#endregion

  //#region accessors
  public get currentTheme(): AppTheme | null {
    return this.currentTheme$.getValue();
  }

  private get _storedTheme(): AppTheme | null {
    return storage.getItem('App/theme');
  }

  private set _storedTheme(theme: AppTheme | null) {
    storage.setItem('App/theme', theme as AppTheme);
  }
  //#endregion

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  init(): void {
    this.setTheme(this._storedTheme || DEFAULT_BASE_THEME);
    storage.setItem(
      'App/sidebarCollapsed',
      storage.getItem('App/sidebarCollapsed') || DEFAULT_SIDEBAR_COLLAPSED
    );
  }

  /**
   * Manually changes theme in LocalStorage & HTML body
   *
   * @param theme new theme
   */
  setTheme(theme: AppTheme): void {
    this._clearThemes();
    this._storedTheme = theme;
    this.currentTheme$.next(theme);
    this._document.body.classList.add(theme);
  }

  /**
   * Clears all themes in ThemeList enum from the HTML element
   *
   */
  private _clearThemes(): void {
    this._document.body.classList.remove('light', 'dark');
  }
}
