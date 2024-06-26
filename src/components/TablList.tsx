

type TablListType = {
    auto: TopCarsType[]
};

type TopCarsType = {
    manufacturer: string
    model: string
}

export const TablList = (props: TablListType) => {
    return (
        <table>
            {props.auto.map((a, index)=>{
                return(
                    <tr key={index}>
                        <th>{a.manufacturer}</th>
                        <th>{a.model}</th>
                    </tr>
                )
            })}
        </table>
        );
};