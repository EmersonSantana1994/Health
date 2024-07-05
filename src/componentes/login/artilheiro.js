import React, { useState, useEffect} from 'react';/*eslint-disable*/
import '../../css/login/artilheiro.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Artilheiro() {

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
                if(error.response.data === 'não autenticado'){
                    navigate('/')
                }
            });
        }
        setTimeout(autenticar, 5000);
    }, [])


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
      let quantidadeGolNum =  parseInt(quantidadeGol, 10)
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
        let quantidadeGolNum =  parseInt(quantidadeGol, 10)
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

    async function handleDeletar(){
        setMensagem('Deletando..')
for(let i = 0; i < dadosSelecionados.length; i++){
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

    
    function handleSelecionar(simcard){
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].id == simcard){
                dadosSelecionados.push(itens[i].id);
                break;
            }
    }
    }


    function handleDesselecionar(simcard){
        for (let i = 0; i < dadosSelecionados.length; i++) {
            if (dadosSelecionados[i] == simcard){
                dadosSelecionados.splice(i, 1);
                break;
            }
        }
    }


    function handleDesselecionarTodos(){
    }


    function handleSelecionarTodos(){
        itens.map((item,i)=>{
            if(itens[i].id){
                dadosSelecionados.push(itens[i].id);
            }
        })
    }

    const selecaoLinhas = {
        mode: 'checkbox' ,
        onSelect: (row, isSelect, rowIndex, e) => {
            if(isSelect){
                handleSelecionar(row.id)
            }else{
                handleDesselecionar(row.id)
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if(isSelect){
                handleSelecionarTodos()
            }else{
                handleDesselecionarTodos()
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" { ...rest }/>
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" { ...rest }/>
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
                <label>Quantidade de gols</label>
                <Form.Control className="label-artilheiro"
                    onChange={e => { setQuantidadeGol(e.target.value) }}
                    value={quantidadeGol == 0 ? '' : quantidadeGol}
                />
                 <label className="label-quatidade">Quantidade total de gols marcados</label>
                <Form.Control className="label-quantgol"
                    value={somaGols}
                />
            </div>
            <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar()}>
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
                            selectRow={ selecaoLinhas }
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
        </>
    )
}