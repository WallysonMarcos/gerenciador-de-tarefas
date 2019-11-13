class TarefaService extends Service {
  
  constructor(){
    super()
    this._path = `${this._url}/tarefas`
  }

  listarTodas(descricao){
    console.log("Listar todos")
    return fetch(`${this._path}`)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
            })
            .catch(e => console.log(e))
            //.catch(erro => Mensagem.mostrar("teste listarTodas", 'alert-danger'))
  }

  listarPorId(tarefa){

  }

  inserir(tarefa){
    console.log("Inserir");
    console.log(tarefa);
    const parametros = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tarefa)
    }
    // console.log(tarefa)
    return fetch(`${this._path}`, parametros)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
            })
            .catch(e => console.log(e))
           // .catch(erro => Mensagem.mostrar("teste inserir", 'alert-danger'))
  }

  alterar(tarefa){

  }

  deletar(_id){
    console.log("deletando " + _id)
    const parametros = {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    }
    // console.log(tarefa)
    return fetch(`${this._path}/` + _id, parametros)
            .then(res => {
              if (!res.ok) throw new Error(res.statusText)
              return res.json()
            })
            .catch(e => console.log(e))

  }
  
}
