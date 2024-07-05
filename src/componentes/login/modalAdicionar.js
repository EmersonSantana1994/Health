import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import Dropzone from "react-dropzone";
import { Buffer } from 'buffer';
import { useSelector, useDispatch } from 'react-redux';
import DateInput from '../login/heal.js/calendarioAtual';
import moment from 'moment';
import SelectGrupo from '../login/selectGrupo';
import Pronturario2 from '../login/prontuario2';
import { editarProntuario, voltarProntuario, propsEditar } from '../../actions/actions';
import { isValid, parseISO } from 'date-fns';
import MicIcon from '@mui/icons-material/Mic';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicOffIcon from '@mui/icons-material/MicOff';
import { atualizarTabela } from '../../actions/actions';
import ContagemRegre from './contagemRegre';


export default function ModalAdicionar(props) {

    console.log("props 22", props)
   let teste = props.envioModal

    const idUsuario = useSelector(state => state.reduxH.idUsuario);
    const [transcription, setTranscription] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    let recognition = null;
    window.Buffer = Buffer;
    const [itens, setItens] = useState([]);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');
    const navigate = useNavigate();
    const [jogador, setJogador] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const expandirNavegacao = useSelector(state => state.reduxH.expandirNavegacao);

    const [permissaoDescricao, setPermissaoDescricao] = useState();
    const despacho = useDispatch();
    const [inputDate, setInputDate] = useState('');
    const [isValidDate, setIsValidDate] = useState(true);
    const editarProntuarioo = useSelector(state => state.reduxH.editarProntuario);
    const propsEditarr = useSelector(state => state.reduxH.propsEditar);

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
    const [aparecerContagem, setAparecerContagem]  = useState(false)
    
    console.log("props 22", propsEditarr)

   
    const [tipoArquivo, setTipoArquivo] = useState(0);


    const [envioImagem, setEnvioImagem] = useState("");
    const [date, setDate] = useState('');
    const [desabilitarButao, setDesabilitarButao] = useState(true);

    const [monitoraMudanca1, setMonitoraMudanca1] = useState(false);
    const [monitoraMudanca2, setMonitoraMudanca2] = useState(false);
    const [monitoraMudanca3, setMonitoraMudanca3] = useState(false);
    const [descr, setDescr] = useState('');
    const [isValidDescr, setIsValidDescr] = useState(false);
    // const [transcription, setTranscription] = useState('');
    // const [isRecording, setIsRecording] = useState(false);
    // const speechClient = new SpeechClient();
    const [eptestar, setEptestar] = useState();
    const [editableTranscript, setEditableTranscript] = useState('');

    const startRecording = () => {
        setAparecerContagem(true)
        recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'pt-BR'; // Define o idioma para português brasileiro, se necessário
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setIsRecording(true);
        };
        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    setTranscription(prevTranscription => prevTranscription + transcript + '. ');
                    setEditableTranscript(prevTranscription => prevTranscription + transcript + '. ');
                } else {
                    interimTranscript += transcript;
                }
            }
        };

        recognition.onerror = (event) => {
            console.error('Erro no reconhecimento de voz: ', event.error);
            alert('Erro no reconhecimento de voz')
            console.log("Erro no reconhecimento de voz log", event.error)
            setIsRecording(false);
            setAparecerContagem(false)
        };

        recognition.onend = () => {
            setIsRecording(false);
            setAparecerContagem(false)
        };

        recognition.start();
        setEptestar(recognition)
    };

    const handleInputChangee = (event) => {
        setEditableTranscript(event.target.value);
        setTranscription(event.target.value);
    };

    const stopRecording = () => {

        eptestar.stop();
        setIsRecording(false);
        setAparecerContagem(false)
    };

    function atualizarDescricao(event) {
        console.log("cccc", event.target.value )
        setDescr(event.target.value)
    }
    useEffect(() => {
    if(propsEditarr){
        setDescr(propsEditarr.descricao)
        setEditableTranscript(propsEditarr.anotacao)
        var partes = propsEditarr.data.split('/');
        console.log("dataformatada 1", partes )
        var formData = new Date(propsEditarr.data);
        console.log("dataformatada 2", formData )
        let dtY = formData.getFullYear().toString()
        let dtM = (formData.getMonth() + 1).toString()
        let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
        let dtD = formData.getDate().toString()
        let diaFormatado = dtD < 10 ? '0' + dtD : dtD;
        let dta = diaFormatado + "/" + mesFormatado + "/" + dtY
        console.log("dataformatada", dta )
        setDate(dta)
    }
}, [propsEditarr])

    function atualizarData(event) {

        var formData = new Date(event.target.value);
        let dtY = formData.getFullYear().toString()
        let dtM = (formData.getMonth() + 1).toString()
        let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
        let dtD = formData.getDate().toString()
        let diaFormatado = dtD < 10 ? '0' + dtD : dtD;
        let dta = diaFormatado + "/" + mesFormatado + "/" + dtY
        console.log("dtaaaa", dta)
        setDate(dta)
    }

    const handleInputChange = (dataString) => {
        const regexData = /^\d{2}\/\d{2}\/\d{4}$/; // Expressão regular para 'dd/mm/yyyy'
        if (!regexData.test(dataString)) {
            // Formato inválido
        }


        try {
            const data = parseISO(dataString); // Tenta fazer o parse da data
            if (isValid(data)) {
                // setIsValidDate(true)

            }; // Retorna true se for uma data válida
        } catch (error) {
            // return  setIsValidDate(false); // Retorna false se houver erro no parse

        }


        const partesData = dataString.split('/');
        const dia = parseInt(partesData[0]);
        const mes = parseInt(partesData[1]);
        const ano = parseInt(partesData[2]);


        // Validação mais detalhada: verificar se é uma data válida
        const data = new Date(ano, mes - 1, dia); // Note que o mês no Date é zero-indexed (0 = janeiro)
        if (isValid(data)) {
            setIsValidDate(true)
            setMonitoraMudanca2(true)
        } else {
            setIsValidDate(false)
            setMonitoraMudanca2(false)
        }
        if (dataString == '') {
            setIsValidDate(true)
            setMonitoraMudanca2(true)
        }
    };

    const validarDesc = (dataString) => {
        if (dataString == '') {
            setIsValidDescr(true)
            setMonitoraMudanca3(false)
        } else {
            setIsValidDescr(false)
            setMonitoraMudanca3(true)
        }
    };

    useEffect(() => {
        if (monitoraMudanca1 && monitoraMudanca2 && monitoraMudanca3) {
            setDesabilitarButao(false)
        } else {
            setDesabilitarButao(true)
        }

    }, [monitoraMudanca1, monitoraMudanca2, monitoraMudanca3])

    let contagem = 0

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
            await apiC.post("prontuario/listar", {
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



    async function cadastrarArquivo() {
        var partes = date.split('/');
        var formData = new Date(partes[2], partes[1] - 1, partes[0]);
        let dtY = formData.getFullYear().toString()
        let dtM = (formData.getMonth() + 1).toString()
        let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
        let dtD = formData.getDate().toString()
        let diaFormatado = dtD < 10 ? '0' + dtD : dtD;
        let dta = dtY + "-" + mesFormatado + "-" + diaFormatado



        await apiC.post("prontuario/adicionar", {
            "descricao": descr,
            "data": dta,
            "id_usuario": idUsuario,
            "tipo_arquivo": tipoArquivo,
            "anotacao": editableTranscript
        })
            .then(response => {
                if (response.status === 200) {
                    props.atualizar()
                    alert('Arquivo cadastrado')
                    despacho(atualizarTabela(true))
                    despacho(voltarProntuario(false))
                }
            })
            .catch((error) => {

            });


    }





    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                procedimento
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'data',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Data
            </p>,
            formatter: (cell, row) => {
                const formData = new Date(cell)
                let dt = formData.toLocaleString('pt-BR')
                return <p>{dt === null ? '-' : dt}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Adicionar
            </p>,
            formatter: (cell, row) => {
                return <Button>
                    <p>adicionar</p>
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
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]


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

    function tipArquivo(tipo) {
        switch (tipo) {
            case 'consulta':
                return setTipoArquivo(1) + setMonitoraMudanca1(true)
            case 'imagem':
                return setTipoArquivo(2) + setMonitoraMudanca1(true)
            case 'anotacao':
                return setTipoArquivo(3) + setMonitoraMudanca1(true)
            case 'laudo':
                return setTipoArquivo(4) + setMonitoraMudanca1(true)
            case 'exame':
                return setTipoArquivo(5) + setMonitoraMudanca1(true)
        }
    }

    async function editarArquivo() {
        var partes = date.split('/');
        var formData = new Date(partes[2], partes[1] - 1, partes[0]);
        let dtY = formData.getFullYear().toString()
        let dtM = (formData.getMonth() + 1).toString()
        let mesFormatado = dtM < 10 ? '0' + dtM : dtM;
        let dtD = formData.getDate().toString()
        let diaFormatado = dtD < 10 ? '0' + dtD : dtD;
        let dta = dtY + "-" + mesFormatado + "-" + diaFormatado



        await apiC.post("prontuario/editar", {
            "descricao": descr,
            "data": dta,
            "id_usuario": idUsuario,
            "tipo_arquivo": tipoArquivo,
            "anotacao": editableTranscript,
            "id_prontuario": idProntuario
        })
            .then(response => {
                if (response.status === 200) {
                    props.atualizar()
                    alert('Arquivo cadastrado')
                    despacho(atualizarTabela(true))
                    despacho(voltarProntuario(false))
                }
            })
            .catch((error) => {

            });


    }

    function handleLerArquivo(files) {
        let reader = new FileReader();
        let format = files.name.replace(".jpg", "")
        setGetName(format)
        if (files.size <= 9048576 && files.type.split('/')[0] === "image" && files.type.split('/')[0] !== "gif" && files.type.split('/')[0] !== "psd") {
            reader.readAsDataURL(files);
            reader.onloadend = () => {

                setEnvioImagem(reader.result)
                // handleAlterar(reader.result, format)
            }
        } else {
            if (files.size > 9048576) {
                alert('Erro tamanho de foto muito grande')
            } else {
                alert('Erro ao importar foto')
            }

        }
        // if (files.size <= 1048576 && files.type.split('/')[0] === "image" && files.type.split('/')[0] !== "gif" && files.type.split('/')[0] !== "psd") {
        //     reader.readAsDataURL(files);
        //     reader.onloadend = () => {
        //         handleAlterar(reader.result, format)
        //     }
        // } else {
        //     if (files.size > 1048576) {
        //         alert('Erro tamanho de foto muito grande')
        //     } else {
        //         alert('Erro ao importar foto')
        //     }

        // }
    };



    function fechar() {

        despacho(voltarProntuario(false))
        despacho(editarProntuario(false))
    }

    return (
        <>
            {aparecerContagem &&
                <ContagemRegre></ContagemRegre>
            }

            {!editarProntuarioo ?
                <div className='p-lado'>


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




                    <div className='modal'>


                        <did className='modal-content1'>
                            <Button className="botaoVoltar" onClick={fechar} >
                                <p className='voltar' >VOLTAR</p>
                            </Button>
                            <div className='cimaPront'>

                                <div className='lado-d'>
                                    <div className='cima'>
                                        <label className='labell-1'>Descrição</label>
                                        <Form.Control
                                            onChange={e => { validarDesc(e.target.value); setDescr(e.target.value) }}
                                            value={descr}
                                            placeholder='Descrição'
                                            className='imput-5'
                                        />
                                        {isValidDescr && <p className='descriInvalida'>Preencher descrição</p>}
                                    </div>

                                    <div className='cima'>
                                        <label className='labell-1'>Data do procedimento</label>
                                        <div>

                                            <input
                                                className='imput-7'
                                                type="text"
                                                value={date}
                                                onChange={e => { handleInputChange(e.target.value); setDate(e.target.value) }}
                                                placeholder="DD/MM/YYYY"
                                            />
                                            {!isValidDate && <p className='dataInvalida'>Data inválida!</p>}
                                        </div>
                                    </div>
                                </div>

                                <label className='label-5 corpadrão'>{text.tipoDocumento}</label>

                                <Form.Group>
                                    <div className="flex-filtros">
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("consulta") }}>Consulta

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("imagem") }}>Exame de Imagem
                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b  campo-texto-cor-3"></span>

                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("anotacao") }}>Anotção clinica

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b  campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("laudo") }}>Laudo

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("exame") }}>Exame de laboratório

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>

                                    </div>

                                </Form.Group>
                                <did className='lado-d'>
                                    <div className='cima'>
                                        <label className='label-4'>Anotação</label>
                                        {/* <Form.Control
                           onChange={e => { setObservacoes(e.target.value) }}
                           value={observacoes}
                           placeholder=''
                           className='imput-4'
                       /> */}
                                        {/* <Form.Control name="dsCallerIds" value={editableTranscript} className="campo-texto-cor-3 campo-texto-area" as="textarea"
                                  placeholder=""
                                  rows="2" maxlength="500" onChange={e => {  handleInputChangee }} /> */}
                                        <textarea
                                            value={editableTranscript}
                                            onChange={handleInputChangee}
                                            disabled={isRecording}
                                            className="campo-texto-cor-3 campo-texto-area"
                                            rows={4}
                                            cols={50}
                                        />
                                    </div>
                                </did>
                                <div>
                                    {!isRecording ?
                                        <button className='gravar' onClick={startRecording}>

                                            <MicIcon className='iconeGravador' style={{ fontSize: 42, cursor:pointer }} />
                                            {/* {'Iniciar Gravação'} */}
                                        </button>
                                        :
                                        <button className='gravar'>

                                            <GraphicEqIcon className='iconeGravador' style={{ fontSize: 42 }} />
                                            {/* {'Iniciar Gravação'} */}
                                        </button>

                                    }
                                    {isRecording &&
                                        <p className='gravando'>
                                            {'Gravando...'}
                                        </p>
                                    }

                                    {isRecording &&
                                        <MicOffIcon className='iconePararGravador' style={{ fontSize: 42, cursor:pointer }} onClick={stopRecording} />
                                    }
                                    <div>

                                    </div>

                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className='lado-d'>

                                    <Dropzone onDrop={acceptedFiles => handleLerArquivo(acceptedFiles[0])}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />

                                                    {/* <div>{text.importarFoto}</div> */}
                                                    <div class="wrapper">
                                                        <div class="link_wrapper">
                                                            <a className='ae1' href="#">Upload</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <label className='labell-2'>Arquivo</label>
                                    <Form.Control
                                        onChange={e => { setJogador(e.target.value) }}
                                        value={getName}
                                        className='imput-8'
                                    />
                                </div>

                            </div>




                            <did className='lado-d'>

                                {!desabilitarButao ?
                                    <Button className="botaoCadastro" onClick={cadastrarArquivo}>
                                        <div>Enviar</div>
                                    </Button>
                                    :
                                    <Button disabled className="botaoCadastroDesab" onClick={cadastrarArquivo}>
                                        <div>Enviar</div>
                                    </Button>
                                }


                            </did>

                        </did>


                    </div>


                </div>

                :

                <div className='p-lado'>


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




                    <div className='modal'>


                        <did className='modal-content1'>
                            <Button className="botaoVoltar" onClick={fechar} >
                                <p className='voltar' >VOLTAR</p>
                            </Button>
                            <div className='cimaPront'>

                                <div className='lado-d'>
                                    <div className='cima'>
                                        <label className='labell-1'>Descrição</label>
                                        <Form.Control
                                            onChange={e => { validarDesc(e.target.value); atualizarDescricao(e) }}
                                            value={descr}
                                            placeholder='Descrição'
                                            className='imput-5'
                                        />
                                        {isValidDescr && <p className='descriInvalida'>Preencher descrição</p>}
                                    </div>

                                    <div className='cima'>
                                        <label className='labell-1'>Data do procedimento</label>
                                        <div>

                                            <input
                                                className='imput-7'
                                                type="text"
                                                value={date}
                                                onChange={e => { handleInputChange(e.target.value); atualizarData(e) }}
                                                placeholder="DD/MM/YYYY"
                                            />
                                            {!isValidDate && <p className='dataInvalida'>Data inválida!</p>}
                                        </div>
                                    </div>
                                </div>

                                <label className='label-5 corpadrão'>{text.tipoDocumento}</label>

                                <Form.Group>
                                    <div className="flex-filtros">
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("consulta") }}>Consulta

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("imagem") }}>Exame de Imagem
                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b  campo-texto-cor-3"></span>

                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("anotacao") }}>Anotção clinica

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b  campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("laudo") }}>Laudo

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>
                                        <label className="label-radio-1 corpadrão" onChange={() => { tipArquivo("exame") }}>Exame de laboratório

                                            <input type="radio" name="tipo_doc" />

                                            <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                        </label>

                                    </div>

                                </Form.Group>
                                <did className='lado-d'>
                                    <div className='cima'>
                                        <label className='label-4'>Anotação</label>
                                        {/* <Form.Control
                       onChange={e => { setObservacoes(e.target.value) }}
                       value={observacoes}
                       placeholder=''
                       className='imput-4'
                   /> */}
                                        {/* <Form.Control name="dsCallerIds" value={editableTranscript} className="campo-texto-cor-3 campo-texto-area" as="textarea"
                              placeholder=""
                              rows="2" maxlength="500" onChange={e => {  handleInputChangee }} /> */}
                                        <textarea
                                            value={editableTranscript}
                                            onChange={handleInputChangee}
                                            disabled={isRecording}
                                            className="campo-texto-cor-3 campo-texto-area"
                                            rows={4}
                                            cols={50}
                                        />
                                    </div>
                                </did>
                                <div>
                                    {!isRecording ?
                                        <button className='gravar' onClick={startRecording}>

                                            <MicIcon className='iconeGravador' style={{ fontSize: 42}} />
                                            {/* {'Iniciar Gravação'} */}
                                        </button>
                                        :
                                        <button className='gravar'>

                                            <GraphicEqIcon className='iconeGravador' style={{ fontSize: 42 }} />
                                            {/* {'Iniciar Gravação'} */}
                                        </button>

                                    }
                                    {isRecording &&
                                        <p className='gravando'>
                                            {'Gravando...'}
                                        </p>
                                    }

                                    {isRecording &&
                                        <MicOffIcon className='iconePararGravador' style={{ fontSize: 42}} onClick={stopRecording} />
                                    }
                                    <div>

                                    </div>

                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div>

                                <div className='lado-d'>

                                    <Dropzone onDrop={acceptedFiles => handleLerArquivo(acceptedFiles[0])}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section>
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />

                                                    {/* <div>{text.importarFoto}</div> */}
                                                    <div class="wrapper">
                                                        <div class="link_wrapper">
                                                            <a className='ae1' href="#">Upload</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <label className='labell-2'>Arquivo</label>
                                    <Form.Control
                                        onChange={e => { setJogador(e.target.value) }}
                                        value={getName}
                                        className='imput-8'
                                    />
                                </div>

                            </div>




                            <did className='lado-d'>

                                {!desabilitarButao ?
                                    <Button className="botaoCadastro" onClick={cadastrarArquivo}>
                                        <div>Editar</div>
                                    </Button>
                                    :
                                    <Button className="botaoCadastro" onClick={editarArquivo}>
                                        <div>Editar</div>
                                    </Button>
                                }


                            </did>

                        </did>


                    </div>


                </div>

            }



        </>


    )
}