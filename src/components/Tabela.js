function Tabela(props) {
    return (
        <section className='sec-cadastrados'>
          <h2>Pacientes Cadastrados</h2>
          <div>
            <table>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Telefone</th>
                <th>Opções</th>
              </tr>
                {props.lista.map((_,i)=>{
                  return(
                      <tr key={i} id={i}>
                        <td>{_.nome}</td>
                        <td>{_.idade}</td>
                        <td>{_.telefone}</td>
                        <td>
                          <button className="btn-editar"
                            onClick={()=>props.onEdit(i)}>
                            Editar
                          </button> 
                          <button className="btn-deletar" onClick={()=>props.onDelete(i)}>
                            Deletar
                          </button>
                        </td>
                      </tr>
                  )
                })}
            </table>
          </div>
        </section>
    )
}

export default Tabela