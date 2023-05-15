import {Card} from "../Card/Card";
import {useEffect, useMemo, useState} from "react";
import {calcHeight, calcWidth} from "../../../utils/utils";
import {ContentList} from "../ContentList/ContentList";
import {fetchPosts} from "../../../api/postsService";


export const ListCards = () => {
    const [cols, setCols] = useState(calcWidth());
    const [rows, setRows] = useState(calcHeight());
    const [limit, setLimit] = useState(cols * rows);
    const [data, setData] = useState([]);

    const saved = useMemo(() => fetchPosts(limit, setData), [limit]);

    const upd = () => {
        setCols(calcWidth())
        setRows(calcHeight())
        if (limit < calcHeight() * calcWidth())
            setLimit(calcWidth() * calcHeight())
    }

    useEffect(() => {
        return async () => {
            await fetchPosts(limit, setData)
            window.addEventListener("resize", async () => {
                upd()
            })
        };
    }, [limit]);


    return (
        <>
            <ContentList rows={rows} cols={cols}>
                {data.filter((card, idx) => card.id <= rows * cols).map((card, idx) =>
                    <Card key={card.id} card={card}/>
                )}
            </ContentList>
        </>
    );
};