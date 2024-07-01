import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Buffer } from 'buffer';
import { useSelector, useDispatch } from 'react-redux';
import Calendario from './heal.js/calendario';
import moment from 'moment';
import SelectGrupo from './selectGrupo';


export default function Pronturario2(props) {
    window.Buffer = Buffer;
    const [itens, setItens] = useState([]);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();
    const [jogador, setJogador] = useState('');
    const expandirNavegacao = useSelector(state => state.reduxH.expandirNavegacao);
    const [permissaoDescricao, setPermissaoDescricao] = useState();

    const [jogador1, setJogador1] = useState('');
    const [jogador2, setJogador2] = useState('');
    const [jogador3, setJogador3] = useState('');
    const [jogador4, setJogador4] = useState('');
    const [time, setTime] = useState('');
    const [pesquisarTime, setPesquisarTime] = useState('');
    const [resultado, setResultado] = useState(false);
    const [nenhumResultado, setNenhumResultado] = useState('Nenhum resultado encontrado');
    const [mostrarTime, setMostrarTime] = useState(false);
    let contador = 0
    let itensVar = []
    const [mostrarImagem, setMostrarImagem] = useState('');
    const [imagemBuscada, setImagemBuscada] = useState('');
    const [nome, setNome] = useState('');
    let token = JSON.parse(localStorage.getItem("keyToken"))
    const [getName, setGetName] = useState('');
    const exemplo = ['exemplo' ]
    const [text, setText] = useState('');
    const [filtroAtivacaoDataInicio, setFiltroAtivacaoDataInicio] = useState('');
    const [filtroAtivacaoDataFinal, setFiltroAtivacaoDataFinal] = useState('');
    const [dataMin, setDataMin] = useState(1990)
    const [dataMax, setDataMax] = useState(new Date())

    const [filtroGrupo, setFiltroGrupo] = useState('Selecione')
    const [resetGrupo, setResetGrupo] = useState(false)
    const [cdGrupo, setCdGrupo] = useState('')
    const [revelarSelectGrupo, setRevelarSelectGrupo] = useState(false)
    const [idIdioma, setIdIdioma] = useState('')
    
    

   


    useEffect(() => {
        async function listar(e) {
            await apiC.post("prontuario/listar2", {
                "id": props.idProntuario, 
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData(response.data)
                        // if (response.data.result.length == 0) {
                        // } else {
                        // }
    
                    }
                })
                .catch((error) => {
    
                    alert(error.response.data)
    
                });
        }
        listar()
       
    }, [])

    async function cadastrarTime() {

        await apiC.post("cadastrar/time", {
            "liga": liga,
            "time1": time1,
            "time2": time2,
            "time3": time3,
            "time4": time4,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('liga e times cadastrados')
                }
            })
            .catch((error) => {
                alert(error.response.data)
            });
    }

    async function buscarImagem() {

        await apiC.post("buscar/imagem", {
            "nome": nome,
        })
            .then(response => {
                if (response.status === 200) {
                    const imagePath = Buffer.from(response.data.result.data).toString();
                    setImagemBuscada(imagePath)
                }
            })
            .catch((error) => {
                console.log("error", error)
                // alert(error.response.data)

            });
    }


    async function cadastrarJogador() {

        await apiC.post("cadastrar/jogador", {
            "time": time,
            "jogador1": jogador1,
            "jogador2": jogador2,
            "jogador3": jogador3,
            "jogador4": jogador4,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    alert('Jogadores cadastrados')
                }
            })
            .catch((error) => {
                alert(error.response.data)

            });
    }





    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
          
            formatter: (cell, row) => {
                return <p className='corpadrão'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            sort: true,
           
        },
        {
            dataField: 'data',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
        </p>,
             formatter: (cell, row) => {
                const formData = new Date(cell)
                        let dt = formData.toLocaleString('pt-BR')
                return <p className='ppp corpadrão'>{dt === null ? '-' : dt}</p>;
            },
            
        },
        {
            headerClasses: 'nao-selecionavel',
            sort: true,
         
              formatter: (cell, row) => {
                return <Button>
                    {/* {console.log("eeee", row)} */}
                     <p className='corpadrão'>adicionar</p>
                </Button>;
            },
        },
    ]

    function inserirData(data) {
        itensVar = []
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

    const colunasTimes = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrão'>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    function handleLerArquivo(files) {
        let reader = new FileReader();
        let format = files.name.replace(".jpg", "")
        setGetName(format)
        if (files.size <= 1048576 && files.type.split('/')[0] === "image" && files.type.split('/')[0] !== "gif" && files.type.split('/')[0] !== "psd") {
            reader.readAsDataURL(files);
            reader.onloadend = () => {
                handleAlterar(reader.result, format)
            }
        } else {
            if (files.size > 1048576) {
                alert('Erro tamanho de foto muito grande')
            } else {
                alert('Erro ao importar foto')
            }

        }
    };

    const itemExpandido = {
        className: 'fundo-cor-1',
        renderer: (row, rowIndex) => (
            
            <div className={expandirNavegacao === true ? "expand-row-tabela-dispositivos-1" : "expand-row-tabela-dispositivos-2"}>
                {/* <DetalhamentoLinha renderConsultaColunas={props.render} setRenderConsultaColunas={props.setRender} row={mapearDadoDetalhamentoLinha(row)} cdSimcard={row.CD_SIMCARD} gsm={row.FULLCALLERID} previsaoConsumo={row.PREVISAO} plano={row.PLANO + row.EXCEDENTE} renderizar={renderizar} setRenderizar={setRenderizar}></DetalhamentoLinha> */}
                {console.log("row", row)}
                <h3>oii</h3>
            </div>
        ),
        expandHeaderColumnRenderer: (row, rowIndex) => (
            <div className="cabecalho-linha-expandida">
            </div>
        ),
        expandColumnRenderer: (rowKey) => {
            return (
                <Button className="">
                    <p>expandir</p>
                    {/* <Image id={rowKey.rowKey} className="icone-botao-expandir-row nao-selecionavel"  /> */}
                    {/* <Image id={rowKey.rowKey} className="icone-botao-expandir-row nao-selecionavel" src={setaDropdown()} /> */}
                </Button>
            );
        },
        showExpandColumn: true,
        expandByColumnOnly: true,
        headerClasses: 'tabela-coluna-primeira-header',
    };

    async function handleAlterar(novaImagem, nome) {
        await apiC.post('/inserir/imagem', {
            "imagem": novaImagem,
            "nome": nome,
        })
            .then(function (response) {
                setMostrarImagem(novaImagem)
                alert('foto registrada com sucesso')
            })
            .catch(function (error) {
                alert(error.response.data)
                console.log("erooooo", error)
            });
    }
    const eventosLinhas = {
        onClick: (e, row, rowIndex) => {
        }
    }

    return (
        <>
            <div className='p-lado'>
             

<<<<<<< HEAD
=======
            <div className="coluna-alterar-ciclo-vida-1-ativacao">
                                    {/* <Form.Label className="fonte-cor-1 label-campo-ativacao">Ativação</Form.Label> */}
                                    {/* <div className="break-3"></div> */}
                                    <Form.Group>
                                        {/* Componente Calendário */}
                                        {/* <div className="conteudo-calendario-filtro">
                                            <Form.Control name="ATIVACAO_INICIO" type="text" value={filtroAtivacaoDataInicio ? moment(filtroAtivacaoDataInicio).format("YYYY-MM-DD hh:mm:ss") : filtroAtivacaoDataInicio} className="d-none" />
                                            <Calendario imputCustomisado='De:' data={filtroAtivacaoDataInicio} setData={setFiltroAtivacaoDataInicio} dataMax={filtroAtivacaoDataFinal ? filtroAtivacaoDataFinal : dataMax} dataMin={dataMin} rota={"filtroSimcard"}></Calendario>
                                        </div> */}
                                        {/* <div className="conteudo-calendario-filtro">
                                            <Form.Control name="ATIVACAO_FINAL" type="text" value={filtroAtivacaoDataFinal ? moment(filtroAtivacaoDataFinal).format("YYYY-MM-DD hh:mm:ss") : filtroAtivacaoDataFinal} className="d-none" />
                                            <Calendario imputCustomisado='Até:' data={filtroAtivacaoDataFinal} setData={setFiltroAtivacaoDataFinal} dataMax={dataMax} dataMin={filtroAtivacaoDataInicio ? filtroAtivacaoDataInicio : dataMin} rota={"filtroSimcard"}></Calendario>
                                        </div> */}
                                        
                                    </Form.Group>
                                </div>

>>>>>>> 9f185d612c326fa12f3cdfa36436ff2b72b61bff

           
                <div className='cimaProntuario2'>
                  
                <BootstrapTable // TABELA
                                        classes={"tabela"}
                                        condensed={true}
                                        keyField='id'
                                        data={itens}
                                        columns={colunas}
                                        rowEvents={eventosLinhas}
                                        // selectRow={selecaoLinhas}
                                        expandRow={itemExpandido}
                                        bootstrap4={true}
                                        bordered={false}
                                        // noDataIndication={!spinAtivo && "Nenhum item encontrado"}
                                        // {...paginationTableProps}
                                    />
                    <did className='lado-d'>
                 
                    </did>
                  

                </div>


            </div>


        </>


    )
}