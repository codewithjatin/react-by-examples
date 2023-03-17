import style from './component.module.css';

const Component = () => {
    return (
        <>
            <div className={style.header}>
                This is sample header
            </div>
        </>
    )
}

const Component2 = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.paragraph}>This is a paragraph text.</div>
            </div>
        </>
    )
}

export { Component, Component2 };