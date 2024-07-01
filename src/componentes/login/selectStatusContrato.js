//IMPORTAÇÕES
import React, { useState, useEffect, useRef } from 'react';/*eslint-disable*/
import { Button, Form } from 'react-bootstrap';
// ICONES
import {setaDropdown}  from '../../utils/alternanciaIcones.js'


/*  COMO USAR
    Importe a modal para dentro do componente que irá fazer uso dela.
    ex: import SelectCliente from '../../componentesModais/selects/selectCliente'

    Crie um hook apropriado para esconder e exibir a mensagem quando necessário.
    ex: const [revelarSelectCliente, setRevelarSelectCliente] = useState(false)

    Após isso, posicione-a dentro do return do seu componente e passe os props para
    customizar o conteúdo da mensagem da seguinte forma. É interessante utilizar um
    <Button/> com uma função onClick, dentro de um >Form.Group/> para que o campo
    se mantenha similar aos campos de texto normais.
    ex: <Form.Group>
            <Form.Label className="label">
                <div className="fonte-cabecalho">cliente {iconeAsterisco}</div>
            </Form.Label>
            <Button name="cdCliente" className="campo-select-modal" onClick={() => setRevelarSelectCliente(!revelarSelectCliente)}>
                <div className="campo-select-modal-label">{dsCliente}</div>
                <img className="campo-select-modal-icone" src={setaDropdown()} alt="drop" />
            </Button>
            { revelarSelectCliente === true &&
                <SelectCliente
                    setRevelarSelectCliente={setRevelarSelectCliente} //Hook para fechar a modal
                    setCdCliente={setCdCliente} //Código do cliente
                    setDsCliente={setDsCliente} //Nome do cliente
                    phCliente={phCliente} //Placeholder para mostrar o valor original em caso de edição
                >
                </SelectCliente>
            }
        </Form.Group>*/

export default function SelectContrato(props) {
    const [contrato, setContrato] = useState([])
    const [spinAtivo, setSpinAtivo] = useState(true);

    //HOOKS MODAL
    const modal = useRef();

    useEffect(() => {
        if (props.rota == "filtroSimcard" && props.setResetContrato) {
            props.setResetContrato(false)
        }
        let dsContratos = [];
        let idContratos = [];
        async function renderContrato() {
            setSpinAtivo(true)
            let todosContrato = [];
            let JSONcontratos = [];
            let dadosStatusContrato
           
                idContratos = await data.dados[0].CD_SITUACAO.split(";").map((item) => item);

                dsContratos = await data.dados[0].SITUACAO.split(";").map((item) => item)
            
                const tratarSituacao = (dsContrato) => {
                    switch(dsContrato) {
                        case 'BLOQUEIO TEMPORARIO':
                            return 'Bloqueio Temporário';
                        case 'DEMONSTRACAO':
                            return 'Demonstração';
                        case 'PRE ATIVO':
                            return 'Pré - ativo';
                        default:
                            return dsContrato.slice(0, 1).toUpperCase() + dsContrato.slice(1, dsContrato.length).toLowerCase();
                    }
                }
            
                JSONcontratos = dsContratos.map((dsContrato, i) => {
                    return {
                        SITUACAO: tratarSituacao(dsContrato),
                        CD_SITUACAO: idContratos[i]
                    }
                })

                localStorage.setItem("keyStatusContrato", JSON.stringify(JSONcontratos))
                dadosStatusContrato = JSON.parse(localStorage.getItem("keyStatusContrato"))
                if (JSONcontratos.length > 0) {
                    let objetoContrato = JSONcontratos.map((contratos, i) => {
                        return (
                            <li key={"menu-" + contratos.CD_SITUACAO}>
                                <div className="campo-select-opcao-filtro campo-select-opcao-1" onClick={() => handleContrato(contratos.CD_SITUACAO, contratos.SITUACAO)}>
                                    <span className="fonte-cor-1 fonte-campo campo-select-opcao-label">{contratos.SITUACAO}</span>
                                </div>
                                {JSONcontratos[i + 1] !== undefined && <div className="campo-select-divisor-cor-1 campo-select-divisor"></div>}
                            </li>
                        );
                    })
                    setSpinAtivo(false)
                    setContrato(objetoContrato)
                } else {
                    let objetoContrato = () => {
                        return (
                            <li>
                                <div disabled className="campo-select-opcao campo-select-opcao-1">
                                    <span className="fonte-cor-1 fonte-campo campo-select-opcao-label nao-selecionavel">Nenhuma informação encontrada</span>
                                </div>
                            </li>
                        );
                    }
                    setContrato(objetoContrato)
                }

                dadosStatusContrato = JSON.parse(localStorage.getItem("keyStatusContrato"))
                if (dadosStatusContrato.length > 0) {
                    let objetoContrato = dadosStatusContrato.map((contratos, i) => {
                        return (
                            <li key={"menu-" + contratos.CD_SITUACAO}>
                                <div className="campo-select-opcao-filtro campo-select-opcao-1" onClick={() => handleContrato(contratos.CD_SITUACAO, contratos.SITUACAO)}>
                                    <span className="fonte-cor-1 fonte-campo campo-select-opcao-label">{contratos.SITUACAO}</span>
                                </div>
                                {dadosStatusContrato[i + 1] !== undefined && <div className="campo-select-divisor-cor-1 campo-select-divisor"></div>}
                            </li>
                        );
                    })
                    setSpinAtivo(false)
                    setContrato(objetoContrato)
                } else {
                    let objetoContrato = () => {
                        return (
                            <li>
                                <div disabled className="campo-select-opcao campo-select-opcao-1">
                                    <span className="fonte-cor-1 fonte-campo campo-select-opcao-label nao-selecionavel">Nenhuma informação encontrada</span>
                                </div>
                            </li>
                        );
                    }
                    setContrato(objetoContrato)
                }
                     
        }
        renderContrato()
        document.addEventListener('mousedown', handleClickFora);
        return () => document.removeEventListener('mousedown', handleClickFora);
    }, [])

    const handleClickFora = e => {
        if (!modal.current.contains(e.target)) {    
            handleCancelar()
        }
    };

    function handleContrato(codigo, contrato) {
        props.setNomeContrato(contrato + "*" + codigo)
        props.setFiltroSituacaoContrato(codigo + "*" + contrato)
        handleCancelar()
    }

    function handleCancelar() {
        props.setRevelarSelectContrato(false)
    }


    return (
        <Form ref={modal}>
            <Button className={props.rota && props.rota == "filtroSimcard" ? "campo-texto-cor-3 campo-select-filtro-b" : "campo-texto-cor-3 campo-select-filtro"} onClick={() => props.setRevelarSelectContrato(false)}>
                <img className={props.rota && props.rota == "filtroSimcard" ? "campo-select-icone-ativado-filtro" : "campo-select-icone-ativado"} src={setaDropdown()} alt="drop" />
            </Button>
            
                <ul>
                    dcsudcsk
                </ul>
            
        </Form>
    )
}