import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'terms-of-service',
  standalone: true,
  templateUrl: './terms-of-service.html',
  styleUrls: ['./terms-of-service.css']
})
export class TermsOfService {
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
