import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: ( ) => console.info('completado [obs]')
}


const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe(observer);

