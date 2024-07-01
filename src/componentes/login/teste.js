import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function TimesCadastrados() {

    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const [itenst, setItenst] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [itens3, setItens3] = useState([]);
    const [itens4, setItens4] = useState([]);
    const [itens5, setItens5] = useState([]);
    const [itens6, setItens6] = useState([]);
    const [itens7, setItens7] = useState([]);
    const [itens8, setItens8] = useState([]);
    const [itens9, setItens9] = useState([]);
    const [itens10, setItens10] = useState([]);
    const [itens11, setItens11] = useState([]);
    const [itens12, setItens12] = useState([]);
    const [itens13, setItens13] = useState([]);
    const [itens14, setItens14] = useState([]);
    const [itens15, setItens15] = useState([]);
    const [itens16, setItens16] = useState([]);

    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [time5, setTime5] = useState('');
    const [time6, setTime6] = useState('');
    const [time7, setTime7] = useState('');
    const [time8, setTime8] = useState('');
    const [time9, setTime9] = useState('');
    const [time10, setTime10] = useState('');
    const [time11, setTime11] = useState('');
    const [time12, setTime12] = useState('');
    const [time13, setTime13] = useState('');
    const [time14, setTime14] = useState('');
    const [time15, setTime15] = useState('');
    const [time16, setTime16] = useState('');

    let contador = 0
    let itensVar = []

    const selecaoLinhas = {
        mode: 'checkbox',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                console.log("row", row)
                handleSelecionar()
            } else {
                handleDesselecionar()
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect) {
                // handleSelecionarTodos()
            } else {
                // handleDesselecionarTodos()
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" {...rest} />
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" {...rest} />
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };

    function handleSelecionar(simcard, nome) {
        // for (let i = 0; i < itens.length; i++) {
        //     if (itens[i].id == simcard) {
        //         dadosSelecionados.push(itens[i].id);
        //         dadosSelecionadosSorteados.push(itens[i].nome);
        //         break;
        //     }
        // }
    }

    function handleSelecionarTodos() {
        // itens.map((item, i) => {
        //     if (itens[i].id) {
        //         dadosSelecionados.push(itens[i].id);
        //         dadosSelecionadosSorteados.push(itens[i].nome);
        //     }
        // })
    }

    function handleDesselecionar(simcard, nome) {
        // for (let i = 0; i < dadosSelecionados.length; i++) {
        //     if (dadosSelecionados[i] == simcard) {
        //         dadosSelecionados.splice(i, 1);
        //         break;
        //     }
        //     if (dadosSelecionadosSorteados[i] == nome) {
        //         dadosSelecionadosSorteados.splice(i, 1);
        //         break;
        //     }
        // }
    }

    function handleDesselecionarTodos() {
    }

    useEffect(() => {

        async function buscarTimes(e) {
                            await apiC.post("listar/jogadores", {
                                time: "Palmeiras"
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "1")
                                    }
                                })
                                .catch((error) => {
                                });                     
                   
        }
        buscarTimes()
    }, [])

    function inserirDatat(data, time) {
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }

                    setItenst(JSON.parse(JSON.stringify(itensVar)))
        }

    }

    useEffect(() => {
        async function verificaSeTemTimeCadastrado() {

            await apiC.post("torneio/buscar")
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            inserirDatat(response.data, "1")
                            // for (let i = 0; i < response.data.length; i++) {
                            //     if (contador === i) {
                            //         let k = i
                            //         for (let j = 0; j < response.data.length; j++) {
                            //             itensVar[k] = response.data[j]
                            //             k++
                            //         }
                            //     }
                            //     setItenst(JSON.parse(JSON.stringify(itensVar)))
                            // }
                        }
    
                        else {
                            alert('nenhum time cadatrado, por favor faça o cadastro dos times')
                        }
                    }
                })
                .catch((error) => {
                });
        }verificaSeTemTimeCadastrado()

    }, [])
   

    const eventosLinhas = {
        onClick: (e, row, rowIndex) => {
        }
    }

    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data, time) {
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }

                    setItens(JSON.parse(JSON.stringify(itensVar)))
        }

    }

    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
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


    return (

        <>

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div className="lado">

                <div>
                    <h3>{time1}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_jogador'
                        data={itens}
                        columns={colunas}
                        selectRow={selecaoLinhas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>

                <div>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itenst}
                        columns={colunas}
                        selectRow={selecaoLinhas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
        
                 </div>
           
                
               

        </>

    )

}