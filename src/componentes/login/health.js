import React, { useRef } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { setaDropdown } from '../../utils/alternanciaIcones';
import SelectStatusContrato from '../login/selectStatusContrato'
import '../../assets/css/carrossel.css';
import '../../assets/css/conteudo.css';
import '../../assets/css/style.css';
import icone1 from '../../icones/icone-seta-dropdown.svg';
import icone2 from '../../icones/logo192.png';
import icone3 from '../../icones/Captura-de-tela-2023-11-24 193610.png';
// import Navbar from "../../NavBar/NavBar";

export default function Healf() {


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');
    const [revelarSelectContrato, setRevelarSelectContrato] = useState(false);
    const [nomeContrato, setNomeContrato] = useState('');
    const [resetContrato, setResetContrato] = useState(false);
    const [cdContrato, setCdContrato] = useState();
    const [filtroSituacaoContrato, setFiltroSituacaoContrato] = useState('')
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    const carousel2 = useRef(null);
    const carousel3 = useRef(null);




    return (
        <>
            <div className="coluna-alterar-ciclo-vida-1-status-contrato">
                <Form.Label className="fonte-cor-1 label-campo-status-contrato status-contrato-filtro">Status do contrato </Form.Label>
                <div className="break-3"></div>
                <Form.Control name="STATUS_CONTRATO" type="text" value={nomeContrato == 'Selecione' || resetContrato ? '' : nomeContrato} className="d-none" onChange={(e) => setCdContrato(e.target.value)} />
                {revelarSelectContrato == false &&
                    <Button className="campo-texto-cor-3 campo-select-filtro-b" onClick={() => setRevelarSelectContrato(!revelarSelectContrato)}>
                        <div className="fonte-cor-16 label-campo-contrato-filtro">{resetContrato ? "Selecione" : nomeContrato ? nomeContrato.split('*')[0] : "Selecione"}</div>
                        <img className={revelarSelectContrato ? "campo-select-icone-ativado-filtro nao-selecionavel" : "campo-select-icone-desativado-filtro nao-selecionavel"} src={setaDropdown()} alt="drop" />
                    </Button>
                }
                {revelarSelectContrato === true &&
                    <SelectStatusContrato
                        setRevelarSelectContrato={setRevelarSelectContrato}
                        setNomeContrato={setNomeContrato}
                        setCdContrato={setCdContrato}
                        setFiltroSituacaoContrato={setFiltroSituacaoContrato}
                        nomeContrato={nomeContrato}
                        rota={"filtroSimcard"}
                        setResetContrato={setResetContrato}
                    >
                    </SelectStatusContrato>
                }
            </div>
        </>
    );
}