export function getWidgets(params) {
    let payload = [];
    switch (params) {
        case 'templates':
            payload = templates;
            break;
        case 'photos':
            payload = photos;
            break;
        case 'elements':
            payload = elements;
            break;
        case 'text':
            payload = text;
            break;
        case 'videos':
            payload = videos;
            break;
        case 'background':
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

    }
}

let templates = [{widgetName:"Charts",widgetImgs:["https://www.pinclipart.com/picdir/middle/322-3224006_advocate360-growth-chart-png-clipart.png","https://www.clipartkey.com/mpngs/m/53-538806_sale-clipart-revenue-growth-price-increase-chart.png","https://svg-clipart.com/thumbs/cartoon/5rdDkm1-pie-chart-clipart.jpg"]},{widgetName:"Gradients",widgets:["https://www.pinclipart.com/picdir/middle/244-2445104_bar-chart-graph-of-a-function-diagram-clip.png","https://library.kissclipart.com/20180903/ogq/kissclipart-bar-chart-graphic-clipart-bar-chart-bc7d8c4c86497b1d.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEeJ0Hejww7uVANY--J6a-ItD_kJ9CmgzMv6DvZ0l7Az7qxqOk&usqp=CAU"]}]
let photos = [4, 5, 6]
let elements = [7, 8, 9]
let text = [11, 12, 13]
let videos = [14, 15, 16]
let background = [17, 18, 19]
let more = [21, 22, 23]
