import React, { useEffect, useState } from 'react';
import RenderButtons from './buttons';
import { Pages, TransactionHeaders, HerokuApiEndpoint } from './../constants/constant';
import { CSVLink } from "react-csv";
import ReactPaginate from 'react-paginate';
import renderToastr from './renderToastr';

const WalletDetails = (props) => {
    const { match } = props;
    const [transactions, setTransactions] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const csvReport = {
        data: transactions,
        headers: TransactionHeaders,
        filename: 'Transactions.csv'
    };

    useEffect(() => {
        fetch(`${HerokuApiEndpoint}transaction/fetch?walletId=${match.params.walletId}&limit=100`).then(res => res.json())
            .then(data => {
                if (data && data.length) {
                    renderToastr('success', 'Transactions Fetched Successfully');
                    data.forEach(d => {
                        d['t_date'] = d?.t_date.slice(0, 19).replace('T', ' ')
                    });
                    const slicedData = data.slice(offset, offset + perPage);
                    setTransactions(data);
                    setPaginatedData(slicedData);
                    setOffset(offset + perPage);
                    setPageCount(Math.ceil(data.length / perPage))
                }
            }).catch(err => {
                renderToastr('error', `Something Went Wrong : ${err}`)
            });
    }, [])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const paginatedData = transactions.slice(offset * selectedPage, offset * selectedPage + perPage);
        setPaginatedData(paginatedData);
    };

    const generateTransactionList = () => {
        return paginatedData.map((transaction, idx) => {
            return (
                <li key={idx.toString()} className="child-li">
                    <p className="row-column">{transaction.t_id}</p>
                    <p className="row-column">{transaction.t_amount}</p>
                    <p className="row-column">{transaction.current_bal}</p>
                    <p className="row-column">{transaction.t_type}</p>
                    <p className="row-column">{transaction.t_date}</p>
                </li>
            )
        })

    }

    return (
        <>
            {RenderButtons(Pages.Wallet_Details, match.params.walletId)}
            {paginatedData.length ?
                <><ul className="parent-ul">
                    <li className="child-li">
                        <h3 className="header-column">Transact ID</h3>
                        <h3 className="header-column">Transact Amnt</h3>
                        <h3 className="header-column">Current Bal</h3>
                        <h3 className="header-column">Type</h3>
                        <h3 className="header-column">Transact Date</h3>
                    </li>
                    {generateTransactionList()}
                </ul>
                    <div className="utility-btns">
                        <CSVLink className="csvLink" {...csvReport}>Download Transactions List</CSVLink>

                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"} />
                    </div>
                </>
                : <h3>
                    No Transaction is done yet
                </h3>}
        </>
    )
}

export default WalletDetails;
