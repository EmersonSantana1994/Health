import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Torneio() {


    //VARIAVEIS
    const navigate = useNavigate();
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
    const [time17, setTime17] = useState('');
    const [time18, setTime18] = useState('');
    const [time19, setTime19] = useState('');
    const [time20, setTime20] = useState('');
    const [time21, setTime21] = useState('');
    const [time22, setTime22] = useState('');
    const [time23, setTime23] = useState('');
    const [time24, setTime24] = useState('');
    const [placarSalvo1, setPlacarSalvo1] = useState('');
    const [placarSalvo2, setPlacarSalvo2] = useState('');
    const [placarSalvo3, setPlacarSalvo3] = useState('');
    const [placarSalvo4, setPlacarSalvo4] = useState('');
    const [placarSalvo5, setPlacarSalvo5] = useState('');
    const [placarSalvo6, setPlacarSalvo6] = useState('');
    const [placarSalvo7, setPlacarSalvo7] = useState('');
    const [placarSalvo8, setPlacarSalvo8] = useState('');
    const [placarSalvo9, setPlacarSalvo9] = useState('');
    const [placarSalvo10, setPlacarSalvo10] = useState('');
    const [placarSalvo11, setPlacarSalvo11] = useState('');
    const [placarSalvo12, setPlacarSalvo12] = useState('');
    const [placarSalvo13, setPlacarSalvo13] = useState('');
    const [placarSalvo14, setPlacarSalvo14] = useState('');
    const [placarSalvo15, setPlacarSalvo15] = useState('');
    const [placarSalvo16, setPlacarSalvo16] = useState('');
    const [placarSalvo17, setPlacarSalvo17] = useState('');
    const [placarSalvo18, setPlacarSalvo18] = useState('');
    const [placarSalvo19, setPlacarSalvo19] = useState('');
    const [placarSalvo20, setPlacarSalvo20] = useState('');
    const [placarSalvo21, setPlacarSalvo21] = useState('');
    const [placarSalvo22, setPlacarSalvo22] = useState('');
    const [placarSalvo23, setPlacarSalvo23] = useState('');
    const [placarSalvo24, setPlacarSalvo24] = useState('');
    const [mostrarPlacarSalvo1, setMostrarPlacarSalvo1] = useState(false);
    const [mostrarPlacarSalvo2, setMostrarPlacarSalvo2] = useState(false);
    const [mostrarPlacarSalvo3, setMostrarPlacarSalvo3] = useState(false);
    const [mostrarPlacarSalvo4, setMostrarPlacarSalvo4] = useState(false);
    const [mostrarPlacarSalvo5, setMostrarPlacarSalvo5] = useState(false);
    const [mostrarPlacarSalvo6, setMostrarPlacarSalvo6] = useState(false);
    const [mostrarPlacarSalvo7, setMostrarPlacarSalvo7] = useState(false);
    const [mostrarPlacarSalvo8, setMostrarPlacarSalvo8] = useState(false);
    const [mostrarPlacarSalvo9, setMostrarPlacarSalvo9] = useState(false);
    const [mostrarPlacarSalvo10, setMostrarPlacarSalvo10] = useState(false);
    const [mostrarPlacarSalvo11, setMostrarPlacarSalvo11] = useState(false);
    const [mostrarPlacarSalvo12, setMostrarPlacarSalvo12] = useState(false);
    const [mostrarPlacarSalvo13, setMostrarPlacarSalvo13] = useState(false);
    const [mostrarPlacarSalvo14, setMostrarPlacarSalvo14] = useState(false);
    const [mostrarPlacarSalvo15, setMostrarPlacarSalvo15] = useState(false);
    const [mostrarPlacarSalvo16, setMostrarPlacarSalvo16] = useState(false);
    const [mostrarPlacarSalvo17, setMostrarPlacarSalvo17] = useState(false);
    const [mostrarPlacarSalvo18, setMostrarPlacarSalvo18] = useState(false);
    const [mostrarPlacarSalvo19, setMostrarPlacarSalvo19] = useState(false);
    const [mostrarPlacarSalvo20, setMostrarPlacarSalvo20] = useState(false);
    const [mostrarPlacarSalvo21, setMostrarPlacarSalvo21] = useState(false);
    const [mostrarPlacarSalvo22, setMostrarPlacarSalvo22] = useState(false);
    const [mostrarPlacarSalvo23, setMostrarPlacarSalvo23] = useState(false);
    const [mostrarPlacarSalvo24, setMostrarPlacarSalvo24] = useState(false);
    const [dataPlacar1, setDataPlacar1] = useState('');
    const [dataPlacar2, setDataPlacar2] = useState('');
    const [dataPlacar3, setDataPlacar3] = useState('');
    const [dataPlacar4, setDataPlacar4] = useState('');
    const [dataPlacar5, setDataPlacar5] = useState('');
    const [dataPlacar6, setDataPlacar6] = useState('');
    const [dataPlacar7, setDataPlacar7] = useState('');
    const [dataPlacar8, setDataPlacar8] = useState('');
    const [dataPlacar9, setDataPlacar9] = useState('');
    const [dataPlacar10, setDataPlacar10] = useState('');
    const [dataPlacar11, setDataPlacar11] = useState('');
    const [dataPlacar12, setDataPlacar12] = useState('');


    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);
    const [numero4, setNumero4] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [placar1, setPlacar1] = useState('');
    const [placar2, setPlacar2] = useState('');
    const [placar3, setPlacar3] = useState('');
    const [placar4, setPlacar4] = useState('');
    const [clube1, setClube1] = useState('');
    const [clube2, setClube2] = useState('');
    const [clube3, setClube3] = useState('');
    const [clube4, setClube4] = useState('');
    const [cadastrarTime, setCadastrarTime] = useState(false);
    const [itens, setItens] = useState([]);
    const [itensSorteados, setItensSorteados] = useState([]);
    const [novoTime, setNovoTime] = useState([]);
    const [novoTime2, setNovoTime2] = useState([]);
    const [novoTime3, setNovoTime3] = useState([]);
    const [novoTime4, setNovoTime4] = useState([]);
    const [timesM, setTimesM] = useState([]);
    const [timesS, setTimesS] = useState([]);
    const [teste, setTeste] = useState('');
    const [testeArray, setTesteArray] = useState([]);
    const [timesSorteadosArray1, setTimesSorteadosArray1] = useState('');
    const [timesSorteadosArray2, setTimesSorteadosArray2] = useState('');
    const [timesSorteadosArray3, setTimesSorteadosArray3] = useState('');
    const [timesSorteadosArray4, setTimesSorteadosArray4] = useState('');
    const [campeao, setCampeao] = useState('');
    const [mostrarCampeao, setMostrarCampeao] = useState(false);
    const [mostrarVencedores, setMostrarVencedores] = useState(false);

    let totalItens = 0
    let contador = 0
    let contadorSorteado = 0
    let itensVar = []
    let itensVarSorteado = []
    let placarTime1 = 0
    let placarTime2 = 0
    let placarTime3 = 0
    let placarTime4 = 0
    let times = []
    let timesSor = []
    let timesSorteadosArray = []
    let dadosSelecionados = []
    let dadosSelecionadosSorteados = []

    useEffect(() => {
        verificaSeTemTimeCadastrado()
    }, [])


    useEffect(() => {
        verificaPlacares()
    }, [])

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
                .then(response => {
                })
                .catch((error) => {
                    if (error.response.data == 'não autenticado') {
                        navigate('/')
                    }
                });
        }
        setTimeout(autenticar, 5000);
    }, [])

    async function formatarData(data) {
        const formData = new Date(data)
        let dt = formData.toLocaleString('pt-BR')
        return dt
    }

    async function verificaPlacares() {
        let posicaoPlacar = []

        await apiC.post("torneio/buscarPlacares", {
        })
            .then(response => {
                for (let i = 0; i < response.data.result.length; i++) {
                    if (i == 0 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo1(response.data.result[i].resultado)
                        setMostrarPlacarSalvo1(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar1(dt)
                    } else if (i == 1 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo2(response.data.result[i].resultado)
                        setMostrarPlacarSalvo2(true)
                    } else if (i == 2 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo3(response.data.result[i].resultado)
                        setMostrarPlacarSalvo3(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar2(dt)
                    } else if (i == 3 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo4(response.data.result[i].resultado)
                        setMostrarPlacarSalvo4(true)
                    } else if (i == 4 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo5(response.data.result[i].resultado)
                        setMostrarPlacarSalvo5(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar3(dt)
                    } else if (i == 5 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo6(response.data.result[i].resultado)
                        setMostrarPlacarSalvo6(true)
                    } else if (i == 6 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo7(response.data.result[i].resultado)
                        setMostrarPlacarSalvo7(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar4(dt)
                    } else if (i == 7 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo8(response.data.result[i].resultado)
                        setMostrarPlacarSalvo8(true)
                    } else if (i == 8 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo9(response.data.result[i].resultado)
                        setMostrarPlacarSalvo9(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar5(dt)
                    } else if (i == 9 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo10(response.data.result[i].resultado)
                        setMostrarPlacarSalvo10(true)
                    } else if (i == 10 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo11(response.data.result[i].resultado)
                        setMostrarPlacarSalvo11(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar6(dt)
                    } else if (i == 11 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo12(response.data.result[i].resultado)
                        setMostrarPlacarSalvo12(true)
                    } else if (i == 12 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo13(response.data.result[i].resultado)
                        setMostrarPlacarSalvo13(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar7(dt)
                    } else if (i == 13 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo14(response.data.result[i].resultado)
                        setMostrarPlacarSalvo14(true)
                    } else if (i == 14 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo15(response.data.result[i].resultado)
                        setMostrarPlacarSalvo15(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar8(dt)
                    } else if (i == 15 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo16(response.data.result[i].resultado)
                        setMostrarPlacarSalvo16(true)
                    } else if (i == 16 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo17(response.data.result[i].resultado)
                        setMostrarPlacarSalvo17(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar9(dt)
                    } else if (i == 17 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo18(response.data.result[i].resultado)
                        setMostrarPlacarSalvo18(true)
                    } else if (i == 18 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo19(response.data.result[i].resultado)
                        setMostrarPlacarSalvo19(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar10(dt)
                    } else if (i == 19 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo20(response.data.result[i].resultado)
                        setMostrarPlacarSalvo20(true)
                    } else if (i == 20 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo21(response.data.result[i].resultado)
                        setMostrarPlacarSalvo21(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar11(dt)
                    } else if (i == 21 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo22(response.data.result[i].resultado)
                        setMostrarPlacarSalvo22(true)
                    } else if (i == 22 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo23(response.data.result[i].resultado)
                        setMostrarPlacarSalvo23(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar12(dt)
                    } else if (i == 23 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null') {
                        setPlacarSalvo24(response.data.result[i].resultado)
                        setMostrarPlacarSalvo24(true)
                    }
                }

            })
            .catch((error) => {
                console.log("erro ao chamar os placlares", error)
            });
    }

    async function verificaSeTemTimeCadastrado() {

        await apiC.post("torneio/buscar")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        for (let i = 0; i < response.data.length; i++) {
                            if (contador === i) {
                                let k = i
                                for (let j = 0; j < response.data.length; j++) {
                                    itensVar[k] = response.data[j]
                                    k++
                                }
                            }
                            setItens(JSON.parse(JSON.stringify(itensVar)))
                        }
                        buscarTimesSorteados()
                    }

                    else {
                        alert('nenhum time cadatrado, por favor faça o cadastro dos times')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function anunciarCampeao() {
        await apiC.post("torneio/buscar")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        for (let i = 0; i < response.data.length; i++) {
                            if (contador === i) {
                                let k = i
                                for (let j = 0; j < response.data.length; j++) {
                                    itensVar[k] = response.data[j]
                                    k++
                                }
                            }
                            setCampeao(JSON.parse(JSON.stringify(itensVar[0].nome)))
                        }
                        setMostrarCampeao(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    const selecaoLinhas = {
        mode: 'checkbox',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id, row.nome)
            } else {
                handleDesselecionar(row.id, row.nome)
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect) {
                handleSelecionarTodos()
            } else {
                handleDesselecionarTodos()
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
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].id == simcard) {
                dadosSelecionados.push(itens[i].id);
                dadosSelecionadosSorteados.push(itens[i].nome);
                break;
            }
        }
    }

    async function handleDeletar() {
        setCarregando(true)

        await apiC.post("torneio/deletar", {
        })
            .then(response => {
                if (response.status === 200) {
                    alert('deletado com sucesso!')
                    AtualizaTabela()
                }
            })
            .catch((error) => {
                alert('erro ao deletar jogador da tabela de pontos corridos')
                setCarregando(false)
            });

        await apiC.post("torneio/deletartimesorteado", {
        })
            .then(response => {
                if (response.status === 200) {
                    location.reload()
                }
            })
            .catch((error) => {
                alert('erro ao deletar jogador da tabela de times sorteados')
                setCarregando(false)
            });


    }

    async function deletarTimeSorteado(item) {
        await apiC.post("torneio/deletarTimeSorteado", {
            "id": item[0].id,
        })
    }

    function handleSelecionarTodos() {
        itens.map((item, i) => {
            if (itens[i].id) {
                dadosSelecionados.push(itens[i].id);
                dadosSelecionadosSorteados.push(itens[i].nome);
            }
        })
    }

    function handleDesselecionar(simcard, nome) {
        for (let i = 0; i < dadosSelecionados.length; i++) {
            if (dadosSelecionados[i] == simcard) {
                dadosSelecionados.splice(i, 1);
                break;
            }
            if (dadosSelecionadosSorteados[i] == nome) {
                dadosSelecionadosSorteados.splice(i, 1);
                break;
            }
        }
    }

    function handleDesselecionarTodos() {
    }

    async function buscarTimesSorteados() {
        await apiC.post("torneio/buscarTimeSorteado")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        if (!timesS.length > 0) {
                            for (let i = 0; i < response.data.length; i++) {
                                timesM.push(response.data[i].nome)
                                timesS.push(response.data[i].id)
                                timesSorteadosArray.push(response.data[i].nome)
                            }
                        }

                        setTimesM(timesM)
                        setTesteArray(timesM)
                        setTeste("Testeeee")
                        setTimesS(timesS)
                        setTimesSorteadosArray1(response.data[0].nome)
                        setTimesSorteadosArray2(response.data[1].nome)
                        setTimesSorteadosArray3(response.data[2].nome)
                        setTimesSorteadosArray4(response.data[3].nome)
                        for (let i = 0; i < response.data.length; i++) {
                            if (contadorSorteado === i) {
                                let k = i
                                for (let j = 0; j < response.data.length; j++) {
                                    itensVarSorteado[k] = response.data[j]
                                    k++
                                }
                            }
                            setItensSorteados(JSON.parse(JSON.stringify(itensVarSorteado)))
                        }
                    }

                    else {
                        alert('nenhum time cadatrado na tabela de times sorteados, por favor faça o cadastro dos times')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function AtualizaTabela() {
        await apiC.post("torneio/buscar")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        for (let i = 0; i < response.data.length; i++) {
                            if (contador === i) {
                                let k = i
                                for (let j = 0; j < response.data.length; j++) {
                                    itensVar[k] = response.data[j]
                                    k++
                                }
                            }
                            setItens(JSON.parse(JSON.stringify(itensVar)))
                        }

                    } else {
                        alert('erro ao atualizar a tabela')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function sortearTimes() {
        let numeroSorteado = []
        let sorteado1 = Math.floor(Math.random() * timesM.length)
        let sorteado2 = Math.floor(Math.random() * timesM.length)
        while (sorteado2 == sorteado1) {
            sorteado2 = Math.floor(Math.random() * timesM.length)
        }
        let sorteado3 = Math.floor(Math.random() * timesM.length)
        while (sorteado3 == sorteado2 || sorteado3 == sorteado1) {
            sorteado3 = Math.floor(Math.random() * timesM.length)
        }
        let sorteado4 = Math.floor(Math.random() * timesM.length)
        while (sorteado4 == sorteado1 || sorteado4 == sorteado2 || sorteado4 == sorteado3) {
            sorteado4 = Math.floor(Math.random() * timesM.length)
        }
        numeroSorteado.push(sorteado1, sorteado2, sorteado3, sorteado4)
        for (let i = 0; i < timesM.length; i++) {
            setCarregando(true)
            await apiC.put("torneio/atualizaTimeSorteado", {
                "id": timesS[i],
                "nome": timesM[numeroSorteado[i]]
            }).then(response => {
                if (response.status === 200) {

                }
                setCarregando(false)
            })
                .catch((error) => {
                    setCarregando(false)
                    alert('Erro ao atualizar sorteio do time ', timesM[numeroSorteado[i]])
                });
        }
        buscarTimesSorteados()
    }



    // useEffect(() => {

    //     sortearTimes()

    // }, [])

    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA

    async function atualizaTime(dados, pontos, saldo) {
        setCarregando(true)
        await apiC.put("torneio/atualizaTime", {
            "id": dados[0].id,
            "nome": dados[0].nome,
            "pontos": dados[0].pontos + pontos,
            "saldo": dados[0].saldo + saldo
        }).then(response => {
            if (response.status === 200) {
                AtualizaTabela()
                alert('feito!')
            }
            setCarregando(false)
        })
            .catch((error) => {
                setCarregando(false)
                alert('Erro ao atualizar pontos do time ', dados[0].nome)
            });
    }

    async function atualizaTimePerdedor(dados, saldo) {
        setCarregando(true)
        await apiC.put("torneio/atualizaTime", {
            "id": dados[0].id,
            "nome": dados[0].nome,
            "pontos": dados[0].pontos,
            "saldo": dados[0].saldo - saldo
        }).then(response => {
            if (response.status === 200) {
                AtualizaTabela()
                alert('feito!')
            }
            setCarregando(false)
        })
            .catch((error) => {
                setCarregando(false)
                alert('Erro ao atualizar pontos do time ', dados[0].nome)
            });
    }


    async function VerificaParaAtualizaTime(nome, pontos, saldo, timeperdedor) {
        await apiC.post("torneio/bucarNome", {
            "nome": nome
        })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        atualizaTime(response.data, pontos, saldo)
                    } else {
                        alert('nome do time não encontrado')
                    }
                    // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS

                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
        await apiC.post("torneio/bucarNome", {
            "nome": timeperdedor
        })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        atualizaTimePerdedor(response.data, saldo)
                    } else {
                        alert('nome do time perdedor não encontrado')
                    }
                    // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS

                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });


    }

    async function limparPlacar(p1, p2) {
        if (p1 == 1) {
            setPlacar1('')
        }
        if (p2 == 2) {
            setPlacar2('')
        }
    }

    async function rodada(rod) {
        if (placar1 == "3" && placar2 == "2" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray2)
            setPlacar1('')
            setPlacar2('')
        } else if (placar1 == "3" && placar2 == "1" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray2)
            setPlacar1('')
            setPlacar2('')
        } else if (placar1 == "4" && placar2 == "0" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray2)
            setPlacar1('')
            setPlacar2('')
        }
        if (placar1 == "3" && placar3 == "2" && rod == "2") {
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray3)
            setPlacar1('')
            setPlacar3('')
        } else if (placar1 == "3" && placar3 == "1" && rod == "2") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray3)
            setPlacar1('')
            setPlacar3('')
        } else if (placar1 == "4" && placar3 == "0" && rod == "2") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray3)
            setPlacar1('')
            setPlacar3('')
        }
        if (placar1 == "3" && placar4 == "2" && rod == "3") {
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray4)
            setPlacar1('')
            setPlacar4('')
        } else if (placar1 == "3" && placar4 == "1" && rod == "3") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray4)
            setPlacar1('')
            setPlacar4('')
        } else if (placar1 == "4" && placar4 == "0" && rod == "3") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray4)
            setPlacar1('')
            setPlacar4('')
        }
        if (placar2 == "3" && placar1 == "2" && rod == "1") {
            setPlacar1('')
            setPlacar2('')
            placarTime2 = placarTime2 + 1
            await limparPlacar(1, 2)
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray1)
        } else if (placar2 == "3" && placar1 == "1" && rod == "1") {
            placarTime2 = placarTime2 + 2
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray1)
            setPlacar1('')
            setPlacar2('')
        } else if (placar2 == "4" && placar1 == "0" && rod == "1") {
            placarTime2 = placarTime2 + 3
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray1)
            setPlacar1('')
            setPlacar2('')
        }
        if (placar2 == "3" && placar3 == "2" && rod == "3") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray3)
            setPlacar3('')
            setPlacar2('')
        } else if (placar2 == "3" && placar3 == "1" && rod == "3") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray3)
            setPlacar3('')
            setPlacar2('')
        } else if (placar2 == "4" && placar3 == "0" && rod == "3") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray3)
            setPlacar3('')
            setPlacar2('')
        }
        if (placar2 == "3" && placar4 == "2" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray4)
            setPlacar4('')
            setPlacar2('')
        } else if (placar2 == "3" && placar4 == "1" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray4)
            setPlacar4('')
            setPlacar2('')
        } else if (placar2 == "4" && placar4 == "0" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray4)
            setPlacar4('')
            setPlacar2('')
        }
        if (placar3 == "3" && placar1 == "2" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray1)
            setPlacar3('')
            setPlacar1('')
        } else if (placar3 == "3" && placar1 == "1" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray1)
            setPlacar3('')
            setPlacar1('')
        } else if (placar3 == "4" && placar1 == "0" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray1)
            setPlacar3('')
            setPlacar1('')
        }
        if (placar3 == "3" && placar2 == "2" && rod == "3") {
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray2)
            setPlacar3('')
            setPlacar2('')
        } else if (placar3 == "3" && placar2 == "1" && rod == "3") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray2)
            setPlacar3('')
            setPlacar2('')
        } else if (placar3 == "4" && placar2 == "0" && rod == "3") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray2)
            setPlacar3('')
            setPlacar2('')
        }
        if (placar3 == "3" && placar4 == "2" && rod == "1") {
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray4)
            setPlacar3('')
            setPlacar4('')
        } else if (placar3 == "3" && placar4 == "1" && rod == "1") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray4)
            setPlacar3('')
            setPlacar4('')
        } else if (placar3 == "4" && placar4 == "0" && rod == "1") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray4)
            setPlacar3('')
            setPlacar4('')
        }
        if (placar4 == "3" && placar1 == "2" && rod == "3") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray1)
            setPlacar1('')
            setPlacar4('')
        } else if (placar4 == "3" && placar1 == "1" && rod == "3") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray1)
            setPlacar1('')
            setPlacar4('')
        } else if (placar4 == "4" && placar1 == "0" && rod == "3") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray1)
            setPlacar1('')
            setPlacar4('')
        }
        if (placar4 == "3" && placar2 == "2" && rod == "2") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray2)
            setPlacar2('')
            setPlacar4('')
        } else if (placar4 == "3" && placar2 == "1" && rod == "2") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray2)
            setPlacar2('')
            setPlacar4('')
        } else if (placar4 == "4" && placar2 == "0" && rod == "2") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray2)
            setPlacar2('')
            setPlacar4('')
        }
        if (placar4 == "3" && placar3 == "2" && rod == "1") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray3)
            setPlacar3('')
            setPlacar4('')
        } else if (placar4 == "3" && placar3 == "1" && rod == "1") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray3)
            setPlacar3('')
            setPlacar4('')
        } else if (placar4 == "4" && placar3 == "0" && rod == "1") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray3)
            setPlacar3('')
            setPlacar4('')
        }
        if (!placar1 == "1" && !placar1 == "2" && !placar1 == "3" && !placar1 == "4"
            && !placar2 == "1" && !placar2 == "2" && !placar2 == "3" && !placar2 == "4"
            && !placar3 == "1" && !placar3 == "2" && !placar3 == "3" && !placar3 == "4"
            && !placar4 == "1" && !placar4 == "2" && !placar4 == "3" && !placar4 == "4") {
            alert("Placar de um dos resultados não corresponde ao que campeonato exige")
        }
        salvarPlacar()
    }

    async function deletarPlacarRodada(p1, p2, p3, p4) {
        let posicao = []
        let idPlacar = []
        await apiC.post("torneio/verificar")
            .then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    if (i == p1) {
                        idPlacar.push(response.data[i].id)
                    }
                    if (i == p2) {
                        idPlacar.push(response.data[i].id)
                    } if (i == p3) {
                        idPlacar.push(response.data[i].id)
                    } if (i == p4) {
                        idPlacar.push(response.data[i].id)
                    }

                }
            })
            .catch((error) => {
            });



        await apiC.post("torneio/deletarPlacar", {
            "id": idPlacar,
        })
            .then(response => {
                location.reload()
            })
            .catch((error) => {
                alert('erro ao trazer ao deletar o placar ')
            });

    }



    async function salvarPlacar() {
        let id1
        let id2
        let id3
        let id4
        let id5
        let id6
        let id7
        let id8
        let id9
        let id10
        let id11
        let id12
        let id13
        let id14
        let id15
        let id16
        let id17
        let id18
        let id19
        let id20
        let id21
        let id22
        let id23
        let id24

        await apiC.post("torneio/verificar")
            .then(response => {
                id1 = response.data[0].id
                id2 = response.data[1].id
                id3 = response.data[2].id
                id4 = response.data[3].id
                id5 = response.data[4].id
                id6 = response.data[5].id
                id7 = response.data[6].id
                id8 = response.data[7].id
                id9 = response.data[8].id
                id10 = response.data[9].id
                id11 = response.data[10].id
                id12 = response.data[11].id
                id13 = response.data[12].id
                id14 = response.data[13].id
                id15 = response.data[14].id
                id16 = response.data[15].id
                id17 = response.data[16].id
                id18 = response.data[17].id
                id19 = response.data[18].id
                id20 = response.data[19].id
                id21 = response.data[20].id
                id22 = response.data[21].id
                id23 = response.data[22].id
                id24 = response.data[23].id
            })
            .catch((error) => {
            });


        if (time1 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id1,
                "resultado": time1
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id1,
                    })
                        .then(response => {
                            setPlacarSalvo1(response.data.resultado)
                            setMostrarPlacarSalvo1(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time1)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time1)
                });
        }
        if (time2 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id2,
                "resultado": time2
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id2,
                    })
                        .then(response => {
                            setPlacarSalvo2(response.data.resultado)
                            setMostrarPlacarSalvo2(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time2)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time2)
                });
        }
        if (time3 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id3,
                "resultado": time3
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id3,
                    })
                        .then(response => {
                            setPlacarSalvo3(response.data.resultado)
                            setMostrarPlacarSalvo3(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time3)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time3)
                });
        }
        if (time4 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id4,
                "resultado": time4
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id4,
                    })
                        .then(response => {
                            setPlacarSalvo4(response.data.resultado)
                            setMostrarPlacarSalvo4(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time4)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time4)
                });
        }
        if (time5 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id5,
                "resultado": time5
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id5,
                    })
                        .then(response => {
                            setPlacarSalvo5(response.data.resultado)
                            setMostrarPlacarSalvo5(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time5)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time5)
                });
        }
        if (time6 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id6,
                "resultado": time6
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id6,
                    })
                        .then(response => {
                            setPlacarSalvo6(response.data.resultado)
                            setMostrarPlacarSalvo6(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time6)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time6)
                });
        }
        if (time7 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id7,
                "resultado": time7
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id7,
                    })
                        .then(response => {
                            setPlacarSalvo7(response.data.resultado)
                            setMostrarPlacarSalvo7(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time7)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time7)
                });
        }
        if (time8 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id8,
                "resultado": time8
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id8,
                    })
                        .then(response => {
                            setPlacarSalvo8(response.data.resultado)
                            setMostrarPlacarSalvo8(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time8)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time8)
                });
        }
        if (time9 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id9,
                "resultado": time9
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id9,
                    })
                        .then(response => {
                            setPlacarSalvo9(response.data.resultado)
                            setMostrarPlacarSalvo9(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time9)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time9)
                });
        }
        if (time10 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id10,
                "resultado": time10
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id10,
                    })
                        .then(response => {
                            setPlacarSalvo10(response.data.resultado)
                            setMostrarPlacarSalvo10(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time10)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time10)
                });
        }
        if (time11 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id11,
                "resultado": time11
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id11,
                    })
                        .then(response => {
                            setPlacarSalvo11(response.data.resultado)
                            setMostrarPlacarSalvo11(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time11)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time11)
                });
        }
        if (time12 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id12,
                "resultado": time12
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id12,
                    })
                        .then(response => {
                            setPlacarSalvo12(response.data.resultado)
                            setMostrarPlacarSalvo12(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time12)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time12)
                });
        }
        if (time13 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id13,
                "resultado": time13
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id13,
                    })
                        .then(response => {
                            setPlacarSalvo13(response.data.resultado)
                            setMostrarPlacarSalvo13(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time13)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time13)
                });
        }
        if (time14 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id14,
                "resultado": time14
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id14,
                    })
                        .then(response => {
                            setPlacarSalvo14(response.data.resultado)
                            setMostrarPlacarSalvo14(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time14)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time14)
                });
        }
        if (time15 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id15,
                "resultado": time15
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id15,
                    })
                        .then(response => {
                            setPlacarSalvo15(response.data.resultado)
                            setMostrarPlacarSalvo15(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time15)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time15)
                });
        }
        if (time16 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id16,
                "resultado": time16
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id16,
                    })
                        .then(response => {
                            setPlacarSalvo16(response.data.resultado)
                            setMostrarPlacarSalvo16(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time16)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time16)
                });
        }
        if (time17 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id17,
                "resultado": time17
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id17,
                    })
                        .then(response => {
                            setPlacarSalvo17(response.data.resultado)
                            setMostrarPlacarSalvo17(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time17)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time17)
                });
        }
        if (time18 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id18,
                "resultado": time18
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id18,
                    })
                        .then(response => {
                            setPlacarSalvo18(response.data.resultado)
                            setMostrarPlacarSalvo18(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time18)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time18)
                });
        }
        if (time19 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id19,
                "resultado": time19
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id19,
                    })
                        .then(response => {
                            setPlacarSalvo19(response.data.resultado)
                            setMostrarPlacarSalvo19(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time19)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time19)
                });
        }
        if (time20 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id20,
                "resultado": time20
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id20,
                    })
                        .then(response => {
                            setPlacarSalvo20(response.data.resultado)
                            setMostrarPlacarSalvo20(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time20)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time20)
                });
        }
        if (time21 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id21,
                "resultado": time21
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id21,
                    })
                        .then(response => {
                            setPlacarSalvo21(response.data.resultado)
                            setMostrarPlacarSalvo21(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time21)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time21)
                });
        }
        if (time22 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id22,
                "resultado": time22
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id22,
                    })
                        .then(response => {
                            setPlacarSalvo22(response.data.resultado)
                            setMostrarPlacarSalvo22(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time22)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time22)
                });
        }
        if (time23 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id23,
                "resultado": time23
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id23,
                    })
                        .then(response => {
                            setPlacarSalvo23(response.data.resultado)
                            setMostrarPlacarSalvo23(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time23)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time23)
                });
        }
        if (time24 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": id24,
                "resultado": time24
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": id24,
                    })
                        .then(response => {
                            setPlacarSalvo24(response.data.resultado)
                            setMostrarPlacarSalvo24(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time24)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time24)
                });
        }
        verificaPlacares()
    }

    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Time
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            text: <p>
                -    -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'pontos',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Pontos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            headerClasses: 'nao-selecionavel',
            text: <p>
                -    -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'saldo',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Saldo de Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    const colunasTimesSorteados = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Time
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]

    async function cadastrarNovoTime() {
        setCarregando(true)
        let enviarBanco = []
        enviarBanco.push(novoTime, novoTime2, novoTime3, novoTime4)
        for (let i = 0; i < enviarBanco.length; i++) {
            await apiC.post("torneio/cadastrarTime", {
                "nome": enviarBanco[i],
                "pontos": 0,
                "saldo": 0
            }).then(response => {
                if (response.status === 200) {
                    setCarregando(false)
                    if (contador === i) {
                        let k = i
                        for (let j = 0; j < response.data.length; j++) {
                            itensVar[k] = response.data[j]
                            k++
                        }
                    }
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                    verificaSeTemTimeCadastrado()
                    setCadastrarTime(false)
                }
            })
                .catch((error) => {
                    alert('Erro ao cadastrar times')
                    setCarregando(false)
                });
            await apiC.post("torneio/cadastrarTimeSorteado", {
                "nome": enviarBanco[i],
            }).then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        times.push(response.data[i].nome)
                    }
                    setCarregando(false)
                    if (contador === i) {
                        let k = i
                        for (let j = 0; j < response.data.length; j++) {
                            itensVarSorteado[k] = response.data[j]
                            k++
                        }
                    }
                    setItensSorteados(JSON.parse(JSON.stringify(itensVarSorteado)))
                    buscarTimesSorteados()
                }

            })
                .catch((error) => {
                    alert('Erro ao cadastrar times na tabela de sorteados')
                    setCarregando(false)
                });
        }

    }

    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            -----
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/artilheiroTorneio')}>
                <div>Artilheiro</div>
            </Button>
            {carregando &&
                <h1>carregando..</h1>
            }
            {cadastrarTime &&
                <h1>Cadastre os times abaixo</h1>
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime(e.target.value) }}
                    value={novoTime}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime2(e.target.value) }}
                    value={novoTime2}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime3(e.target.value) }}
                    value={novoTime3}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime4(e.target.value) }}
                    value={novoTime4}
                />
            }
            {cadastrarTime &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarNovoTime()}>
                    <div>Enviar times digitados</div>
                </Button>
            }
            {
                <div>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens}
                        columns={colunas}
                        selectRow={selecaoLinhas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
            }

            {
                <BootstrapTable
                    hover={true}
                    classes="tabela"
                    condensed={true}
                    keyField='id'
                    data={itensSorteados}
                    columns={colunasTimesSorteados}
                    bootstrap4={true}
                    bordered={false}
                />
            }
            <Button className="deletar-jogadorr" onClick={(e) => handleDeletar()}>
                <div>Deletar todos os times das tabelas</div>
            </Button>
            {mostrarVencedores &&
                <div><h1 className="campeao"> Raiden é Campeão do campeonato Noriano de 2024 </h1></div>
            }
            {mostrarVencedores &&
                <div><h3 className="campeao1"> Abaixo os jogadores campeões </h3></div>        
            }
             {mostrarVencedores &&
                <h5 className="campeao2"> Raul </h5>       
            }
             {mostrarVencedores &&
                <h5 className="campeao3"> Wilham </h5>       
            }
            {mostrarVencedores &&
                <h5 className="campeao4"> Mathias </h5>       
            }
            {mostrarVencedores &&
                <h5 className="campeao5"> Mostarda </h5>       
            }
             {mostrarVencedores &&
                <div><h3 className="campeao6"> Abaixo os jogadores vices campeões </h3></div>        
            }
             {mostrarVencedores &&
                <div><h5 className="campeao7"> Crystal </h5></div>        
            }
             {mostrarVencedores &&
                <div><h5 className="campeao8"> Thanos </h5></div>        
            }
             {mostrarVencedores &&
                <div><h5 className="campeao9"> Pente Laranja </h5></div>        
            }
            {mostrarVencedores &&
                <div><h5 className="campeao10"> Buzz </h5></div>        
            }
             {mostrarVencedores &&
                <div><h3 className="campeao11"> Abaixo os melhores jogadores do campeonato </h3></div>        
            }
            {mostrarVencedores &&
                <div><h5 className="campeao12"> 1º Wilham </h5></div>        
            }
            {mostrarVencedores &&
                <div><h5 className="campeao13"> 2º Raul </h5></div>        
            }
            {mostrarVencedores &&
                <div><h5 className="campeao14"> 3º Pente Cinza </h5></div>        
            }
           
            <>
                <div>
                    <h1> Primeiro turno</h1>
                    <Button className="btn-filtro-arquivo" onClick={(e) => sortearTimes()}>
                        <div>Sotear times</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray1}</label>
                        <Form.Control
                            onChange={e => { setTime1(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo1 ? placarSalvo1 : time1}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime2(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo2 ? placarSalvo2 : time2}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar1}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime3(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo3 ? placarSalvo3 : time3}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime4(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo4 ? placarSalvo4 : time4}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar2}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("1")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(0, 1, 2, 3)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime5(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo5 ? placarSalvo5 : time5}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime6(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo6 ? placarSalvo6 : time6}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar3}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime7(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo7 ? placarSalvo7 : time7}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime8(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo8 ? placarSalvo8 : time8}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar4}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("2")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(4, 5, 6, 7)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime9(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo9 ? placarSalvo9 : time9}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime10(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo10 ? placarSalvo10 : time10}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar5}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime11(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo11 ? placarSalvo11 : time11}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime12(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo12 ? placarSalvo12 : time12}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar6}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("3")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(8, 9, 10, 11)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                    <h1>Segundo turno</h1>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime13(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo13 ? placarSalvo13 : time13}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime14(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo14 ? placarSalvo14 : time14}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar7}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime15(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo15 ? placarSalvo15 : time15}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime16(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo16 ? placarSalvo16 : time16}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar8}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("3")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(12, 13, 14, 15)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime17(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo17 ? placarSalvo17 : time17}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime18(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo18 ? placarSalvo18 : time18}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar9}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime19(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo19 ? placarSalvo19 : time19}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime20(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo20 ? placarSalvo20 : time20}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar10}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("2")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(16, 17, 18, 19)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime21(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo21 ? placarSalvo21 : time21}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime22(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo22 ? placarSalvo22 : time22}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar11}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime23(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo23 ? placarSalvo23 : time23}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime24(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo24 ? placarSalvo24 : time24}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar12}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => { rodada("1"); anunciarCampeao() }}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(20, 21, 22, 23)}>
                        <div>Deletar placares desta rodada</div>
                    </Button>
                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">

                </div>
            </>

        </>
    )
}