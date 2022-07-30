import React from "react";


export const Pagination = ({activePage, totalPages, setActivePage}: {activePage:number; totalPages:number; setActivePage:(value:number) => void}) => {
    return (

        <nav className="os-pagination">
            <a href="#" className="page-link previous" onClick={() => setActivePage(activePage-1)}>
                <i className="bi bi-chevron-left"></i>
            </a>

            <ul className="page-list">
                {new Array(totalPages)
                .fill(1)
                .map((item, index) => {
                    return <li>
                        <a href="#"
                           className={`page-link ${activePage === index + 1? 'active': ''}`}
                        onClick = {() => setActivePage(index+1)}>
                            {index+1}
                        </a>
                    </li>
                })}
            </ul>

            <a href="#" className="page-link next" data-element="nav-next" onClick={() => setActivePage(activePage+1)}>
                <i className="bi bi-chevron-right"></i>
            </a>
        </nav>


    )
}