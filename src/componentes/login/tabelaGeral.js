import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';


export default function TabelaGeral() {
    window.Buffer = Buffer;
    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const navigate = useNavigate();
    const [aviso, setAviso] = useState(false);
    const [tabela, setTabela] = useState(false);
    const [pesquisar, setPesquisar] = useState('');
    const [buscarPorJogador, setBuscarPorJogador] = useState(false);
    const [buscarPorTime, setBuscarPorTime] = useState(false);
    const [buscarPorLiga, setBuscarPorLiga] = useState(false);
    const [buscarPorGols, setBuscarPorGols] = useState(false);
    const [buscarPorPosicao, setBuscarPorPosicao] = useState(false);
    const [buscarPorNacionalidade, setBuscarNacionalidade] = useState(false);
    const [voltarCheck, setvoltarCheck] = useState(false);


    let contador = 0
    let itensVar = []
    let token = JSON.parse(localStorage.getItem("keyToken"))
    let dadosSelecionados = []



    useEffect(() => {

        async function buscarTodos(e) {
            setAviso(true)
            await apiC.post("listar/todos", {
                headers: {
                    'x-access-token': token,
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setAviso(false)
                        inserirData(response.data)
                        setTabela(true)
                    }
                })
                .catch((error) => {
                    alert(error.response.data)

                });

        }
        buscarTodos()
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



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data) {
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

    async function limpar() {
        itensVar = []
        setItens([])
    }

    async function limparDados() {
        await limpar()
        setBuscarNacionalidade(false)
        setBuscarPorGols(false)
        setBuscarPorJogador(false)
        setBuscarPorLiga(false)
        setBuscarPorTime(false)
        setBuscarPorPosicao(false)
        setvoltarCheck(true)
        setAviso(true)
        setPesquisar('')
        await apiC.post("listar/todos", {
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setAviso(false)
                    inserirData(response.data)
                    setTabela(true)
                }
            })
            .catch((error) => {
                alert(error.response.data)

            });
    }


    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)

    const colunas = [
        {
            dataField: 'Jogador',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogador
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Time',
            headerClasses: 'selecionavel',
            sort: true,
            text: <p>
                Time
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Liga',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Liga
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'gols',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'posicao',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Posição
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        {
            dataField: 'pais',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Nacionalidade
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },


        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

        // {
        //     dataField: 'foto',
        //     headerClasses: 'nao-selecionavel',
        //     text: <p>
        //         Foto
        //     </p>,
        //     formatter: (cell, row) => {
        //         // return <img className="foto" src={cell} />;

        //         if (cell != null) {
        //             const imagePath = Buffer.from(cell).toString();
        //             return <img className="foto" src={imagePath} />
        //         } else {
        //             return <img className="foto" src="https://jazzaero.com.br/wp-content/uploads/2017/05/default-placeholder-profile-icon-avatar-gray-woman-90197997.jpg" alt="perfil" />
        //         }

        //     },
        // }
    ]

    const colunasNaci = [
        {
            dataField: 'Gols',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            sort: true,
            text: <p>
                -     -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'Pais',
            headerClasses: 'selecionavel',
            sort: true,
            text: <p>
                Pais
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id)
            } else {
                handleDesselecionar(row.id)
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

    function handleSelecionar(simcard) {
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].id == simcard) {
                dadosSelecionados.push(itens[i].id);
                break;
            }
        }
    }

    function handleDesselecionar(simcard) {
        for (let i = 0; i < dadosSelecionados.length; i++) {
            if (dadosSelecionados[i] == simcard) {
                dadosSelecionados.splice(i, 1);
                break;
            }
        }
    }


    function handleDesselecionarTodos() {
    }
    //verifica se os radios butons estao ativos
    function handlerCheck(element, nome) {
        // filtros.map((item))
        if (filtros[element] == nome) {
            return true
        }
        else {
            return false
        }
    }

    async function PesquisarJogador() {
        setBuscarPorJogador(true)
        setBuscarPorTime(false)
        setBuscarPorLiga(false)
        setBuscarPorGols(false)
        setBuscarPorPosicao(false)
        setBuscarNacionalidade(false)
        setvoltarCheck(false)
    }

    async function PesquisarTime() {
        setBuscarPorJogador(false)
        setBuscarPorTime(true)
        setBuscarPorLiga(false)
        setBuscarPorGols(false)
        setBuscarPorPosicao(false)
        setBuscarNacionalidade(false)
        setvoltarCheck(false)

    }

    async function PesquisarLiga() {
        setBuscarPorJogador(false)
        setBuscarPorTime(false)
        setBuscarPorLiga(true)
        setBuscarPorGols(false)
        setBuscarPorPosicao(false)
        setBuscarNacionalidade(false)
        setvoltarCheck(false)
    }

    async function PesquisarGols() {
        setBuscarPorJogador(false)
        setBuscarPorTime(false)
        setBuscarPorLiga(false)
        setBuscarPorGols(true)
        setBuscarPorPosicao(false)
        setBuscarNacionalidade(false)
        setvoltarCheck(false)
    }

    async function PesquisarPosicao() {
        setBuscarPorJogador(false)
        setBuscarPorTime(false)
        setBuscarPorLiga(false)
        setBuscarPorGols(false)
        setBuscarPorPosicao(true)
        setBuscarNacionalidade(false)
        setvoltarCheck(false)
    }

    async function PesquisarNacionalidade() {
        setBuscarPorJogador(false)
        setBuscarPorTime(false)
        setBuscarPorLiga(false)
        setBuscarPorGols(false)
        setBuscarPorPosicao(false)
        setBuscarNacionalidade(true)
        setvoltarCheck(false)
    }

    async function pesquisa() {
        if (buscarPorJogador) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "jogador",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else if (buscarPorGols) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "gols",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else if (buscarPorLiga) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "liga",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else if (buscarPorNacionalidade) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "nacionalidade",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else if (buscarPorPosicao) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "posicao",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else if (buscarPorTime) {
            await limpar()
            await apiC.post("tabela/pesquisar", {
                "pesquisa": pesquisar,
                "tipo": "time",
            })
                .then(response => {
                    inserirData(response.data)
                })
                .catch((error) => {
                    alert("erro ao pesquisar")
                })
        } else {
            alert('selecione um item para buscar')
        }
    }

    return (

        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            ----
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/golsPais')}>
                <div>Ranking gols por seleção</div>
            </Button>
            -----
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/golsLiga')}>
                <div>Ranking gols por ligas</div>
            </Button>
            -----
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/golsTime')}>
                <div>Ranking gols por time</div>
            </Button>
            ---
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/golsPosicao')}>
                <div>Ranking gols por posicao</div>
            </Button>
            <div className="lado"></div>

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            {aviso &&
                <h1>Carregando tabela...</h1>
            }
            <Form.Group>
                <Form.Control
                    onChange={e => { setPesquisar(e.target.value) }}
                    value={pesquisar}
                    className='pesquisa'
                />
                <Button className="pesquisa" onClick={(e) => pesquisa()}>
                    <div>Pesquisar</div>
                </Button>
                <Button className="pesquisa" onClick={(e) => limparDados()}>
                    <div>Limpar</div>
                </Button>
                ---
                <label className="label-radio-filtros-plano fonte-cor-16">Jogador
                    {<input type="radio" id="PLANO_TIPO_COMPARTILHADO" name="PLANO_TIPO" value="Compartilhado" onChange={() => { setBuscarPorJogador(true) }} onClick={() => PesquisarJogador()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                ---
                <label className="label-radio-filtros-plano-b fonte-cor-16">Time
                    {<input type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" onChange={() => { setBuscarPorTime(true) }} onClick={() => PesquisarTime()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                ---
                <label className="label-radio-filtros-plano-b fonte-cor-16">Liga
                    {<input type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" onChange={() => { setBuscarPorLiga(true) }} onClick={() => PesquisarLiga()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                ---
                <label className="label-radio-filtros-plano-b fonte-cor-16">Gols
                    {<input type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" onChange={() => { setBuscarPorGols(true) }} onClick={() => PesquisarGols()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                ---
                <label className="label-radio-filtros-plano-b fonte-cor-16">Posição
                    {<input type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" onChange={() => { setBuscarPorPosicao(true) }} onClick={() => PesquisarPosicao()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                ---
                <label className="label-radio-filtros-plano-b fonte-cor-16">Nacionalidade
                    {<input type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" onChange={() => { setBuscarNacionalidade(true) }} onClick={() => PesquisarNacionalidade()} />}
                    <span className="checkbox-filtros-b campo-texto-cor-3"></span>
                </label>
                <label className="esconder">Todos
                    {voltarCheck &&
                        <input className='esconder' type="radio" id="PLANO_TIPO_INDIVIDUAL" name="PLANO_TIPO" value="Individual" checked />}
                    <span className="esconder"></span>
                </label>
            </Form.Group>
            {tabela &&
                <div className="lado">
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="table table-striped thead-light"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            selectRow={selecaoLinhas}
                            bordered={false}
                        />
                    </div>
                    <div className="espaco2"></div>
                </div>
            }


        </>

    )

}