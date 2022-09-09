import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  HeroBookOpen,
  HeroCalendar,
  HeroChatAlt,
  HeroClipboardCheck,
  HeroCloudUpload,
  HeroHome,
  HeroQuestionMarkCircle,
} from '@ng-icons/heroicons/outline';
import {
  HeroBookOpenSolid,
  HeroCalendarSolid,
  HeroChatAltSolid,
  HeroClipboardCheckSolid,
  HeroCloudUploadSolid,
  HeroHomeSolid,
  HeroQuestionMarkCircleSolid,
} from '@ng-icons/heroicons/solid';
import { MatCameraIndoor } from '@ng-icons/material-icons/baseline';
import { MatCameraIndoorOutline } from '@ng-icons/material-icons/outline';
import { storage } from '@shared/utils/storage/storage.utils';

export interface INavItem {
  label: string;
  path: string;
  icon: string;
  iconActive: string;
}

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      HeroHome,
      HeroHomeSolid,
      HeroBookOpen,
      HeroBookOpenSolid,
      HeroClipboardCheck,
      HeroClipboardCheckSolid,
      HeroCalendar,
      HeroCalendarSolid,
      MatCameraIndoorOutline,
      MatCameraIndoor,
      HeroChatAlt,
      HeroChatAltSolid,
      HeroCloudUpload,
      HeroCloudUploadSolid,
      HeroQuestionMarkCircle,
      HeroQuestionMarkCircleSolid,
    }),
  ],
})
export class NavItemComponent implements OnInit {
  @Input() navItem: INavItem = {
    label: '',
    path: '',
    icon: '',
    iconActive: '',
  };
  @Input() isFullItem: boolean;
  actualIcon = this.navItem.icon;
  isSidebarCollapsed = storage.getItem('App/sidebarCollapsed');
  ngOnInit() {
    if (this.navItem.icon) {
      this.actualIcon = this.navItem.icon;
    }
  }
}
