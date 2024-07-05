import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Transferencia() {


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');
    const [nomeTimeComprador, setNomeTimeComprador] = useState('');
    const [nomeTimeVendedor, setNomeTimeVendedor] = useState('');
    const [jogadoComprado, setJogadoComprado] = useState('');
    const [jogadoTrocado, setJogadoTrocado] = useState('');
    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [mostrarTabela, setMostrarTabela] = useState(false);
    const navigate = useNavigate();
    let contador = 0
    let itensVar = []

    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
            .then(response => {
      console.log("esta autenticado")
            })
            .catch((error) => {
                if(error.response.data == 'não autenticado'){
                    navigate('/')
                }
            });
        }
        setTimeout(autenticar, 5000);
    }, [])

   async function transferirJogador(tipo){

    if(tipo == "1"){
        await apiC.post("transferencia/jogador", {
            "nomeTime": nomeTime,
            "novoJogador": novoJogador,
            "jogadorSaindo": jogadoSaindo
        })
        .then(response => {
            if (response.status === 200) {
                alert('Transferido com sucesso')
            }
        })
        .catch((error) => {
            console.log("error", error)
        });
    }else{
        await apiC.post("transferencia/jogadorComprado", {
            "nomeTimeComprador": nomeTimeComprador,
            "nomeTimeVendedor": nomeTimeVendedor,
            "jogadoComprado": jogadoComprado,
            "jogadoTrocado": jogadoTrocado
        })
        .then(response => {
            if (response.status === 200) {
                alert('Transferido com sucesso')
                chamarTimesAtualizados(response.data.result[0], response.data.result[1])
            }
        })
        .catch((error) => {
            alert(error.response.data)
            console.log("error", error)
        });
    }
    
    }

    async function chamarTimesAtualizados(timeComprador, timeVendedor){


 await apiC.post("transferencia/bucarTimeAtualizado", {
            "idTime": timeComprador,
        })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data.result, "1")
                setMostrarTabela(true)
            }
        })
        .catch((error) => {
            console.log("error", error)
        });
        await apiC.post("transferencia/bucarTimeAtualizado", {
            "idTime": timeVendedor,
        })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data.result, "2")
                setMostrarTabela(true)
            }
        })
        .catch((error) => {
            console.log("error", error)
        });

      

        function inserirData(data, time) {
            for (let i = 0; i < data.length; i++) {
                if (contador == i) {
                    let k = i
                    for (let j = 0; j < data.length; j++) {
                        itensVar[k] = data[j]
                        k++
                    }
                }
                if (i == (data.length - 1)) {
                    if (time == "1") {
                        setItens(JSON.parse(JSON.stringify(itensVar)))
                    } else if (time == "2") {
                        setItens2(JSON.parse(JSON.stringify(itensVar)))
                    }
                }
        }
    }

    }

    return (
        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
        <h1>Informa abaixo os jogadores que estão transferidos nos times</h1>

<h3>Nome do time comprador</h3>
<Form.Control
            onChange={e => { setNomeTimeComprador(e.target.value) }}
            value={nomeTimeComprador}
        />
        <h3>Nome do time vendedor</h3>
<Form.Control
            onChange={e => { setNomeTimeVendedor(e.target.value) }}
            value={nomeTimeVendedor}
        />
         <h3>Nome do jogador comprado</h3>
<Form.Control
            onChange={e => { setJogadoComprado(e.target.value) }}
            value={jogadoComprado}
        />
        <h3>Nome do jogador trocado</h3>
<Form.Control
            onChange={e => { setJogadoTrocado(e.target.value) }}
            value={jogadoTrocado}
        />
        <Button className="btn-filtro-arquivo" onClick={(e) => transferirJogador("2")}>
                <div>Enviar</div>
            </Button>
            <div className="espaco3"></div>
        <h1>Informa abaixo os jogadores que sairam e entraram no time</h1>

        <h3>Nome do time realizando a trânsferência</h3>
        <Form.Control
                    onChange={e => { setNomeTime(e.target.value) }}
                    value={nomeTime}
                />
                 <h3>Nome do novo jogador do time</h3>
        <Form.Control
                    onChange={e => { setNovoJogador(e.target.value) }}
                    value={novoJogador}
                />
                <h3>Nome do jogador de saida do time</h3>
        <Form.Control
                    onChange={e => { setJogadoSaindo(e.target.value) }}
                    value={jogadoSaindo}
                />
                <Button className="btn-filtro-arquivo" onClick={(e) => transferirJogador("1")}>
                        <div>Enviar</div>
                    </Button>
                    <div className="espaco3"></div>
                    <div className="lado">


                    {mostrarTabela &&
  <div>
  <h3>{nomeTimeComprador}</h3>
  <BootstrapTable
      hover={true}
      classes="tabela"
      condensed={true}
      keyField='id'
      data={itens}
      columns={colunas}
      bootstrap4={true}
      bordered={false}
  />
</div>
}

{mostrarTabela &&
  <div className="espaco2"></div>
}

{mostrarTabela &&
   <div>
   <h3>{nomeTimeVendedor}</h3>
   <BootstrapTable
       hover={true}
       classes="tabela"
       condensed={true}
       keyField='id'
       data={itens2}
       columns={colunas}
       bootstrap4={true}
       bordered={false}
   />
</div> 
}

                        
                    </div>
                       
        </>
        
    )
}