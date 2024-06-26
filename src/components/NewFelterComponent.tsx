
type NewFelterComponentPropsType = {
    currentMoney: { banknots: string, value: number, number: string }[],
    onClickFilterHandler: (name: string) => void
};


export const NewFelterComponent = ({ currentMoney, onClickFilterHandler }: NewFelterComponentPropsType) => {
    return (
        <div>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                return (
                <li key={index}>
                    <span>{objFromMoneyArr.banknots}</span>
                    <span>{objFromMoneyArr.value}</span>
                    <span>{objFromMoneyArr.number}</span>
                </li>
            );
            })}
        </ul>
            <div style={{ marginLeft: "45px" }}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </div>
    );
};