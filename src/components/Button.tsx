type ButtonPropsType = {
    name:string
    collBack:()=>void
};

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = ()=>{
        props.collBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};