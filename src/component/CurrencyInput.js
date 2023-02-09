import PropTypes from "prop-types";
import './CurrencyInput.css';

function CurrencyInput({amount, onAmountChange, onCurrencyChange, currency , currencies}) {
    return (
        <div className="group">
            <input style={{fontSize:20}} type="text" value={amount} onChange={e => onAmountChange(e.target.value)}/>
            <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
                {currencies.map((currency => (
                    <option value={currency}>{currency}</option>
                )))}
            </select>
        </div>
    )
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    curriencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurrencyInput;