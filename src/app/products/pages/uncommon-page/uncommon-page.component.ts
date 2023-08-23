import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Fernando'
  public gender: 'male'|'female' = 'male'
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa'
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift()
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: '36',
    address: 'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500)
  })

}
