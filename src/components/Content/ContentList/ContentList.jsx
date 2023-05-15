export const ContentList = ({cols, rows, children}) => {
    return (
        <div className={`grid grid-cols-${cols} grid-rows-${rows} gap-4 m-4`}
             style={{
                 gridTemplateColumns: `repeat(${cols}, 1fr)`,
                 gridTemplateRows: `repeat(${rows}, 1fr)`
             }}>
            {children}
        </div>
    )
}