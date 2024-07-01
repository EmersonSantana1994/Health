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


export default function Agendamento() {
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

    async function pesquisaTime() {

        await apiC.post("cadastrar/pesquisar", {
            "time": pesquisarTime,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    inserirData(response.data.result)
                    if (response.data.result.length == 0) {
                        setResultado(true)
                        setMostrarTime(false)
                    } else {
                        setResultado(false)
                        setMostrarTime(true)
                    }

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
            text: <p>
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
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


           
                <div className='cimaAgendamento'>
               

                <div className="cima">
                                    <label className='label-2'>{text.procedimento}</label>
                                    <Form.Control placeholder="Idioma" name="GRUPO" type="text" value={filtroGrupo == 'Selecione' || resetGrupo ? '' : filtroGrupo} className="esconder label-login" onChange={(e) => setCdGrupo(e.target.value)} />
                                    {revelarSelectGrupo === false &&
                                        <Button disabled={revelarSelectGrupo !== '' && revelarSelectGrupo !== null && revelarSelectGrupo !== undefined ? false : true} className="campo-texto-cor-3 campo-select-filtro-7" onClick={() => setRevelarSelectGrupo(!revelarSelectGrupo)}>
                                            <div className="fonte-cor-1 label-campo campo-texto-select-tamanho-2">{resetGrupo ? "Selecione" : filtroGrupo.split('*')[0]}</div>
                                            <img className={revelarSelectGrupo ? "campo-select-icone-ativado nao-selecionavel" : "campo-select-icone-desativado-filtro-b nao-selecionavel"} />
                                        </Button>
                                    }
                                    {revelarSelectGrupo === true &&
                                        <SelectGrupo
                                            rota={"agendamento"}
                                            setRevelarSelectGrupo={setRevelarSelectGrupo}
                                            setFiltroGrupo={setFiltroGrupo}
                                            setCdGrupo={setCdGrupo}
                                            setResetGrupo={setResetGrupo}
                                            nomeGrupo={filtroGrupo}
                                            setIdIdioma={setIdIdioma}
                                        >
                                        </SelectGrupo>
                                    }
                                </div>

                   

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.data}</label>
                            <div className="conteudo-calendario-filtro">
                                            {/* <Form.Control name="ATIVACAO_INICIO" type="text" value={filtroAtivacaoDataInicio ? moment(filtroAtivacaoDataInicio).format("YYYY-MM-DD hh:mm:ss") : filtroAtivacaoDataInicio} className="d-none" /> */}
                                            <Calendario  data={filtroAtivacaoDataInicio} setData={setFiltroAtivacaoDataInicio} dataMax={filtroAtivacaoDataFinal ? filtroAtivacaoDataFinal : dataMax} dataMin={dataMin} rota={"healf"}></Calendario>
                                        </div>
                        </div>

                       

                    </did>

                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.recomendacoes}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder=''
                                className='imput-4'
                            />
                        </div>
                    </did>


                    <did className='lado-d'>
                        <div className='cima'>
                            <label className='label-2'>{text.observacoes}</label>
                            <Form.Control
                                onChange={e => { setJogador(e.target.value) }}
                                value={getName}
                                placeholder=''
                                className='imput-4'
                            />
                        </div>
                    </did>
                    <did className='lado-d'>
                    <Button className="botaoCadastro">
                        <div>Agendar</div>
                    </Button>
                    <Button className="botaoCadastro">
                        <div>Limpar</div>
                    </Button>
                   

                    </did>

                </div>


            </div>


        </>


    )
}