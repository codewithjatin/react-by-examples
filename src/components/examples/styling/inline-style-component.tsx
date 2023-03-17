const InlineStyleComponent = () => {
    const style1 = {
        borderLeft: '5px', borderColor: '#000000', padding: '10px 10px',
        borderStyle: 'solid',
        backgroundColor: 'gray',
        color: 'white',
        marginTop: '5px',
    };
    return (
        <div>
            <p style={{
                borderLeft: '5px', borderColor: '#ff0000', padding: '10px 10px',
                borderStyle: 'solid',
                backgroundColor: 'gray',
                color: 'white',
            }}>This is style with inline style attributes</p>
            <p style={style1}>This is style with inline style attributes</p>
        </div>
    )
}

export default InlineStyleComponent;