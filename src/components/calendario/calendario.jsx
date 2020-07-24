import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { connect } from 'react-redux';
import { cargarListadoDeEventos } from './actions/eventos';

class Calendar extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.cargarEventosAlStore()
        }, 5000); 
    }
    render() {
        return (
            <FullCalendar defaultView='dayGridMonth'
                plugins={[dayGridPlugin]}
                events={this.props.eventos}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        eventos: state.eventosReducer.listado
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        cargarEventosAlStore: () => dispatch(
            {
                type: 'EVENTOS_ACTUALIZADOS',
                listado: cargarListadoDeEventos()
            }
        )
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Calendar)
