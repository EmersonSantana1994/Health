import React, { useState, useEffect, useRef } from 'react';/*eslint-disable*/
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
import ReactDragListView from "react-drag-listview";
import { modalAberta } from '../../actions/actions';
import { editarProntuario } from '../../actions/actions';
import { idUsuario } from '../../actions/actions';
import { iconeExpandir } from './../../assets/alterarIcones';
import { SpinerHealf } from './../../assets/icones/Untitled ‑ Made with FlexClip (1) (1).gif';
import { atualizarTabela, propsEditar } from '../../actions/actions';
import EditarProntuario from './editarProntuario';

export default function Pronturario(props) {
    console.log("propsss", props)
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
    const despacho = useDispatch();
    const modal = useRef();
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
    const atualizarTabelaa = useSelector(state => state.reduxH.atualizarTabela);
    const editarProntuarioo = useSelector(state => state.reduxH.editarProntuario);
    const [envioModal, setEnvioModal] = useState()
    const [data, setData] = useState([]);
    const [pagina, setPagina] = useState(1);
    const itensPorPagina = 30;

    const [pesquisar, setPesquisar] = useState('');

    const formData = new Date(props.envioModal.nascimento)
    let dtY = formData.getFullYear().toString()
    let dtM = (formData.getMonth() + 1).toString()
    let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
    let dtD = formData.getDate().toString()
    let diaFormatado = dtD < 10 ? '0' + dtD : dtD;

    let dta = diaFormatado + "/" + mesFormatado + "/" + dtY

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

    const handleClickFora = e => {

        if (modal.current) {
            if (!modal.current.contains(e.target)) {
                handleCancelar()
            }
        }

    };

    async function handleCancelar() {
        despacho(modalAberta(false))
    }



    useEffect(() => {
        document.addEventListener('mousedown', handleClickFora);
        return () => document.removeEventListener('mousedown', handleClickFora);
    }, [])

    useEffect(() => {
        despacho(idUsuario(props.envioModal.id_usuario))
    }, [])

    useEffect(() => {
        async function listar(e) {
            await apiC.post("prontuario/listar", {
                "idUsuario": props.envioModal.id_usuario
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


    async function pesquisa() {
        await limpar("1")
        await apiC.post("/tabela/busqueProntuario", {
            "pesquisa": pesquisar,
        })
            .then(response => {
                inserirData(response.data)
            })
            .catch((error) => {
                alert("erro ao pesquisar")
            })

    }

    atualizar()

    async function atualizar(e) {

        if (atualizarTabelaa) {
            await apiC.post("prontuario/listar", {
                "idUsuario": props.envioModal.id_usuario
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
            despacho(atualizarTabela(false))
        }

    }




    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadraoColuna'>

            </p>,
            formatter: (cell, row) => {
                return <Button className='iconeExpandiButton' onClick={(e) => { despacho(voltarProntuario(true)); despacho(editarProntuario(true)); despacho(propsEditar(row)) }}>

                    <img className="iconeExpandi" src={iconeExpandir()} />
                </Button>
            },
        },
        {
            dataField: 'descricao',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadraoColuna'>
                Descrição
            </p>,
            formatter: (cell, row) => {
                let textoOriginal = cell
                let textoLimitado = limitarCaracteres(textoOriginal, 35);
                return <p className='corpadrãoTabela'>{cell === null ? '-' : textoLimitado}</p>;
            },
        },
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadraoColuna'>
                Procedimento
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrãoTabela'>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'data_procedimento',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadraoColuna'>
                Data do procedimento
            </p>,
            formatter: (cell, row) => {
                const formData = new Date(cell)
                let dtY = formData.getFullYear().toString()
                let dtM = (formData.getMonth() + 1).toString()
                let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
                let dtD = formData.getDate().toString()
                let diaFormatado = dtD < 10 ? '0' + dtD : dtD;
                let dta = diaFormatado + "/" + mesFormatado + "/" + dtY
                return <p className='corpadrãoTabela'>{cell === null ? '-' : dta}</p>;
            },
        },
        {
            dataField: 'data',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p className='corpadraoColuna'>
                Data e hora do envio
            </p>,
            formatter: (cell, row) => {
                const formData = new Date(cell)
                let dt = formData.toLocaleString('pt-BR')
                return <p className='corpadrãoTabela'>{dt === null ? '-' : dt}</p>;
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

    function limitarCaracteres(str, limite) {
        return str.substring(0, limite);
    }

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
            text: <p className='corpadrão'>
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

            <div></div>
        ),
        expandHeaderColumnRenderer: (row, rowIndex) => (
            <div className="cabecalho-linha-expandida">
            </div>
        ),
        expandColumnRenderer: (rowKey) => {
            return (

                <div></div>

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

    async function limpar(parametro) {
        itensVar = []
        setItens([])
        if (parametro !== "1") {
            atualizar()
        }

    }


    return (
        <>

{console.log("vvvvvvvv",  )}
         

            {voltarProntuarioo ?


                <ModalAdicionar atualizar={atualizar} idUsuario={props.envioModal.id_usuario} envioModal={envioModal} editar={true}></ModalAdicionar>

                :

                <div className='modal'>




                    <div ref={modal} className="modal-content">


                        <span className="close" onClick={handleCancelar}>&times;</span>

                        <div className='lado-d'>
                            {mostrarImagem != '' ?
                                <img className="icone-perfil2" src={mostrarImagem} />
                                :
                                <img className="icone-perfil2" src="https://jazzaero.com.br/wp-content/uploads/2017/05/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg" alt="perfil" />
                            }

                            <label className='labell-3 corpadrão'>Nome: {props.envioModal.nome} |</label>
                            <label className='labell-3 corpadrão'>Data de nascimento: {dta} |</label>
                            <label className='labell-3 corpadrão'>E-mail: {props.envioModal.email}</label>
                        </div>

                        <div className='lado-e'>

                            <label className='labell-4 corpadrão'>Endereço: {props.envioModal.endereco} |</label>
                            <label className='labell-5 corpadrão'>Cep: {props.envioModal.cep} |</label>
                            <label className='labell-6 corpadrão'>Cidade: {props.envioModal.cidade} |</label>
                            <label className='labell-7 corpadrão'>Telefone: {props.envioModal.telefone}</label>

                        </div>
                        <div className='cimaTabelaModal'>
                            <Form.Group>

                                <Form.Control
                                    onChange={e => { setPesquisar(e.target.value) }}
                                    value={pesquisar}
                                    className='campodepesquisa'
                                    onKeyDown={handleKeyPress}
                                    placeholder="Pesquise por descrição..."
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
                                keyField='id_prontuario'
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

                        </div>


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

                        <did className='lado-d'>
                            <Button className="botaoCadastroModal" onClick={(e) => { enviarDetalhe() }}>
                                <div>Adicionar</div>
                            </Button>

                        </did>



                    </div>




                </div>

                //  <ModalAdicionar></ModalAdicionar> :

            }


        </>
    )
}


