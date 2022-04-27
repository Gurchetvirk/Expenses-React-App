import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props){
    let values=[
        {
            id:1,
            month:"Jan",
            amount:0
        },
        {
            id:2,
            month:"Feb",
            amount:0
        },
        {
            id:3,
            month:"Mar",
            amount:0
        },
        {
            id:4,
            month:"Apr",
            amount:0
        },
        {
            id:5,
            month:"May",
            amount:0
        },
        {
            id:6,
            month:"Jun",
            amount:0
        },
        {
            id:7,
            month:"Jul",
            amount:0
        },
        {
            id:8,
            month:"Aug",
            amount:0
        },
        {
            id:9,
            month:"Sep",
            amount:0
        },
        {
            id:10,
            month:"Oct",
            amount:0
        },
        {
            id:11,
            month:"Nov",
            amount:0
        },
        {
            id:12,
            month:"Dec",
            amount:0
        }
    ];
    let totalAmount = 0;
    props.items.map( (item) => {
        let amount = parseInt(item.amount);
        totalAmount+=amount;
        values[(parseInt(item.date.slice(5,7)))-1].amount+= amount;
        return 0;
    });
    return (
        <div className="chart-container">
            {values.map( (value) =>
            {
                return <ChartBar key={value.id} value={value} totalAmount={totalAmount} />
            } )}
        </div>
    );
}

export default Chart;