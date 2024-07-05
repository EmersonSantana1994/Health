import React, { useState } from 'react';/*eslint-disable*/
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../../conexoes/api";
import '../../../css/login/upload.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

import SelectHealf from '../heal.js/selectHealf'

export default function Questionario() {


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
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [pergunta1, setPergunta1] = useState('');
    const [pergunta2, setPergunta2] = useState('');
    const [pergunta3, setPergunta3] = useState('');
    const [pergunta4, setPergunta4] = useState('');

    const [filtroGrupo, setFiltroGrupo] = useState('Selecione')
    const [resetGrupo, setResetGrupo] = useState(false)
    const [cdGrupo, setCdGrupo] = useState('')
    const [revelarSelectGrupo, setRevelarSelectGrupo] = useState(false)


    const [filtroSelect1, setFiltroSelect1] = useState('Selecione')
    const [resetSelect1, setResetSelect1] = useState(false)
    const [select1, setSelect1] = useState('')
    const [revelarSelect1, setRevelarSelect1] = useState(false)



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

    // useEffect(() => {
    //     async function autenticar(e) {
    //         await apiC.post("autenticacao/autenticar")
    //         .then(response => {
    //   console.log("esta autenticado")
    //         })
    //         .catch((error) => {
    //             if(error.response.data == 'não autenticado'){
    //                 navigate('/')
    //             }
    //         });
    //     }
    //     setTimeout(autenticar, 5000);
    // }, [])

   async function transferirJogador(tipo){
        await apiC.post("teste/healf", {
            "nome": nome,
            "idade": idade,
            "perguntaSono": pergunta1,
            "perguntaMente": pergunta2,
            "perguntaSexualidade": pergunta3,
            "perguntaNutricao": cdGrupo,
        })
        .then(response => {
            if (response.status === 200) {
                alert('Perguntas registradas')
            }
        })
        .catch((error) => {
            alert('Erro ao registrar as perguntas')
            console.log("error", error)
        });
    
    
    }


    return (
        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>

                    <h3>Qual seu nome?</h3>
<Form.Control
            onChange={e => { setNome(e.target.value) }}
            value={nome}
        />

<h3>Qual sua idade?</h3>
<Form.Control
            onChange={e => { setIdade(e.target.value) }}
            value={idade}
        />

<h3>Você esta dormindo bem ultimamente?</h3>
<Form.Control
            onChange={e => { setPergunta1(e.target.value) }}
            value={pergunta1}
        />
        <h3>Como esta a sua mente? Alguma preocupação relacionado a depressão e ansiedade por exemplo? </h3>
<Form.Control
            onChange={e => { setPergunta2(e.target.value) }}
            value={pergunta2}
        />
         <h3>Como esta a sua vida sexual?</h3>
         <div className="coluna-alterar-ciclo-vida-1-status-grupo">
                                    <Form.Label className="fonte-cor-1 label-campo-status-grupo status-contrato-filtro"></Form.Label>
                                    <div className="break-4"></div>
                                
                                    {console.log("resetSelect1", resetSelect1)}
                                    <Form.Control name="GRUPO" type="text" value={filtroSelect1 == 'Selecione' || resetSelect1 ? '' : filtroSelect1} className="esconder" onChange={(e)=> setSelect1(e.target.value)}/>
                                    {revelarSelect1 === false &&
                                        <Button disabled={revelarSelect1 !== '' && revelarSelect1 !== null && revelarSelect1 !== undefined ? false : true} className="campo-texto-cor-3 campo-select-filtro-5" onClick={() => setRevelarSelect1(!revelarSelect1)}>
                                            <div className="fonte-cor-1 label-campo campo-texto-select-tamanho-2">{resetSelect1 ? "Selecione": filtroSelect1}</div>
                                            <img className={revelarSelect1 ? "campo-select-icone-ativado nao-selecionavel" : "campo-select-icone-desativado-filtro-b nao-selecionavel"}   />
                                        </Button>
                                    }
                                    {revelarSelect1 === true &&
                                        <SelectHealf
                                            rota={"sexual"}
                                            setRevelarSelect1={setRevelarSelect1}
                                            setFiltroSelect1={setFiltroSelect1}
                                            setSelect1={setSelect1}
                                            setResetSelect1={setResetSelect1}
                                            nomeGrupo={filtroSelect1}
                                        >
                                        </SelectHealf>
                                    }
                                </div>
        <h3>Você esta se alimentando bem ultimamente?</h3>
        <div className="coluna-alterar-ciclo-vida-1-status-grupo">
                                    <Form.Label className="fonte-cor-1 label-campo-status-grupo status-contrato-filtro"></Form.Label>
                                    <div className="break-4"></div>
                                
                                    <Form.Control name="GRUPO" type="text" value={filtroGrupo == 'Selecione' || resetGrupo ? '' : filtroGrupo} className="esconder" onChange={(e)=> setCdGrupo(e.target.value)}/>
                                    {revelarSelectGrupo === false &&
                                        <Button disabled={revelarSelectGrupo !== '' && revelarSelectGrupo !== null && revelarSelectGrupo !== undefined ? false : true} className="campo-texto-cor-3 campo-select-filtro-5" onClick={() => setRevelarSelectGrupo(!revelarSelectGrupo)}>
                                            <div className="fonte-cor-1 label-campo campo-texto-select-tamanho-2">{resetGrupo ? "Selecione": filtroGrupo}</div>
                                            <img className={revelarSelectGrupo ? "campo-select-icone-ativado nao-selecionavel" : "campo-select-icone-desativado-filtro-b nao-selecionavel"}   />
                                        </Button>
                                    }
                                    {revelarSelectGrupo === true &&
                                        <SelectHealf
                                            rota={"filtroSimcard"}
                                            setRevelarSelectGrupo={setRevelarSelectGrupo}
                                            setFiltroGrupo={setFiltroGrupo}
                                            setCdGrupo={setCdGrupo}
                                            setResetGrupo={setResetGrupo}
                                            nomeGrupo={filtroGrupo}
                                        >
                                        </SelectHealf>
                                    }
                                </div>
        <Button className="btn-filtro-arquivo" onClick={(e) => transferirJogador("2")}>
                <div>Enviar</div>
            </Button>

                       
        </>
        
    )
}