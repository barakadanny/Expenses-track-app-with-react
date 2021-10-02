import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItm.css';
function ExpenseItem(props){
    
    return (
        <card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </card>
    )
}

export default ExpenseItem;