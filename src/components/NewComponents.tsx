

type NewComponentsType = {
    // students: Array<StydentType>
    students: StydentType[]
};

type StydentType = {
    id:number
    name: string
    age: number
}

export const NewComponents = (props: NewComponentsType) => {
    return (
        <ul>
            {props.students.map((s, index) => {
            return( 
            <li key={s.id}>
                <span>{s.name}</span>  
                <span> age: {s.age}</span>
            </li>
            )
            })}
        </ul>
    );
};