//IMPORTAÇÕES
import React, { useState } from 'react';/*eslint-disable*/
import { useForm } from "react-hook-form";/*eslint-disable*/
import DatePicker, { registerLocale } from 'react-datepicker'
import '../../../css/login/upload.css';
// import "react-datepicker/dist/react-datepicker.css";


//ICONES

import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-BR', ptBR)

/*  COMO USAR
    Importe a modal para dentro do componente que irá fazer uso dela.
    ex: import Historico from '../../calendario/calendario'

    Após isso, posicione-a dentro do return do seu componente.
    ex: <Historico 
            imputCustomisado='De:'
            data={dataInicio}
            setData={setDataInicio}
            dataMax={dataMax}
            dataMin={dataMin}>
        </Historico>
        <Historico 
            imputCustomisado='Até:'
            data={dataInicio}
            setData={setDataInicio}
            dataMax={dataMax}
            dataMin={dataMin}>
        </Historico>*/

        
export default function TrocaDeTitularidade(props) {
    const [valor, setValor] = useState()// HOOKS VALIDAÇÂO
    const { register, handleSubmit, errors } = useForm();

    // const InputCustomisado = ({ value, onClick }) => (
    //     <Button className="campo-calendario campo-texto-cor-3" onClick={onClick}>
    //         {props.imputCustomisado} {value}
    //         <img clasName="icone-calendario" src={calendario()} alt="calendario"/>
    //     </Button>
    // );

    if(props.rota && props.rota == "filtroSimcard"){
        if(props.formato === "YYYY/MM"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="yyyy/MM"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="0000/00"
                    />
                    <div className="texto-input-customizado-calendario-filtro fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro">
                    </div>
                </>
            )
        }else if(props.formato === "DD/MM/YYYY"){ 
            return(
                <>
                    <DatePicker
                        className="campo-texto-calendario-filtro custom-datepicker"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000"
                        readOnly={props.readOnly}
                    />
                    <div className="texto-input-customizado-calendario-filtro fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro">
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000 - 00:00"
                    />
                    <div className="texto-input-customizado-calendario-filtro fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro">
                    </div>
                </>
            )
        }

    } else if(props.rota && props.rota == "filtroSimcard-b"){
        if(props.formato === "YYYY/MM"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-b"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="yyyy/MM"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="0000/00"
                    />
                    <div className="texto-input-customizado-calendario-filtro-b fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-b">
                    </div>
                </>
            )
        }else if(props.formato === "DD/MM/YYYY"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-b"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000"
                    />
                    <div className="texto-input-customizado-calendario-filtro-b fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-b">
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-b"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000 - 00:00"
                    />
                    <div className="texto-input-customizado-calendario-filtro-b fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-b">
                    </div>
                </>
            )
        }

    }else if(props.rota && props.rota == "filtroSimcard-c"){
        if(props.formato === "YYYY/MM"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-c"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="yyyy/MM"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="0000/00"
                    />
                    <div className="texto-input-customizado-calendario-filtro-c fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-c">
                    </div>
                </>
            )
        }else if(props.formato === "DD/MM/YYYY"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-c"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000"
                    />
                    <div className="texto-input-customizado-calendario-filtro-c fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-c">
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro-c"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy - HH:mm"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000 - 00:00"
                    />
                    <div className="texto-input-customizado-calendario-filtro-c fonte-cor-15">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario-filtro-c">
                    </div>
                </>
            )
        }
    }else if (props.rota && props.rota == "editarSolicitacao"){
         if(props.formato === "DD/MM/YYYY"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000"
                    />
                    <div className="texto-input-customizado-calendario-solicitacao">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario">
                    </div>
                </>
            )
        }
    }
    else{
        if(props.formato === "YYYY/MM"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="yyyy/MM"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="0000/00"
                    />
                    <div className="texto-input-customizado-calendario">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario">
                    </div>
                </>
            )
        }else if(props.formato === "DD/MM/YYYY"){
            return(
                <>
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => props.setData(date)}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Horário:"
                        dateFormat="dd/MM/yyyy"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000"
                        readOnly={props.readOnly}
                    />
                    <div className="texto-input-customizado-calendario-b">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario">
                    </div>
                </>
            )
        }else{
            return(
                <>
                
                    <DatePicker
                        className="campo-texto-cor-3 campo-texto-calendario-filtro"
                        // customInput={<InputCustomisado/>}
                        selected={props.data}
                        onChange={date => {props.setData(date);}}
                        showTimeInput
                        timeFormat="HH:mm"
                        timeInputLabel="Selecione o horário:"
                        dateFormat="dd/MM/yyyy - HH:mm"
                        locale="pt-BR"
                        minDate={props.dataMin}
                        maxDate={props.dataMax}
                        useWeekdaysShort={true}
                        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
                        placeholder="00/00/0000 - 00:00"
                    />
                    <div className="texto-input-customizado-calendario-b">
                        {props.imputCustomisado}
                    </div>
                    <div className="posicao-icone-calendario">
                    </div>
                </>
            )
        }
    }
    
}
