import React from 'react'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


const Myfile = () => {
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const result = async () => {
            const rsp = await fetch("https://jsonplaceholder.typicode.com/comments?_page=1&_limit=5")
            const data = await rsp.json();
            setItem(data)
            // setLoading(true)
            // console.log("....",data)
        }
        result()
    }, [])


    const fetchdata = async (currentpage) => {
        const rsps = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentpage}&_limit=5`
        );
        const detail = await rsps.json();
        // setLoading(true)
        return detail
    }

    const handlePageClick = async (data) => {
        // console.log("clicked", data.selected)
        let currentpage = data.selected + 1
        console.log("cuurent", currentpage)
        const commentsFormServer = await fetchdata(currentpage);
        setItem(commentsFormServer);
        // setLoading(true)
    }

    return (

        <div className="container">
            <div className="row m-2">
                {item?.map((item) => {
                    return (
                        <div key={item.id} className="col-sm-6 col-md-4 v my-2">
                            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                <div className="card-body">
                                    <h5 className="card-title text-center h2">Id :{item.id} </h5>
                                    <h6 className="card-subtitle mb-2 text-muted text-center">
                                        {item.email}
                                    </h6>
                                    <p className="card-text">{item.body}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

        </div>

    )
}

export default Myfile;
