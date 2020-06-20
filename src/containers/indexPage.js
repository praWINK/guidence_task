import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../components/indexPage';
import {getWidgets} from '../redux/actions/indexPage'

const mapStateToProps = (state) => {
    return ({
        receivedWidgets: state.indexPage.receivedWidgets
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({"getWidgets":getWidgets},dispatch)
    
}

export default connect(mapStateToProps, mapDispatchToProps) (IndexPage);




