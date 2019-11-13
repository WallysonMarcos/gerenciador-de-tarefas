class Tarefas {
  
  constructor(){
    this._tarefas = []
  }

  adicionar(tarefa){
    this._tarefas.push(tarefa)
  }

  listar(){
    return this._tarefas
  }

  limpar(){
    this._tarefas = []
  }
  deletar(i){
    
    var index = this._tarefas.indexOf(i);
    if (index > -1) {
      this._tarefas.splice(index, 1);
    }
  }
}
