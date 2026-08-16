import { Component, ChangeDetectorRef } from '@angular/core';
import { GalleryDirective } from '../../shared/directives/gallery.directive';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [GalleryDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  protected discordCopied = false;

  private readonly discordName = 'zabrikosina';
  private copyResetTimer?: number;

  constructor(private cdr: ChangeDetectorRef) {}

  protected async copyDiscordName(): Promise<void> {
    await this.writeToClipboard(this.discordName);

    this.discordCopied = true;
    this.cdr.markForCheck();
    window.clearTimeout(this.copyResetTimer);
    this.copyResetTimer = window.setTimeout(() => {
      this.discordCopied = false;
      this.cdr.markForCheck();
    }, 1600);
  }

  private async writeToClipboard(value: string): Promise<void> {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
}
