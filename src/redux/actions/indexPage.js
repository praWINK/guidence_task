export function getWidgets(params) {
    let payload = [];
    switch (params) {
        case 'Templates':
            payload = templates;
            break;
        case 'Photos':
            payload = photos;
            break;
        case 'Elements':
            payload = elements;
            break;
        case 'Text':
            payload = text;
            break;
        case 'Videos':
            payload = videos;
            break;
        case 'Background':
            payload = background;
            break;
        case 'more':
            payload = more;
            break;
        default:
            payload = []


    }
    return (dispatch) => {
        dispatch({ type: "Fetched_Widgets", payload: payload })
        // Instead of using static data, we can use api services
    }
}

let templates = [
    {widgetName:"Charts",
    widgetImgs:["https://www.pinclipart.com/picdir/middle/322-3224006_advocate360-growth-chart-png-clipart.png","https://www.clipartkey.com/mpngs/m/53-538806_sale-clipart-revenue-growth-price-increase-chart.png","https://svg-clipart.com/thumbs/cartoon/5rdDkm1-pie-chart-clipart.jpg"]},
    {widgetName:"Gradients",widgetImgs:["https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-purple-gradient-cartoon-border-image_1439171.jpg","https://i.pinimg.com/736x/d2/2b/67/d22b678cd6431e29d9c4f217dde85a9c.jpg","https://png.pngtree.com/png-clipart/20190921/original/pngtree-cool-fashion-gradient-square-border-png-image_4727737.jpg"]}]
let photos = [{
    widgetName:"Photos",
    widgetImgs:["https://animaloilmaker.com/images/man-clipart-transparent-background-9.jpg","https://us.123rf.com/450wm/kakigori/kakigori1702/kakigori170200067/72364493-stock-vector-beautiful-young-brunette-businesswoman-holding-folder-with-documents.jpg?ver=6"]
}]
let elements = []
let text = []
let videos = []
let background = []
let more = []

export function getWidgetOptions() {
    return (dispatch) => {
        dispatch({ type: "get_Widgets", payload: widgetOptions })

    }
}

let widgetOptions = [
    {
    title:"Templates",
    icon:"fa fa-address-book"
    },
    {
        title:"Photos",
        icon:"fa fa-picture-o"
    },
    {
        title:"Elements",
        icon:"fa fa-delicious"
    },
    {
        title:"Text",
        icon:"fa fa-text-width"
    },
    {
        title:"Videos",
        icon:"fa fa-video-camera"
    },
    {
        title:"Background",
        icon:"fa fa-address-book"
    },
    {
        title:"more",
        icon:"fa fa-ellipsis-h"
    }
]

