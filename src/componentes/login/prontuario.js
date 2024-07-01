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


export default function Pronturario(props) {
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
    const [idEnviar, setidEnviar] = useState(0)
    const [nomeArquivo, setnomeArquivo] = useState('')

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

if(modal.current){
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
        async function listar(e) {
            await apiC.post("prontuario/listar", {
            })
                .then(response => {
                    console.log("gggg",response.data.result )
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


    async function atualizar(e) {
        console.log("atualizouuuuu")
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






    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                
            </p>,
            formatter: (cell, row) => {
                return <p className='corpadrão'>{cell === null ? '-' : cell}</p>;
            },
        },
 
        {
            dataField: 'data',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                
            </p>,
              formatter: (cell, row) => {
                const formData = new Date(cell)
                        let dt = formData.toLocaleString('pt-BR')
                return <p className='ppp corpadrão'>{dt === null ? '-' : dt}</p>;
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

   function enviarDetalheLinha(id, nome){
setidEnviar(id)
setnomeArquivo(nome)
   }

   function enviarDetalhe(){
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

    function fecharTela(){
        setAbrirAdicionar(!abrirAdicionar)
    }

    return (
        <>


                    {voltarProntuarioo ? 
        
    
        <ModalAdicionar atualizar={atualizar}></ModalAdicionar>
 
 :
 
     <div className='modal'>
              
 
       
        
              <div ref={modal} className="modal-content">
 
           
              <span className="close" onClick={handleCancelar}>&times;</span>

            
                     
             <BootstrapTable // TABELA
                                     classes={"tabela"}
                                     condensed={true}
                                     keyField='id_pro'
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
                 <Button className="botaoCadastro" onClick={(e) => { enviarDetalhe()}}>
                     <div>Adicionar</div>
                 </Button>
                 <Button className="botaoCadastro">
                     <div>Limpar</div>
                 </Button>
                
        
                 </did>
        
           
 
              </div>
        
             
        
        
         </div>
         
 //  <ModalAdicionar></ModalAdicionar> :
 
         }
        

        </>
    )
}


