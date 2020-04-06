import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Cronometro.css';

class Cronometro extends React.Component {

    state = {
        data: {
            dia: "",
            diaDaSemana: "",
            mes: "",
            ano: ""
        },
        tempoCronometro: 0
    }

    valoresData = () => {
        this.props.gravaValoresDoCronometro(this.state.data);
    }

    render() {
        var today = new Date();
        //var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        var lastMonth = new Date(today.getMonth() - 2);

        return (
            <React.Fragment>
                <div id="cronometro" >
                    <div id="sw-time">00:00:00</div>
                </div>
                <div className="ui  popup">
                    <div className="ui fluid grid">
                        <div className="two column row">
                            <div className="column">Início</div>
                            <div className="column">Término</div>
                        </div>
                        <div className="two column row">
                            <input className="column ui labed input" type="text" placeholder={(this.props.hora + ":" + this.props.minuto + ":" + this.props.segundo)} />
                            <input className="column" type="text" placeholder="5:29PM" />
                        </div>
                        <div className="one centered column row" onClick={this.valoresData}>
                            <InfiniteCalendar
                                width={400}
                                height={200}
                                selected={false}
                                min={new Date(2020, lastMonth, 1)}
                                max={new Date()}
                                maxDate={new Date()}
                                disabledDays={[6, 0]}
                                onSelect={(date) => {
                                    /*\
                                        A contagem começa a partir do 0. Logo, Domingo = 0, Janeiro = 0.
                                        getDay -- dia da semana
                                        getMonth -- mês
                                        getFullYear -- ano
                                    \*/
                                    var data = this.state.data;
                                    data.dia = date.getDate();
                                    data.diaDaSemana = date.getDay();
                                    data.mes = date.getMonth();
                                    data.ano = date.getFullYear();

                                    this.setState({
                                        data: data
                                     });
                                }}
                            />
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}



export default Cronometro;