import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/artilheiro.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import  Cronometro  from '../login/cronometro';

export default function ArtilheiroTorneio() {

    const [nomeJogador, setNomeJogador] = useState('');
    const [quantidadeGol, setQuantidadeGol] = useState(0);
    const [nomeJogadorAnterior, setNomeJogadorAnterior] = useState('');
    const [quantidadeGolAnterior, setQuantidadeGolAnterior] = useState(0);
    const [pesquisarTime, setPesquisarTime] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [placar1, setPlacar1] = useState(0);
    const [placar2, setPlacar2] = useState(0);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [mensagemTabela, setMensagemTabela] = useState('');
    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [somaGols, setSomaGols] = useState([]);
    const navigate = useNavigate();
    let token = JSON.parse(localStorage.getItem("keyToken"))
    const [resultado, setResultado] = useState(false);
    const [mostrarTime, setMostrarTime] = useState(false);
    const [buscando, setBuscando] = useState(false);
    let totalItens = 0
    let contador = 0
    let itensVar = []
    let itensVar2 = []
    let dadosSelecionados = []

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
        inserirData()
    }, [])


    useEffect(() => {
        apiC.post("placar/bucartodos")
            .then(response => {
                if (response.data[0].placar != null) {
                    setTime1(response.data[0].nome)
                    setPlacar1(response.data[0].placar)
                }
                if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined')
                    setTime2(response.data[1].nome)
                setPlacar2(response.data[1].placar)
            })
            .catch((error) => {
                setMensagem('erro ao buscar placar')
                setCarregando(false)
            });
    }, [])

    function inserirData2(data) {
        itensVar = []
        setItens2([])
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }
            setItens2(JSON.parse(JSON.stringify(itensVar)))
        }
    }


    async function inserirData() {
        let somaTotalGols = 0
        setMensagemTabela('Inserindo na tabela..')
        await apiC.post("artilheiro/buscar/torneio", {
        })
            .then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (contador === i) {
                            let k = i
                            for (let j = 0; j < response.data.length; j++) {
                                itensVar[k] = response.data[j]
                                k++
                                somaTotalGols += parseInt(response.data[j].gols, 10)
                            }
                        }
                        setSomaGols(somaTotalGols)
                        setItens(JSON.parse(JSON.stringify(itensVar)))

                    }
                }
                setMensagemTabela('Feito! Tabela Atualizada')
                setCarregando(false)
            })
            .catch((error) => {
                setMensagemTabela('erro ao atualizar tabela')
                alert('erro ao atualizar tabela')
                setCarregando(false)
            });

    }

    async function atualizaNumeroGol(item) {
        let quantidadeGolNum = parseInt(quantidadeGol, 10)
        setMensagem('atualizando..')

        await apiC.put("artilheiro/atualiza", {
            "id": item[0].id,
            "nome": item[0].nome,
            "gols": item[0].gols + 1,
            "gols_torneio": 1,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setMensagem('atualizado!')
                    setNomeJogadorAnterior(item[0].nome)
                    setQuantidadeGolAnterior(1)
                    inserirData()
                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao atualizar')
                alert('erro ao atualizar')
                setCarregando(false)
            });

    }

    async function inserirNovoJogador() {
        let quantidadeGolNum = parseInt(quantidadeGol, 10)
        // const verificar = verificaString()
        // if(verificar){
        setMensagem('Inserindo novo nome..')
        await apiC.post("artilheiro/inserir", {
            "nome": nomeJogador,
            "gols": 1,
        }).then(response => {
            if (response.status === 200) {
                setMensagem('Novo nome inserido!')
                setNomeJogadorAnterior(nomeJogador)
                setQuantidadeGolAnterior(1)
                inserirData()
            }
            setCarregando(false)
        })
            .catch((error) => {
                setMensagem('erro ao inserir novo nome')
                alert(error.response.data)
                setCarregando(false)
            });
        // }else{
        //     alert('Nome não cadastrado, por favor verifique')
        // }
    }

    async function handleDeletar() {
        setMensagem('Deletando..')

        await apiC.post("artilheiro/delete/torneio")
            .then(response => {
                if (response.status === 200) {
                    location.reload()
                }
            })
            .catch((error) => {
                setMensagem('erro ao deletar jogadores')
                alert('erro ao deletar jogadores')
                setCarregando(false)
            });



    }

    async function limpar() {
        await apiC.post("placar/limpar")
            .then(response => {
                if (response.status === 200) {
                    setMensagem('Placar limpado')
                    location.reload()
                }
            })
            .catch((error) => {
                setMensagem('erro ao limpar placar')
                alert('erro ao limpar placar')
            });


    }

    async function limpandoNomes() {
        itensVar = []
        setItens2([])
        setBuscando(true)
    }

    async function pesquisaTime() {
        limpandoNomes()
        await apiC.post("cadastrar/pesquisar", {
            "time": pesquisarTime,
        })
            .then(response => {
                if (response.status === 200) {
                    setBuscando(false)
                    inserirData2(response.data.result)
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
                setBuscando(false)
                alert(error.response.data)

            });
    }

    async function handleSalvar() {
        setCarregando(true)
        setMensagem('salvando..')
        await apiC.post("artilheiro/nome", {
            "nome": nomeJogador,
        })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        atualizaNumeroGol(response.data)
                    } else {
                        inserirNovoJogador()
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao salvar')
                setCarregando(false)
            });

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


    async function salvarPlacar() {
        setCarregando(true)
        setMensagem('salvando..')

        await apiC.post("placar/inserir", {
            "nome": nomeJogador,
        })
            .then(response => {
                if (response.status === 200) {
                    apiC.post("placar/bucartodos")
                        .then(response => {
                            if (response.data[0].placar != null) {
                                setTime1(response.data[0].nome)
                                setPlacar1(response.data[0].placar)
                            }
                            if (response.data[1].placar != null && response.data[1].placar != undefined && response.data[1].placar != 'undefined')
                                setTime2(response.data[1].nome)
                            setPlacar2(response.data[1].placar)
                        })
                        .catch((error) => {
                            setMensagem('erro ao buscar placar')
                            setCarregando(false)
                        });

                }
                setCarregando(false)
            })
            .catch((error) => {
                setMensagem('erro ao salvar')
                setCarregando(false)
            });


    }

    // const verificaString = () => {
    //     return ['Cris', 'Axe', 'Super Homem', 'Hulk', 'Filipe', 'Wilham', 'Taylor', 'Maçaneta', 'Sundown', 'Theo', 'Buzz', 'Dony', 'Monstro', 'Controle da tv', 'Rivelino', 'Renan', 'Pente Cinza', 'Perna Longa', 'Raul', 'Sensodyni', 'Sabrina', 'Jhonsons', 'Cindy', 'Loriel', 'Ufe', 'Sr Incrivel', 'Lucas', 'Hammer', 'Livia', 'Rafael', 'Tiago', 'Rodrigo', 'Pente Laranja', 'Rildo', 'Pente Rosa', 'Net', 'Cristian', 'Pepe', 'Homem de Ferro', 'Vinicius', 'Lacan', 'Condicionador', 'Telefone', 'Rozinha', 'Coringa', 'Michel', 'Mostarda', 'Thanos', 'Pantene', 'Leonardo', 'Pente Preto', 'Tati', 'Pente Azul', 'Mathias', 'Azeite', 'Varicel', 'Titan', 'Eva', 'Hugo', 'Azuzinho', 'Rita', 'David', 'Azulão', 'Shampo', 'Orlof', 'Branquinho', 'Kevin', 'Crystal', 'Izakson', 'Sky', 'Gradiente', 'Escuro', 'Edson', 'Katchup', 'Luiza'].includes(nomeJogador)
    // }

    const colunas = [
        {
            dataField: 'nome',
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
            headerClasses: 'nao-selecionavel',
            text: <p>
                -           -
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'gols',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Gols feitos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]


    function handleSelecionar(nome) {
        setNomeJogador(nome);
    }


    function handleDesselecionar() {
        setNomeJogador('');
    }


    function handleDesselecionarTodos() {
    }


    function handleSelecionarTodos() {
        itens.map((item, i) => {
            if (itens[i].id) {
                dadosSelecionados.push(itens[i].id);
            }
        })
    }

    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.nome)
            } else {
                handleDesselecionar()
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


    return (
        <>
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                <div>Home</div>
            </Button>
            ------
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/torneio')}>
                <div>Torneio</div>
            </Button>
            ------
            <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/copa')}>
                <div>Copa</div>
            </Button>
            {carregando &&
                <h1>carregando..</h1>
            }
            {
                <h4>{mensagem}</h4>
            }
            {
                <h4>{mensagemTabela}</h4>
            }
            {
                <h2>{nomeJogadorAnterior}</h2>
            }
            {
                <h2>{quantidadeGolAnterior}</h2>
            }

            <div>
                <label>Nome do jogador</label>
                <Form.Control className="label-artilheiro"
                    onChange={e => { setNomeJogador(e.target.value) }}
                    value={nomeJogador}
                />
                <label className="label-quatidade">Quantidade total de gols marcados</label>
                <Form.Control className="label-quantgol"
                    value={somaGols}
                />
            </div>
            <Button className="btn-filtro-arquivo" onClick={(e) => { handleSalvar(); salvarPlacar() }}>
                <div>Enviar Arquivo</div>
            </Button>

            <Button className="deletar-jogador" onClick={(e) => handleDeletar()}>
                <div>Deletar jogadores selecionados</div>
            </Button>

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
            <label className="titulo">Placar do jogo</label>
            <Form.Control className="time-placar1"
                value={time1}
                placeholder='time 1'
            />
            <Form.Control className="label-placar1"
                value={placar1}
            />
            <h1 className='posicaoX'>X</h1>
            <Form.Control className="time-placar2"
                value={time2}
                placeholder='time 2'
            />
            <Form.Control className="label-placar2"
                value={placar2}
            />

            <Button className="limpar-placar" onClick={(e) => limpar()}>
                <div>Limpar</div>
            </Button>

            <h1 className='pesquisa'>Pesquise aqui o time</h1>
            <Form.Control
                onChange={e => { setPesquisarTime(e.target.value) }}
                value={pesquisarTime}
                className='pesquisa'
            />
            <Button className="" onClick={(e) => pesquisaTime()}>
                <div>Pesquisar</div>
            </Button>
            {resultado &&
                <div className='pesquisa'>
                    <h3>Nenhum resultado encontrado</h3>
                </div>
            }

            {buscando &&
                <div className='pesquisa'>
                    <h3>Buscando, aguarde..</h3>
                </div>
            }

            {mostrarTime &&
                <div className='pesquisa'>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id_time'
                        data={itens2}
                        columns={colunasTimes}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>

            }
            <Cronometro/>
        </>
    )
}