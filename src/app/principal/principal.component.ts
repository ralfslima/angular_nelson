import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../modelo/cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  // Objeto do tipo Cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botoes
  btnCadastro: boolean = true;

  // JSON de clientes
  clientes: Cliente[] = [];

  // Construtor
  constructor(private servico: ClienteService) { }

  // Método de seleção - pega os clientes da API e adiciona na variavel JSON clientes
  selecionar(): void {
    this.servico.selecionar().subscribe(retorno => this.clientes = retorno);
  }

  // método de cadastro
  cadastrar2(): void {
    this.servico.cadastrar(this.cliente).subscribe({
      next: (retorno: Cliente) => { 
        // Cadastro no vetor
        this.clientes.push(retorno); 

        // Mensagem
        alert('Cliente cadastrado com sucesso!');
      },
      error(retorno:string) {
        // Retornar a mensagem contendo o erro
        alert(retorno);
      }
    });
  

    // Atualizar a lista
    this.selecionar();
  }

  // Método de incialização - ngOnInit é um metodo nativo do angular
  ngOnInit() {
    this.selecionar();
  }

}

// function retorno(value: Cliente): void {
//   throw new Error('Function not implemented.');
// }

