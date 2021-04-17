import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <div class="flow-content">
        <h1>{{titulo}}</h1>
        <h3>La base es <strong>{{base}}</strong></h3>
        <div class="sum-card">
            <button (click)="acumular(base)"> + {{base}} </button>
            <span>{{numero}}</span>
            <button (click)="acumular(-base)"> - {{base}} </button>
        </div>
    </div>
    `,
    styles: [`.sum-card {
    width: 200px;
    border: 0.5px solid #3e4144;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}`
    ]
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number): void {
        this.numero += valor
    }
}