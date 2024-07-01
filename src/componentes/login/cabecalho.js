import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/artilheiro.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { set } from 'react-hook-form';

export default function Cabecalho() {

    const [nomeJogador, setNomeJogador] = useState('');
    const [quantidadeGol, setQuantidadeGol] = useState(0);
    const [nomeJogadorAnterior, setNomeJogadorAnterior] = useState('');
    const [quantidadeGolAnterior, setQuantidadeGolAnterior] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [mensagemTabela, setMensagemTabela] = useState('');
    const [itens, setItens] = useState([]);
    const [somaGols, setSomaGols] = useState([]);
    const navigate = useNavigate();
    let token = JSON.parse(localStorage.getItem("keyToken"))
    let totalItens = 0
    let contador = 0
    let itensVar = []
    let dadosSelecionados = []
    const [text, setText] = useState('');

    const [agendamentoSelect, setAgendamentoSelect] = useState(false);
    const [cadastroSelect, setCadastroSelect] = useState(false);
    const [anotacoesSelect, setAnotacoesSelect] = useState(false);
    const [timeSelect, setTimeSelect] = useState(false);
    const [prefereciaSelect, setPrefereciaSelect] = useState(false);
    const [jornadaSelect, setJornadaSelect] = useState(false);
    const [pagamentoSelect, setPagamentoSelect] = useState(false);

    useEffect(() => {
        setText(JSON.parse(localStorage.getItem('idioma')))
    }, [])

    useEffect(() => {
        inserirData()
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

    async function paraSair() {
        window.location.href = '/';
    }


    async function inserirData() {
        let somaTotalGols = 0
        setMensagemTabela('Inserindo na tabela..')
        await apiC.post("artilheiro/buscar", {
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
            "gols": item[0].gols + quantidadeGolNum,
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setMensagem('atualizado!')
                    setNomeJogadorAnterior(item[0].nome)
                    setQuantidadeGolAnterior(quantidadeGolNum)
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
            "gols": quantidadeGolNum,
        }).then(response => {
            if (response.status === 200) {
                setMensagem('Novo nome inserido!')
                setNomeJogadorAnterior(nomeJogador)
                setQuantidadeGolAnterior(quantidadeGolNum)
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
        for (let i = 0; i < dadosSelecionados.length; i++) {
            await apiC.post("artilheiro/delete", {
                "id": dadosSelecionados[i],
                headers: {
                    'x-access-token': token,
                }
            })
                .then(response => {
                    if (response.status === 200) {
                        setMensagem('Jogador deletado')
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setMensagem('erro ao deletar jogador')
                    alert('erro ao deletar jogador')
                    setCarregando(false)
                });
        }


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


    function handleSelecionarTodos() {
        itens.map((item, i) => {
            if (itens[i].id) {
                dadosSelecionados.push(itens[i].id);
            }
        })
    }

    const selecaoLinhas = {
        mode: 'checkbox',
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

    function selecionado(botao) {
        switch (botao) {
            case 'cadastro':
                return setCadastroSelect(true) + setAgendamentoSelect(false) + setAnotacoesSelect(false)
                    + setJornadaSelect(false) + setPagamentoSelect(false) + setTimeSelect(false) + setPrefereciaSelect(false)
            case 'agendamento':
                return setCadastroSelect(false) + setAgendamentoSelect(true) + setAnotacoesSelect(false)
                    + setJornadaSelect(false) + setPagamentoSelect(false) + setTimeSelect(false) + setPrefereciaSelect(false)
            case 'prontuario':
                return setCadastroSelect(false) + setAgendamentoSelect(false) + setAnotacoesSelect(true)
                    + setJornadaSelect(false) + setPagamentoSelect(false) + setTimeSelect(false) + setPrefereciaSelect(false)
            case 'jornada':
                return setCadastroSelect(false) + setAgendamentoSelect(false) + setAnotacoesSelect(false)
                    + setJornadaSelect(true) + setPagamentoSelect(false) + setTimeSelect(false) + setPrefereciaSelect(false)
            case 'pagamento':
                return setCadastroSelect(false) + setAgendamentoSelect(false) + setAnotacoesSelect(false)
                    + setJornadaSelect(false) + setPagamentoSelect(true) + setTimeSelect(false) + setPrefereciaSelect(false)
            case 'time':
                return setCadastroSelect(false) + setAgendamentoSelect(false) + setAnotacoesSelect(false)
                    + setJornadaSelect(false) + setPagamentoSelect(false) + setTimeSelect(true) + setPrefereciaSelect(false)
            case 'preferencias':
                return setCadastroSelect(false) + setAgendamentoSelect(false) + setAnotacoesSelect(false)
                    + setJornadaSelect(false) + setPagamentoSelect(false) + setTimeSelect(false) + setPrefereciaSelect(true)
        }
    }



    return (
        <>
            {/* <Button className="btn-filtro-arquivo" onClick={(e) => paraSair()}><div>{text.sair}</div></Button> */}
            <div className='cabecalho'>
                <div className='espaco'></div>
                <div className='espaco'></div>
                <div className='linha-horizon'></div>
                <Button className="btn-filtro-arquivo esconder" onClick={(e) => navigate('/cadastroUsuario')}>

                </Button>
                <Button className="btn-filtro-arquivo botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.clientes}</div>
                </Button>
                <div className='espa'></div>
                <Button className="btn-filtro-arquivo botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.equipe}</div>
                </Button>
                <div className='espa'></div>
                <Button className="btn-filtro-arquivo botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.agenda}</div>
                </Button>
                <div className='espa'></div>
                <Button className="btn-filtro-arquivo botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.usuarios}</div>
                </Button>
                <div className='espa'></div>
                <Button className="btn-filtro-arquivo botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.formularios}</div>
                </Button>
                <div className='espa'></div>
                <Button className="botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.procedimentos}</div>
                </Button>
                <div className='espa'></div>
                <Button className="botao-cabecalho" onClick={(e) => navigate('/cadastroUsuario')}>
                    <div>{text.configuracoes}</div>
                </Button>
            </div>

            <div className='cabecalho2'>
                {cadastroSelect &&
                    <h3 className='tituloPrincipag'> {text.cadastro}</h3>
                }

                {agendamentoSelect &&
                    <h3 className="tituloPrincipag"> {text.agendamento}</h3>
                }
 

                {anotacoesSelect &&
                    <h3 className='tituloPrincipag'> {text.prontuario}</h3>
                }

                {timeSelect &&
                    <h3 className='tituloPrincipag'> Timeline</h3>
                }

                {prefereciaSelect &&
                    <h3 className='tituloPrincipag'> {text.preferencias}</h3>
                }

                {jornadaSelect &&
                    <h3 className='tituloPrincipag'> {text.jornada}</h3>
                }

                {pagamentoSelect &&
                    <h3 className='tituloPrincipag'> {text.pagamento}</h3>
                }

                <di className='linha-horizontal'></di>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/cadastroUsuario'); selecionado('cadastro') }}>
                    <div className={cadastroSelect ? "selecionado" : "btn-filtro-arquivo"}>{text.cadastro}</div>
                </Button>

                <Button className="botao-cabecalho" onClick={(e) => { navigate('/agendamento'); selecionado('agendamento') }}>
                    <div className={agendamentoSelect ? "selecionado" : "btn-filtro-arquivo"}>{text.agendamento}</div>
                </Button>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/prontuarioPesquisar'); selecionado('prontuario') }}>
                    <div className={anotacoesSelect ? "selecionado" : "btn-filtro-arquivo"} >{text.prontuario}</div>
                </Button>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/cadastroUsuario'); selecionado('time') }}>
                    <div className={timeSelect ? "selecionado" : "btn-filtro-arquivo"}>Timeline</div>
                </Button>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/cadastroUsuario'); selecionado('preferencias') }}>
                    <div className={prefereciaSelect ? "selecionado" : "btn-filtro-arquivo"}>{text.preferencias}</div>
                </Button>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/cadastroUsuario'); selecionado('jornada') }}>
                    <div className={jornadaSelect ? "selecionado" : "btn-filtro-arquivo"}>{text.jornada}</div>
                </Button>
                <Button className="botao-cabecalho" onClick={(e) => { navigate('/cadastroUsuario'); selecionado('pagamento') }}>
                    <div className={pagamentoSelect ? "selecionado" : "btn-filtro-arquivo "}>{text.pagamento}</div>
                </Button>
            </div>


        </>
    )
}