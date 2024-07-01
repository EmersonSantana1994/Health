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
import { voltarProntuario } from '../../actions/actions';
import { isValid, parseISO } from 'date-fns';
import MicIcon from '@mui/icons-material/Mic';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import MicOffIcon from '@mui/icons-material/MicOff';


export default function ModalAdicionar(props) {
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

    const [imagem, setImagem] = useState(false);
    const [texto, setTexto] = useState(false);
    const [pdf, setPdf] = useState(false);
    const [video, setVideo] = useState(false);
    const [arquivo, setArquivo] = useState(false);

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
        };

        recognition.onend = () => {
            setIsRecording(false);
        };

        recognition.start();
        console.log("recognition", recognition)
        setEptestar(recognition)
    };

    const handleInputChangee = (event) => {
        setEditableTranscript(event.target.value);
        setTranscription(event.target.value);
    };

    const stopRecording = () => {

        console.log("iniciou parar", recognition)

        console.log("continua a parar", eptestar)
        eptestar.stop();
        console.log("parou", recognition)
        setIsRecording(false);

    };

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
        console.log("1111")
        if (dataString == '') {
            console.log("22222")
            setIsValidDescr(true)
            setMonitoraMudanca3(false)
        } else {
            setIsValidDescr(false)
            setMonitoraMudanca3(true)
        }
    };

    useEffect(() => {
        console.log("monitoraMudanca1", monitoraMudanca1)
        console.log("monitoraMudanca2", monitoraMudanca2)
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

        if (props.id === 0) {
            await apiC.post("prontuario/adicionar", {
                "nome": observacoes,
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Arquivo cadastrado')
                        props.atualizar()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)

                });
        } else {
            await apiC.post("prontuario/adicionar2", {
                "nome": observacoes,
                "id": props.id,
            })
                .then(response => {
                    if (response.status === 200) {
                        alert('Arquivo cadastrado')
                        props.atualizar()
                    }
                })
                .catch((error) => {
                    alert(error.response.data)

                });
        }


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

    function tipoArquivo(tipo) {
        switch (tipo) {
            case 'imagem':
                return setArquivo(false) + setMonitoraMudanca1(true)
            case 'pdf':
                return setArquivo(false) + setImagem(false) + setPdf(true)
                    + setTexto(false) + setVideo(false) + setMonitoraMudanca1(true)
            case 'texto':
                return setArquivo(false) + setImagem(false) + setPdf(false)
                    + setTexto(true) + setVideo(false) + setMonitoraMudanca1(true)
            case 'video':
                return setArquivo(false) + setImagem(false) + setPdf(false)
                    + setTexto(false) + setVideo(true) + setMonitoraMudanca1(true)
            case 'arquivo':
                return setArquivo(true) + setImagem(false) + setPdf(false)
                    + setTexto(false) + setVideo(false) + setMonitoraMudanca1(true)
        }
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

    }

    return (
        <>
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
                                    <label className="label-radio-1 corpadrão" onChange={() => { tipoArquivo("imagem") }}>Consulta

                                        <input type="radio" name="tipo_doc" />

                                        <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                    </label>
                                    <label className="label-radio-1 corpadrão" onChange={() => { tipoArquivo("arquivo") }}>Exame de Imagem
                                        <input type="radio" name="tipo_doc" />

                                        <span className="checkbox-filtros-b  campo-texto-cor-3"></span>

                                    </label>
                                    <label className="label-radio-1 corpadrão" onChange={() => { tipoArquivo("pdf") }}>Anotção clinica

                                        <input type="radio" name="tipo_doc" />

                                        <span className="checkbox-filtros-b  campo-texto-cor-3"></span>
                                    </label>
                                    <label className="label-radio-1 corpadrão" onChange={() => { tipoArquivo("video") }}>Laudo

                                        <input type="radio" name="tipo_doc" />

                                        <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                                    </label>
                                    <label className="label-radio-1 corpadrão" onChange={() => { tipoArquivo("texto") }}>Exame de laboratório

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

                                        <MicIcon className='iconeGravador' style={{ fontSize: 42 }} />
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
                                    <MicOffIcon className='iconePararGravador' style={{ fontSize: 42 }} onClick={stopRecording} />
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


        </>


    )
}