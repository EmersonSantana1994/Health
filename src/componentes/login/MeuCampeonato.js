// PROJETO PARA DESAFIO DE TESTE

import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function MeuCampeonato() {

    //VARIAVEIS
    const navigate = useNavigate();
    const [mostrarRecuperarSenha, setMostrarRecuperarSenha] = useState('padrao');
    const [loginError, setLoginError] = useState(false);
    const [priLugLiga, setPriLugLiga] = useState('');
    const [valorPriLiga, setValorPriLiga] = useState(0);
    const [valorPriLigaR, setValorPriLigaR] = useState(0);
    const [segLugLiga, setSegLugLiga] = useState('');
    const [valorSegLiga, setValorSegLiga] = useState(0);
    const [valorSegLigaR, setValorSegLigaR] = useState(0);
    const [terLugLiga, seTerLugLiga] = useState('');
    const [valorTerLiga, setValorTerLiga] = useState(0);
    const [valorTerLigaR, setValorTerLigaR] = useState(0);
    const [priLugMund, setPriLugMund] = useState('');
    const [valorPriMund, setValorPriMund] = useState(0);
    const [valorPriMundR, setValorPriMundR] = useState(0);
    const [segLugMund, setSegLugMund] = useState('');
    const [valorSegMund, setValorSegMund] = useState(0);
    const [valorSegMundR, setValorSegMundR] = useState(0);
    const [terLugMund, setTerLugMund] = useState('');
    const [valorTerMund, setValorTerMund] = useState(0);
    const [valorTerMundR, setValorTerMundR] = useState(0);
    const [quarLugMund, setQuarLugMund] = useState('');
    const [valorQuarMund, setValorQuratMund] = useState(0);
    const [valorQuratMundR, setValorQuratMundR] = useState(0);
    const [quinLugMund, setQuinLugMund] = useState('');
    const [valorQuinMund, setValorQuinMund] = useState(0);
    const [valorQuinMundR, setValorQuinMundR] = useState(0);
    const [sextLugMund, setSextLugMund] = useState('');
    const [valorSexMund, setValorSexMund] = useState(0);
    const [valorSexMundR, setValorSexMundR] = useState(0);
    const [setiLugMund, setSetiLugMund] = useState('');
    const [valorSetMund, setValorSetMund] = useState(0);
    const [valorSetMundR, setValorSetMundR] = useState(0);
    const [priLugSub, setPriLugSub] = useState('');
    const [valorPriLugSub, setValorPriLugSub] = useState(0);
    const [valorPriLugSubR, setValorPriLugSubR] = useState(0);
    const [segLugSub, setSegLugSub] = useState('');
    const [valorSegLugSub, setValorSegLugSub] = useState(0);
    const [valorSegLugSubR, setValorSegLugSubR] = useState(0);
    const [terLugSub, setTerLugSub] = useState('');
    const [valorTerLugSub, setValorTerLugSub] = useState(0);
    const [valorTerLugSubR, setValorTerLugSubR] = useState(0);
    const [priLugCopa, setPriLugCopa] = useState('');
    const [valorPriLugCopa, setValorPriLugCopa] = useState(0);
    const [valorPriLugCopaR, setValorPriLugCopaR] = useState(0);
    const [segLugCopa, setSegLugCopa] = useState('');
    const [valorSegLugCopa, setValorSegLugCopa] = useState(0);
    const [valorSegLugCopaR, setValorSegLugCopaR] = useState(0);
    const [tercLugCopa, setTercLugCopa] = useState('');
    const [valorTercLugCopa, setValorTercLugCopa] = useState(0);
    const [valorTercLugCopaR, setValorTercLugCopaR] = useState(0);
    const [priLugSuper, setPriLugSuper] = useState('');
    const [valorPriLugSuper, setValorPriLugSuper] = useState(0);
    const [valorPriLugSuperR, setValorPriLugSuperR] = useState(0);
    const [segLugSuper, setSegLugSuper] = useState('');
    const [valorSegLugSuper, setValorSegLugSuper] = useState(0);
    const [valorSegLugSuperR, setValorSegLugSuperR] = useState(0);
    const [terLugSuper, setTerLugSuper] = useState('');
    const [valorTerLugSuper, setValorTerLugSuper] = useState(0);
    const [valorTerLugSuperR, setValorTerLugSuperR] = useState(0);
    const [quarLugSuper, setQuarLugSuper] = useState('');
    const [valorQuarLugSuper, setValorQuarLugSuper] = useState(0);
    const [valorQuarLugSuperR, setValorQuarLugSuperR] = useState(0);
    const [priLugRecopa, setPriLugRecopa] = useState('');
    const [valorPriLugRecopa, setValorPriLugRecopar] = useState(0);
    const [valorPriLugRecoparR, setValorPriLugRecoparR] = useState(0);
    const [emailCadastro, setEmailCadastro] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCadastro, setPasswordCadastro] = useState('');
    const [mostrarEsconder, setMostrarEsconder] = useState("password");
    const [mostrarUploadCsv, setMostrarUploadCsv] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erroAoCadastrar, setErroAoCadastrar] = useState(false);
    const [nomeArquivo, setNomeArquivo] = useState('');
    const [arquivo, setArquivo] = useState('');
    const [mostrarTabela, setMostrarTabela] = useState(false);
    const [itens, setItens] = useState([]);
    const [contMen, setContMen] = useState([]);
    const [contFem, setContFem] = useState([]);
    const [medIdade, setMedIdade] = useState([]);
    const [podeCarregar, setPodeCarregar] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [confirmLimpar, setConfirmLimpar] = useState(false);

    let totalItens = 0
    let contador = 0
    let itensVar = []
    let itensVar2 = []
    let contadorMale = 0
    let contadorFemale = 0
    let token = JSON.parse(localStorage.getItem("keyToken"))
    useEffect(() => {
        async function iniciarTabela() {
            setCarregando(true)
            await apiC.post("ranking/buscar", {
                headers: {
                    'x-access-token': token,
                }
            })

                .then(response => {
                    if (response.status === 200) {
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
                        setMostrarTabela(true)
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                        alert(error.response.data)
                    
                });
        }
        iniciarTabela()
    }, [])

    useEffect(() => {
        async function buscarPontuacao() {
            await apiC.post("pontos_torneio/listar_torneio")
                .then(response => {
                    if (response.status === 200) {
                        pontuacao(response.data)
                    }
                })
                .catch((error) => {
                });
        }
        buscarPontuacao()
    }, [])

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

    //FUNÇÃO DE ENFETUAR O LOGIN
    async function efetuarLogin(e) {
        setLoginError("");
        setCarregando(true)
        if (!priLugLiga) {
            setLoginError("Preencha o nome do primeiro lugar da liga");
        } else if (!password) {
            setLoginError("Preencha o nome do segundo lugar da liga");
        } else {
            setCarregando(true)
            await apiC.post('usuarios/logar', {
                usuario: priLugLiga,
                senha: password
            })
                .then(async function (response) {
                    //AO REALIZAR O LOGIN AS MENSAGENS ABAIXO SE MODIFICAM
                    setCarregando(false)
                    setMostrarUploadCsv(true)
                    setLoginError(false)
                    setErroAoCadastrar(false)
                })
                .catch(function (error) {
                    //MENSAGENS DE ERRO APARECERAM CASO LOGIN DER ALGUM ERRO
                    setCarregando(false)
                    setLoginError(true)
                });
        }
    }

    //FUNÇÃO APOIADORA PARA CADASTRO E LOGIN
    function botaoPressionado(event) {
        if (event.key === "Enter") {
            efetuarLogin(event)
        } else if (event.key === "Cadastrar") {
            efetuarCadastro(event)
        }
    }

    //FUNÇÃO DE CADASTRO
    async function efetuarCadastro(e) {
        // API CADASTRO
        setCarregando(true)
        await apiC.post('usuarios/cadastrar', {
            usuario: emailCadastro,
            senha: passwordCadastro
        })
            .then(async function (response) {
                setCarregando(false)
                setErroAoCadastrar(false)
            })
            .catch(function (error) {
                // CASO ACONTEÇA ALGUM ERRO SERÁ APRESENTADA
                setCarregando(false)
                setErroAoCadastrar(true)
            });
    }

    async function fazerLimpeza(e) {
        setCarregando(true)
        await apiC.post('ranking/deletar')
            .then(async function (response) {
               location.reload()
            })
            .catch(function (error) {
                setCarregando(false)
                setErroAoCadastrar(true)
            });
    }
    

    // FUNÇÃO ENVIA ARQUIVO CSV AO BACK
    async function handleSalvar(torneio) {
        let liga = []
        if (torneio == "Liga") {
            liga.push(priLugLiga, segLugLiga, terLugLiga)
        }
        if (torneio == "SubLiga") {
            liga.push(priLugSub, segLugSub, terLugSub)
        }
        if (torneio == "Mundial") {
            liga.push(priLugMund, segLugMund, terLugMund, quarLugMund, quinLugMund,
                sextLugMund, setiLugMund)
        }
        if (torneio == "Recopa") {
            liga.push(priLugRecopa)
        }
        if (torneio == "Copa") {
            liga.push(priLugCopa, segLugCopa, tercLugCopa)
        }
        if (torneio == "SuperCopa") {
            liga.push(priLugSuper, segLugSuper, terLugSuper, quarLugSuper)
        }
        for (let i = 0; i < liga.length; i++) {
            await apiC.post("ranking/encontrar/nome", {
                "nome": liga[i]
            })
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            atualizaArquivo(response.data, i, torneio)
                        } else {
                            inserirNovoTime(liga[i], i, torneio)
                        }
                        // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS

                    }
                    setSucesso(true)
                    function sucess() {
                        setSucesso(false)
                    }
                    setInterval(sucess, 5000);
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        }

    }

    // FUNÇÃO BUNCA ARQUIVO ENVIA DO BANCO DE DADOS
    async function atualizaArquivo(item, i, torneio) {
        setCarregando(true)
        if (torneio == "Liga") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLiga : i == 1 ?
                    item[0].pontos + valorSegLiga : i == 2 ? item[0].pontos + valorTerLiga : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        } if (torneio == "SubLiga") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLugSub : i == 1 ?
                    item[0].pontos + valorSegLugSub : i == 2 ? item[0].pontos + valorTerLugSub : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        } if (torneio == "Mundial") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriMund : i == 1 ?
                    item[0].pontos + valorSegMund : i == 2 ? item[0].pontos + valorTerMund : i == 3 ?
                        item[0].pontos + valorQuarMund : i == 4 ? item[0].pontos + valorQuinMund : i == 5 ?
                            item[0].pontos + valorSexMund : i == 6 ? item[0].pontos + valorSetMund : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        } if (torneio == "Recopa") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLugRecopa : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        } if (torneio == "Copa") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLugCopa : i == 1 ?
                    item[0].pontos + valorSegLugCopa : i == 2 ? item[0].pontos + valorTercLugCopa : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        } if (torneio == "SuperCopa") {
            await apiC.put("ranking/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLugSuper : i == 1 ?
                    item[0].pontos + valorSegLugSuper : i == 2 ? item[0].pontos + valorTerLugSuper : i == 3 ?
                        item[0].pontos + valorQuarLugSuper : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        }
    }

    async function inserirNovoTime(nome, i, torneio) {
        const verificar = verificaString(nome)
        if (verificar) {
            if (torneio == "Liga") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLiga : i == 1 ?
                        valorSegLiga : i == 2 ? valorTerLiga : ""
                })
                inserirData()
            } if (torneio == "SubLiga") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLugSub : i == 1 ?
                        valorSegLugSub : i == 2 ? valorTerLugSub : ""
                })
                inserirData()
            } if (torneio == "Mundial") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriMund : i == 1 ?
                        valorSegMund : i == 2 ? valorTerMund : i == 3 ?
                            valorQuarMund : i == 4 ? valorQuinMund : i == 5 ?
                                valorSexMund : i == 6 ? valorSetMund : ""
                })
                inserirData()
            } if (torneio == "Recopa") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLugRecopa : ""
                })
                inserirData()
            } if (torneio == "Copa") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLugCopa : i == 1 ?
                        valorSegLugCopa : i == 2 ? valorTercLugCopa : ""
                })
                inserirData()
            } if (torneio == "SuperCopa") {
                await apiC.post("ranking/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLugSuper : i == 1 ?
                        valorSegLugSuper : i == 2 ? valorTerLugSuper : i == 3 ?
                            valorQuarLugSuper : ""
                })
                inserirData()
            }
        } else {
            alert("Valor digitado não corresponde aos times cadastrados")
        }

    }

    const verificaString = (tipoSolicitacao) => {
        return ["Brastemp", "Halor", "Panasonic", "Raiden", "Penharol",
            "Sacred", "Brécia", "Galaxy", "Ases", "Castelão",
            "Democration", "Juventude", "LG", "Once Caldas", "Lanus", "LDU", "Lacta", "Element"].includes(tipoSolicitacao)
    }

    const handleClickOutroBotao = (e) => {
        const importar = document.getElementById('importar-filtro-arquivo')
        importar.click();
    }

    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    async function inserirData() {
        setCarregando(true)
        await apiC.post("ranking/buscar")
            .then(response => {
                if (response.status === 200) {
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
                    setMostrarTabela(true)
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });

    }

    async function pontuacao(data) {
        let contadorr = 0
        for (let i = 0; i < data.length; i++) {
            if (contadorr == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar2[k] = data[j]
                    k++
                }
            }
            for (let r = 0; r < itensVar2.length; r++) {
                if (itensVar2[r].nome == 'Primeiro lugar na liga') {
                    setValorPriLigaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Segundo lugar na liga') {
                    setValorSegLigaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Tercero lugar na liga') {
                    setValorTerLigaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Primeiro lugar na Sub-Liga') {
                    setValorPriLugSubR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Segundo lugar na Sub-Liga') {
                    setValorSegLugSubR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Tercero lugar na Sub-Liga') {
                    setValorTerLugSubR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Primeiro lugar no Campeonato Mundial') {
                    setValorPriMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Segundo lugar no Campeonato Mundial') {
                    setValorSegMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Terceiro lugar no Campeonato Mundial') {
                    setValorTerMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Quarto lugar no Campeonato Mundial') {
                    setValorQuratMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Quinto lugar no Campeonato Mundial') {
                    setValorQuinMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Sexto lugar no Campeonato Mundial') {
                    setValorSexMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Setimo lugar no Campeonato Mundial') {
                    setValorSetMundR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Primeiro lugar na Recopa') {
                    setValorPriLugRecoparR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Primeiro lugar na Copa') {
                    setValorPriLugCopaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Segundo lugar na Copa') {
                    setValorSegLugCopaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Terceiro lugar na Copa') {
                    setValorTercLugCopaR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Primeiro lugar na Super Copa') {
                    setValorPriLugSuperR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Segundo lugar na Super Copa') {
                    setValorSegLugSuperR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Terceiro lugar na Super Copa') {
                    setValorTerLugSuperR(itensVar2[r].pontos)
                } else if (itensVar2[r].nome == 'Quarto lugar na Super Copa') {
                    setValorQuarLugSuperR(itensVar2[r].pontos)
                }
            }

        }

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
            dataField: 'pontos',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Pontos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]

    // ESTA FUNÇÃO FAZ A LEITURA DO ARQUIVO EM CSV
    function handleLerArquivo(event) {
        let files = event.target.files[0];
        setNomeArquivo(files.name);
        setArquivo(files)
    };

    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            <Button className="limpar" onClick={(e) => setConfirmLimpar(!confirmLimpar)}>
                <div><h2>Limpar</h2></div>
            </Button>
            <Button className="limpar" onClick={(e) => navigate('/pontosTorneio')}>
                        <div><h2>Cadastrar Pontos do Torneio</h2></div>
                    </Button>
        
            {confirmLimpar &&
                <h2>Tem certeza que deseja limpar? Esta a ação irá excluir todos os times da tabela</h2>
            }

            {confirmLimpar &&
                <Button className="btn-filtro-arquivo" onClick={(e) => fazerLimpeza()}>
                    <div><h2>SIM</h2></div>
                </Button>
            }
            {confirmLimpar &&
                <Button className="btn-filtro-arquivo" onClick={(e) => setConfirmLimpar(!confirmLimpar)}>
                    <div><h2>NÃO</h2></div>
                </Button>
            }

            {sucesso &&
                <h1>Pontos inseridos com secusso</h1>
            }
            {carregando &&
                <h1>carregando..</h1>
            }
            {erroAoCadastrar &&
                <h4>Erro ao cadastrar</h4>
            }
            {loginError &&
                <h4> E-mail inválido ou senha incorreta </h4>
            }



            <>
                <div>
                    <div>
                        <label>Quem foi o primeiro lugar na liga?</label>
                        <Form.Control
                            onChange={e => { setPriLugLiga(e.target.value); setValorPriLiga(valorPriLigaR) }}
                            value={priLugLiga}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo lugar na liga?</label>
                        <Form.Control
                            onChange={e => { setSegLugLiga(e.target.value); setValorSegLiga(valorSegLigaR) }}
                            value={segLugLiga}
                        />
                    </div>
                    <div>
                        <label>Quem foi o tercero lugar na liga?</label>
                        <Form.Control
                            onChange={e => { seTerLugLiga(e.target.value); setValorTerLiga(valorTerLigaR) }}
                            value={terLugLiga}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Liga")}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>Quem foi o primeiro lugar na Sub-Liga?</label>
                        <Form.Control
                            onChange={e => { setPriLugSub(e.target.value); setValorPriLugSub(valorPriLugSubR) }}
                            value={priLugSub}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo lugar na Sub-Liga?</label>
                        <Form.Control
                            onChange={e => { setSegLugSub(e.target.value); setValorSegLugSub(valorSegLugSubR) }}
                            value={segLugSub}
                        />
                    </div>
                    <div>
                        <label>Quem foi o terceiro lugar na Sub-Liga?</label>
                        <Form.Control
                            onChange={e => { setTerLugSub(e.target.value); setValorTerLugSub(valorTerLugSubR) }}
                            value={terLugSub}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("SubLiga")}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>Quem foi o primeiro lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setPriLugMund(e.target.value); setValorPriMund(valorPriMundR) }}
                            value={priLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setSegLugMund(e.target.value); setValorSegMund(valorSegMundR) }}
                            value={segLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o terceiro lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setTerLugMund(e.target.value); setValorTerMund(valorTerMundR) }}
                            value={terLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o quarto lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setQuarLugMund(e.target.value); setValorQuratMund(valorQuratMundR) }}
                            value={quarLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o quinto lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setQuinLugMund(e.target.value); setValorQuinMund(valorQuinMundR) }}
                            value={quinLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o sexto lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setSextLugMund(e.target.value); setValorSexMund(valorSexMundR) }}
                            value={sextLugMund}
                        />
                    </div>
                    <div>
                        <label>Quem foi o setimo lugar no Campeonato Mundial?</label>
                        <Form.Control
                            onChange={e => { setSetiLugMund(e.target.value); setValorSetMund(valorSetMundR) }}
                            value={setiLugMund}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Mundial")}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>Quem foi o primeiro lugar na Recopa?</label>
                        <Form.Control
                            onChange={e => { setPriLugRecopa(e.target.value); setValorPriLugRecopar(valorPriLugRecoparR) }}
                            value={priLugRecopa}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("Recopa")}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>Quem foi o primeiro lugar na Copa?</label>
                        <Form.Control
                            onChange={e => { setPriLugCopa(e.target.value); setValorPriLugCopa(valorPriLugCopaR) }}
                            value={priLugCopa}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo lugar na Copa?</label>
                        <Form.Control
                            onChange={e => { setSegLugCopa(e.target.value); setValorSegLugCopa(valorSegLugCopaR) }}
                            value={segLugCopa}
                        />
                    </div>
                    <div>
                        <label>Quem foi o terceiro lugar na Copa?</label>
                        <Form.Control
                            onChange={e => { setTercLugCopa(e.target.value); setValorTercLugCopa(valorTercLugCopaR) }}
                            value={tercLugCopa}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => { handleSalvar("Copa") }}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>Quem foi o primeiro lugar na Super Copa?</label>
                        <Form.Control
                            onChange={e => { setPriLugSuper(e.target.value); setValorPriLugSuper(valorPriLugSuperR) }}
                            value={priLugSuper}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo lugar na Super Copa?</label>
                        <Form.Control
                            onChange={e => { setSegLugSuper(e.target.value); setValorSegLugSuper(valorSegLugSuperR) }}
                            value={segLugSuper}
                        />
                    </div>
                    <div>
                        <label>Quem foi o terceiro lugar na Super Copa?</label>
                        <Form.Control
                            onChange={e => { setTerLugSuper(e.target.value); setValorTerLugSuper(valorTerLugSuperR) }}
                            value={terLugSuper}
                        />
                    </div>
                    <div>
                        <label>Quem foi o quarto lugar na Super Copa?</label>
                        <Form.Control
                            onChange={e => { setQuarLugSuper(e.target.value); setValorQuarLugSuper(valorQuarLugSuperR) }}
                            value={quarLugSuper}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("SuperCopa")}>
                        <div>Enviar Arquivo</div>
                    </Button>

                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">

                </div>

                {mostrarUploadCsv &&
                    <input type="file" onChange={(e) => handleLerArquivo(e)} />
                }
                {mostrarUploadCsv &&
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar(e)}>
                        <div>Enviar Arquivo</div>
                    </Button>
                }


                {mostrarUploadCsv &&
                    <label className="label-quanti-hom">Quantidades de Homens</label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-quant-home"
                        value={contMen}
                    />
                }
                {mostrarUploadCsv &&
                    <label className="label-quanti-mul">Quantidades de Mulheres </label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-quant-mul"
                        value={contFem}
                    />
                }
                {mostrarUploadCsv &&
                    <label className="label-media-idad">Media de idade</label>
                }

                {mostrarUploadCsv &&
                    <Form.Control
                        className="lab-media-idade"
                        value={medIdade}
                    />
                }
                {mostrarTabela &&
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="tabela"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                }

            </>


        </>

    )
}