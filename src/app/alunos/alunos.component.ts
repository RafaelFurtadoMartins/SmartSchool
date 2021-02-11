import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos';
  alunos = [
    'aluno 1',
    'aluno 2',
    'aluno 3',
    'aluno 4',
    'aluno 5',
    'aluno 6',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
