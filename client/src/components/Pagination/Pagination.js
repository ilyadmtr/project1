import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import st from './Pagination.module.scss'
import {setPage} from "../../store/reducer/deviceSlice";

const Pagination = () => {
    const dispatch=useDispatch()
    const {totalCount, limit, page} = useSelector(state => state.deviceReducer)
    const pageCount = Math.ceil(totalCount / limit)

    const pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={st.pagination}>
            {pages.map(pageItem =>
                <div
                    key={pageItem}
                    className={st.pagination__page + ` ${page === pageItem ? st.active : ''}`}
                    onClick={()=>dispatch(setPage(pageItem))}
                >
                    {pageItem}
                </div>
            )}
        </div>
    );
};

export default Pagination;