import { AfterContentInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { OperationType } from '../../enums/operation-type.enum';

/**
 * The DefaultListMenuComponent class. This is a controller to generate dynamically all
 * elements of the generic list menu view.
 * @remarks
 *    'Input() menuType':  The menu elements are constructed from the input the 'menuType' property.
 *    'Output() openDialogEvent':  This event throws an notice when any element of the menu has been clicked.
 */
@Component({
  selector: 'app-default-list-menu',
  templateUrl: './default-list-menu.component.html',
  styleUrls: ['./default-list-menu.component.css']
})
export class DefaultListMenuComponent implements AfterContentInit {

  @Output() openDialogEvent: EventEmitter<OperationType> = new EventEmitter<OperationType>();
  @Input() menuType: OperationType = OperationType.None;
  private _isVisibleOpenButton: boolean = false;
  private _isVisibleEditButton: boolean = false;
  private _isVisibleChangePasswordButton: boolean = false;
  private _isVisibleDownloadButton: boolean = false;
  private _isVisibleDeleteButton: boolean = false;

  constructor() {
  }

  public get openButtonVisible(): boolean {
    return this._isVisibleOpenButton;
  }

  public get editButtonVisible(): boolean {
    return this._isVisibleEditButton;
  }

  public get changePasswordButtonVisible(): boolean {
    return this._isVisibleChangePasswordButton;
  }

  public get downloadButtonVisible(): boolean {
    return this._isVisibleDownloadButton;
  }

  public get deleteButtonVisible(): boolean {
    return this._isVisibleDeleteButton;
  }

  public ngAfterContentInit(): void {
    if (this.menuType & OperationType.None) {
      this._isVisibleOpenButton = false;
      this._isVisibleEditButton = false;
      this._isVisibleDeleteButton = false;
      this._isVisibleChangePasswordButton = false;
      this._isVisibleDownloadButton = false;
    }

    if (this.menuType & OperationType.Open) {
      this._isVisibleOpenButton = true;
    }
    if (this.menuType & OperationType.Edit) {
      this._isVisibleEditButton = true;
    }
    if (this.menuType & OperationType.ChangePassword) {
      this._isVisibleChangePasswordButton = true;
    }
    if (this.menuType & OperationType.Download) {
      this._isVisibleDownloadButton = true;
    }
    if (this.menuType & OperationType.Delete) {
      this._isVisibleDeleteButton = true;
    }
  }

  public onOpen() {
    this.openDialogEvent.emit(OperationType.Open);
  }

  public onEdit() {
    this.openDialogEvent.emit(OperationType.Edit);
  }

  public onChangePassword() {
    this.openDialogEvent.emit(OperationType.ChangePassword);
  }

  public onDownload() {
    this.openDialogEvent.emit(OperationType.Download);
  }

  public onDelete() {
    this.openDialogEvent.emit(OperationType.Delete);
  }
}
