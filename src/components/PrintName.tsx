type props = {
    name: string
};


const PrintName = (props: props) =>{
    return(
        <>
            <span>{props.name}</span>
        </>
    )
}

export default PrintName;