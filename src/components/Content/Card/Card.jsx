export const Card = ({card}) => {
    return (
        <>
            <div className={'w-[150px] h-[100px] bg-white shadow-xl p-2 pt-4 grid items-center justify-center'}>
                <h1 className={'text-ellipsis overflow-hidden whitespace-nowrap font-semibold capitalize text-xl'}>{card.title}</h1>
                <p>{card.id}</p>
            </div>
        </>
    );
};