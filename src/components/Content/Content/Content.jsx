import {ListCards} from "../ListCards/ListCards";
import axios from "axios";


export const Content = props => {
    return (
        <>
            <div className={'w-full h-full'}>
                <ListCards />
            </div>
        </>
    );
};