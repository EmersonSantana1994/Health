import React, { useState } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import SelectStatusContrato from '../login/selectStatusContrato';

export default function Transferencia() {   


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');


   async function transferirJogador(){

    await apiC.post("transferir/jogador", {
        "nomeTime": nomeTime,
        "novoJogador": novoJogador,
        "jogadorSaindo": jogadoSaindo
    })
    .then(response => {
        if (response.status === 200) {
        }
        setCarregando(false)
    })
    .catch((error) => {
        setCarregando(false)
    });
    }

    return (
        <>
        <h1>Crie uma pergunta</h1>

        <h3>Que tipo de pergunta deseja fazer?</h3>

        <Form.Control
                    onChange={e => { setNomeTime(e.target.value) }}
                    value={nomeTime}
                />
                 <h3>Nome do novo jogador do time</h3>
                 <div className="coluna-alterar-ciclo-vida-1-status-contrato">
                                    <Form.Label className="fonte-cor-1 label-campo-status-contrato status-contrato-filtro">Status do contrato </Form.Label>
                                    <div className="break-3"></div>
                                    <Form.Control name="STATUS_CONTRATO" type="text" value={nomeContrato == 'Selecione' || resetContrato ? '' : nomeContrato} className="d-none" onChange={(e)=> setCdContrato(e.target.value)}/>
                                    {revelarSelectContrato == false &&
                                        <Button className="campo-texto-cor-3 campo-select-filtro-b" onClick={() => setRevelarSelectContrato(!revelarSelectContrato)}>
                                            <div className="fonte-cor-16 label-campo-contrato-filtro">{resetContrato ? "Selecione": nomeContrato ? nomeContrato.split('*')[0] : "Selecione"}</div>
                                            <img className={revelarSelectContrato ? "campo-select-icone-ativado-filtro nao-selecionavel" : "campo-select-icone-desativado-filtro nao-selecionavel"} src={setaDropdown()} alt="drop" />
                                        </Button>
                                    }
                                    {revelarSelectContrato === true &&
                                        <SelectStatusContrato
                                            setRevelarSelectContrato={setRevelarSelectContrato}
                                            setNomeContrato={setNomeContrato}
                                            setCdContrato={setCdContrato}
                                            setFiltroSituacaoContrato={setFiltroSituacaoContrato}
                                            nomeContrato={nomeContrato}
                                            rota={"filtroSimcard"}
                                            setResetContrato={setResetContrato}
                                        >
                                        </SelectStatusContrato>
                                    }
                                </div>
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
        </>
        
    )
}