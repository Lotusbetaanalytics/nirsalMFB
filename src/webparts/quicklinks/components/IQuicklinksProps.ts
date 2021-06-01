import { DisplayMode } from '@microsoft/sp-core-library';
import {IQuicklinksWebPartProps} from './../QuicklinksWebPart';

export interface IQuicklinksProps extends IQuicklinksWebPartProps{
  //description: string;
  displayMode: DisplayMode;

  fUpdateProperty: (value: string) => void;
  fPropertyPaneOpen: () => void;
}
