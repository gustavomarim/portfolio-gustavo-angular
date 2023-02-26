import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/core/models/Contact';
import { Enacom } from 'src/app/core/models/Enacom';
import { Response } from 'src/app/core/models/Response';
import { MessagesService } from 'src/app/core/services/messages.service';
import { ContactService } from './../../../core/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  enacomContact!: Response<Enacom>;
  private subscription!: Subscription;
  btnText: string = 'Enviar';

  constructor(
    private contactService: ContactService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.contactService.get().subscribe((response) => {
      this.enacomContact = response;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createHandler(contact: Contact): void {
    const formData = new FormData();
    formData.delete;

    // formData.append('name', contact.name);
    // formData.append('email', contact.email);
    // formData.append('text', contact.text);

    this.messageService.add('Formulário enviado com sucesso!');
    console.log(contact);
  }
}
