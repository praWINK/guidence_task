import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import IndexPage from '../components/indexPage';
import {getWidgets,getWidgetOptions} from '../redux/actions/indexPage'

const mapStateToProps = (state) => {
    return ({
        receivedWidgets: state.indexPage.receivedWidgets,
        widgetOptions: state.indexPage.getWidgets
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({"getWidgets":getWidgets,"getWidgetOptions":getWidgetOptions},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (IndexPage);




