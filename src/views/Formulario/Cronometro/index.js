import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Cronometro.css';

class Cronometro extends React.Component{
    
    render(){
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        var lastMonth = new Date(today.getMonth() - 1);

        return (
            <React.Fragment>
                <div id="cronometro">
                    <div id="sw-time">00:00:00</div>
                </div>

                

                <div className="ui fluid popup">
                    <div className="ui grid">
                        <div className="two column row">
                            <div className="column">Início</div>
                            <div className="column">Término</div>
                        </div>
                        <div className="two column row">
                            <input className="column ui labed input" type="text" placeholder="4:59PM"/>
                            <input className="column" type="text" placeholder="5:29PM"/>
                        </div>
                        <div className="one centered column row">
                        <InfiniteCalendar
                                width={400}
                                height={200}
                                selected={today}
                                min={new Date(2020, lastMonth, 1)}
                                max={new Date()}
                                maxDate={new Date()}
                                disabledDays={[6,0]}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}



export default Cronometro;