import React from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends React.Component{
    render(){
        return(
            < Media  {...this.props.data}   />
        )
    }
}

function mapStateToProps(state, props) {
    return{
        data:state.data.entities.media[props.id],
    }
}

export default connect(mapStateToProps) (MediaContainer);