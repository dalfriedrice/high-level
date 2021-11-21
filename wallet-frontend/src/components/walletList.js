import React, { useEffect, useState } from 'react';
import RenderButtons from './buttons';
import { Pages, WalletHeaders } from './../constants/constant';
import { CSVLink } from "react-csv";
import ReactPaginate from 'react-paginate';
import renderToastr from './renderToastr';

const WalletList = (props) => {
    const { history } = props
    const [wallets, setWallets] = useState([]);
    const [csvData, setCSVData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const csvReport = {
        data: csvData,
        headers: WalletHeaders,
        filename: 'Wallets.csv'
    };

    useEffect(() => {
        fetch('wallet').then(res => res.json())
            .then(data => {
                if (data && data.length) {
                    renderToastr('success', 'Wallets Fetched Successfully');
                    data.forEach(d => {
                        d['creation_date'] = d?.creation_date.slice(0, 19).replace('T', ' ')
                    });
                    const slicedData = data.slice(offset, offset + perPage);
                    setWallets(data);
                    setPaginatedData(slicedData);
                    setOffset(offset + perPage);
                    setPageCount(Math.ceil(data.length / perPage))
                }
            }).catch(err => {
                renderToastr('error', `Something Went Wrong : ${err}`);
            });;
    }, []);

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const paginatedData = wallets.slice(offset * selectedPage, offset * selectedPage + perPage);
        setPaginatedData(paginatedData);
    };

    const generateCSVReport = () => {
        const walletData = wallets.map(wallet => {
            const { wallet_id, ...newObj } = wallet;
            return newObj;
        })
        setCSVData(walletData);
    }

    const viewWalletDetails = (id) => {
        history.push(`/wallet/${id}`);
    }

    const generateWalletList = () => {
        return paginatedData.map((wallet, idx) => {
            return (
                <li key={idx.toString()} className="child-li">
                    <p className="row-column">{wallet.wallet_name}</p>
                    <p className="row-column">{wallet.opening_bal}</p>
                    <p className="row-column">{wallet.creation_date}</p>
                    <p className="row-column"><i onClick={() => viewWalletDetails(wallet.wallet_id)} className="fa fa-eye"></i></p>
                </li>
            )
        })
    }

    return (
        <>
            {RenderButtons(Pages.Wallet_list)}
            {paginatedData.length ?
                <><ul className="parent-ul">
                    <li className="child-li">
                        <h3 className="header-column">Wallet Name</h3>
                        <h3 className="header-column">Opening Balance</h3>
                        <h3 className="header-column">Creation Date</h3>
                        <h3 className="header-column">View Transactions</h3>
                    </li>
                    {generateWalletList()}
                </ul>
                    <div className="utility-btns">
                        <CSVLink onClick={() => generateCSVReport()} className="csvLink" {...csvReport}>Download Wallets List</CSVLink>

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
                    No Wallet is set up
                </h3>
            }

        </>
    )
}

export default WalletList;