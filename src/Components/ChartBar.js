import './ChartBar.css';
function ChartBar(props){
    let height = (props.value.amount / props.totalAmount) * 100;
    (height===0 ? height=0 : height+=60);
    return(
        <div>
            <div className='bars-container'>
                <div className="outer-box">
                    <div className="inner-box" style={{height:height}}>
                    </div>
                </div>
            </div>
            <div>
                <label className='labels'>{props.value.month}</label>
            </div>
        </div>
    );
}

export default ChartBar;