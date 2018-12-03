import { environment } from './../../../environments/environment';
import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements OnInit {
  private _element: ElementRef;
  private collapsed = false;

  private iconCopy;
  private iconOpenTab;
  private iconShowHide;

  // Size of 'hide' state
  @Input() height = '50';

  // Default state of element ('hide' or 'show')
  @Input() default?= 'hide';

  // Enable all actions
  @Input() actions?= true;

  // Specify to skip component if production is enable
  @Input() debug?= true;

  constructor(element: ElementRef) {
    this._element = element;
  }

  ngOnInit() {
    if (environment.production && this.debug) {
      this._element.nativeElement.remove();
      return;
    }

    if (this.actions) {
      this.addCopyButton();
      this.addOpenInNewTab();
      this.addShowHide();
      this._element.nativeElement.style.position = 'relative';
    }

    this._element.nativeElement.style.cursor = 'pointer';

    if (this.default === 'hide') {
      this.collapse();
    }
  }

  collapse() {
    this._element.nativeElement.style.height = this.height + 'px';
    this._element.nativeElement.style.overflow = 'hidden';
    this.collapsed = true;
  }

  grow() {
    this._element.nativeElement.style.height = 'auto';
    this.collapsed = false;
  }

  addCopyButton() {
    this.iconCopy = document.createElement('i');
    this.iconCopy.innerHTML = 'copy';
    this.iconCopy.addEventListener('click', () => {
      const textarea = document.createElement('textarea');
      textarea.textContent = this.JSON;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();

      alert('Copied');
    });
    this.iconCopy.style.position = 'absolute';
    this.iconCopy.style.right = '10px';
    this.iconCopy.style.top = '5px';

    this._element.nativeElement.appendChild(this.iconCopy);
  }

  addOpenInNewTab() {
    this.iconOpenTab = document.createElement('i');
    this.iconOpenTab.innerHTML = 'tab';
    this.iconOpenTab.addEventListener('click', () => {
      const b64 = btoa(this.JSON);
      this.debugBase64('data:text/json;base64,' + b64);
    });
    this.iconOpenTab.style.position = 'absolute';
    this.iconOpenTab.style.right = '43px';
    this.iconOpenTab.style.top = '5px';

    this._element.nativeElement.appendChild(this.iconOpenTab);
  }

  addShowHide() {
    this.iconShowHide = document.createElement('i');
    this.iconShowHide.innerHTML = this.collapsed ? 'hide' : 'show';
    this.iconShowHide.addEventListener('click', () => {
      if (this.collapsed) {
        this.grow();
      } else {
        this.collapse();
      }
      this.iconShowHide.innerHTML = this.collapsed ? 'show' : 'hide';
    });
    this.iconShowHide.style.position = 'absolute';
    this.iconShowHide.style.right = '70px';
    this.iconShowHide.style.top = '5px';

    this._element.nativeElement.appendChild(this.iconShowHide);
  }

  get JSON(): string {
    let json = '';

    this.iconOpenTab.remove();
    this.iconCopy.remove();
    this.iconShowHide.remove();

    json = this._element.nativeElement.innerHTML;

    this._element.nativeElement.appendChild(this.iconOpenTab);
    this._element.nativeElement.appendChild(this.iconCopy);
    this._element.nativeElement.appendChild(this.iconShowHide);

    return json;
  }

  debugBase64(base64URL) {
    const win = window.open();
    win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  }

}
