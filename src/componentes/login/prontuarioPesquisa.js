import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Buffer } from 'buffer';
import { useSelector, useDispatch } from 'react-redux';
import Calendario from '../login/heal.js/calendario';
import moment from 'moment';
import SelectGrupo from '../login/selectGrupo';
import Pronturario2 from '../login/prontuario2';
import ModalAdicionar from './modalAdicionar';
import { voltarProntuario } from '../../actions/actions';
import { modalAberta } from '../../actions/actions';
import ReactDragListView from "react-drag-listview";
import { iconeExpandir } from './../../assets/alterarIcones';
import Prontuario from './prontuario';


export default function PronturarioPesquisa() {
    window.Buffer = Buffer;
    const [itens, setItens] = useState([]);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');
    const [abrirAdicionar, setAbrirAdicionar] = useState(false);
    const navigate = useNavigate();
    const [jogador, setJogador] = useState('');
    const expandirNavegacao = useSelector(state => state.reduxH.expandirNavegacao);
    const [permissaoDescricao, setPermissaoDescricao] = useState();
    const voltarProntuarioo = useSelector(state => state.reduxH.voltarProntuario);
    const modalAbertaa = useSelector(state => state.reduxH.modalAberta);
    const despacho = useDispatch();

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
    const exemplo = ['exemplo']
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
    const [idEnviar, setidEnviar] = useState(0)
    const [nomeArquivo, setnomeArquivo] = useState('')
    

    const [pesquisar, setPesquisar] = useState('');

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
                .then(response => {
                    console.log("esta autenticado")
                })
                .catch((error) => {
                    if (error.response.data === 'não autenticado') {
                        navigate('/')
                    }
                });
        }
        setTimeout(autenticar, 5000);
    }, [])

    useEffect(() => {
        setText(JSON.parse(localStorage.getItem('idioma')))
    }, [])


    useEffect(() => {
        async function listar(e) {
            await apiC.post("/prontuario/listarUser", {
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


    async function atualizar(e) {
        console.log("atualizouuuuu")
        await apiC.post("/prontuario/listarUser", {
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

    async function limpar(parametro) {
        itensVar = []
        setItens([])
        if(parametro !== "1"){
            atualizar()
        }
        
    }

    async function pesquisa() {
        await limpar("1")
        console.log("meu chapa", pesquisar)
        await apiC.post("/tabela/busque", {
            "pesquisa": pesquisar,
        })
            .then(response => {
                inserirData(response.data)
            })
            .catch((error) => {
                alert("erro ao pesquisar")
            })

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
        //         {
        //           formatter: (cell, row) => {
        //             return <Button onClick={(e) => {setAbrirAdicionar(!abrirAdicionar); despacho(voltarProntuario(true)); enviarDetalheLinha(row)}}>

        // <OpenInNewIcon className='' style={{ fontSize: 20 }} />
        //             </Button>;
        //         },
        //     },
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Nome
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'nascimento',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Data de Nascimento
            </p>,
            formatter: (cell, row) => {
                const formData = new Date(cell)
                let dt = formData.toLocaleString('pt-BR')
                return <p className='corpadrãoTabela'>{cell === null ? '-' : dt}</p>;
            },
        },
        {
            dataField: 'telefone',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Telefone
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'cpf',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                CPF
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'rg',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                RG
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'email',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                e-mail
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'instagram',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Instagram
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'cep',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                CEP
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'endereco',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Endereço
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'cidade',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadrão'>
                Cidade
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'pais',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                País
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrão'>{cell === null ? '-' : cell}</p>;
            },
        },


        // {
        //       formatter: (cell, row) => {
        //         return <Button onClick={(e) => {setAbrirAdicionar(!abrirAdicionar); despacho(voltarProntuario(true)); enviarDetalheLinha(row.id_pro, row.nome)}}>

        //              <p className='corpadrão'>adicionar</p>
        //         </Button>;
        //     },
        // },
    ]

    function enviarDetalheLinha(id, nome) {
        setidEnviar(id)
        setnomeArquivo(nome)
    }

    function enviarDetalhe() {
        setidEnviar(0)
        despacho(voltarProntuario(true))
    }

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
                return <p>{cell === null ? '-' : cell}</p>;
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

                <Pronturario2 idProntuario={row.id_pro} ></Pronturario2>

            </div>
        ),
        expandHeaderColumnRenderer: (row, rowIndex) => (
            <div className="cabecalho-linha-expandida">
            </div>
        ),
        expandColumnRenderer: (rowKey) => {
            return (

                // <Button className="">

                //     <p>expandir</p>


                // </Button>

                <Button className='iconeExpandiButton' onClick={(e) => { abrirModal(!abrirAdicionar)}}>

                    <img className="iconeExpandi" src={iconeExpandir()} />
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

    function fecharTela() {
        setAbrirAdicionar(!abrirAdicionar)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            pesquisa();
        }
    };

    function abrirModal(){
        despacho(modalAberta(true))
           }

    return (

        <>
{
    modalAbertaa &&
    <Prontuario></Prontuario>
}


            {voltarProntuarioo ?


                <ModalAdicionar atualizar={atualizar}></ModalAdicionar>

                :

                <div className=''>

                    <div className='cimaTabela'>

                        <Form.Group>

                            <Form.Control
                                onChange={e => { setPesquisar(e.target.value) }}
                                value={pesquisar}
                                className='campodepesquisa'
                                onKeyDown={handleKeyPress}
                                placeholder="Pesquise por nome..."
                            />

                            <Button className="botaoBuscar" onClick={(e) => pesquisa()}>
                                <div>Pesquisar</div>
                            </Button>
                            <Button className="botaoBuscar" onClick={(e) => limpar()}>
                                <div>Limpar</div>
                            </Button>
                        </Form.Group>

                        <BootstrapTable // TABELA
                            classes={"tabela"}
                            condensed={true}
                            keyField='id_usuario'
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
                        {/* <did className='lado-d'>
                    <div className='cima'>
                        <label className='label-2'>{text.observacoes}</label>
                        <Form.Control
                            onChange={e => { setJogador(getName) }}
                            value={getName}
                            placeholder=''
                            className='imput-4'
                        />
                    </div>
                </did> */}



                    </div>


                </div>

                //  <ModalAdicionar></ModalAdicionar> :

            }
        </>


    )
}