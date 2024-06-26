import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import SelectGrupo from '../login/selectGrupo'

export default function Dono() {


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
    const [filtroGrupo, setFiltroGrupo] = useState('Selecione')
    const [resetGrupo, setResetGrupo] = useState(false)
    const [cdGrupo, setCdGrupo] = useState('')
    const [revelarSelectGrupo, setRevelarSelectGrupo] = useState(false)

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

   async function mudarDono(tipo){

   
        await apiC.post("dono/alterar", {
            "nomeNovoDono": nomeTimeVendedor,
            "nomeAntigoDono": jogadoComprado
        })
        .then(response => {
            if (response.status === 200) {
                alert('Novo dono alterado com sucesso')
            }
        })
        .catch((error) => {
            alert(error.response.data)
            console.log("error", error)
        });
    
    
    }



    return (
        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
        <h1>Informa abaixo o nome do novo dono do time</h1>


        <h3>Nome do novo dono</h3>
<Form.Control
            onChange={e => { setNomeTimeVendedor(e.target.value) }}
            value={nomeTimeVendedor}
        />
         <h3>Nome do antigo dono</h3>
<Form.Control
            onChange={e => { setJogadoComprado(e.target.value) }}
            value={jogadoComprado}
        />
         <Button className="btn-filtro-arquivo" onClick={(e) => mudarDono()}>
                        <div>Enviar</div>
                    </Button>



                    <div className="coluna-alterar-ciclo-vida-1-status-grupo">
                                    <Form.Label className="fonte-cor-1 label-campo-status-grupo status-contrato-filtro">Grupo</Form.Label>
                                    <div className="break-4"></div>
                                    {console.log("resetGrupo", filtroGrupo)}
                                    <Form.Control name="GRUPO" type="text" value={filtroGrupo == 'Selecione' || resetGrupo ? '' : filtroGrupo} className="esconder" onChange={(e)=> setCdGrupo(e.target.value)}/>
                                    {revelarSelectGrupo === false &&
                                        <Button disabled={revelarSelectGrupo !== '' && revelarSelectGrupo !== null && revelarSelectGrupo !== undefined ? false : true} className="campo-texto-cor-3 campo-select-filtro-5" onClick={() => setRevelarSelectGrupo(!revelarSelectGrupo)}>
                                            <div className="fonte-cor-1 label-campo campo-texto-select-tamanho-2">{resetGrupo ? "Selecione": filtroGrupo.split('*')[0]}</div>
                                            <img className={revelarSelectGrupo ? "campo-select-icone-ativado nao-selecionavel" : "campo-select-icone-desativado-filtro-b nao-selecionavel"}   />
                                        </Button>
                                    }
                                    {revelarSelectGrupo === true &&
                                        <SelectGrupo
                                            rota={"filtroSimcard"}
                                            setRevelarSelectGrupo={setRevelarSelectGrupo}
                                            setFiltroGrupo={setFiltroGrupo}
                                            setCdGrupo={setCdGrupo}
                                            setResetGrupo={setResetGrupo}
                                            nomeGrupo={filtroGrupo}
                                        >
                                        </SelectGrupo>
                                    }
                                </div>
                       
        </>
        
    )
}