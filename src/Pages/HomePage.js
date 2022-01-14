import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Footer from "../components/Layout/Footer";
import Menu_left from "../components/Layout/Menu_left";
import Menu_right from "../components/Layout/Menu_right";
import api from "../utils/api";
import axios from "axios";

// const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
//     <div className="form-check">
//         <input
//             htmlFor="booty-check"
//             type="checkbox"
//             className="form-check-input"
//             ref={ref}
//             onClick={onClick}
//             {...rest}
//         />
//         <label className="form-check-label" id="booty-check" />
//     </div>
// ));

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    id: 1,
                    name: "Lỗi",
                    selector: (row) => row.description,
                    sortable: true,
                    reorder: true
                },
            ],
            data: [],
            uuids: []
        }
    }

    componentDidMount() {
        api("computermarks", null, "GET", null)
            .then(res => {
                console.log(res.data)
                this.setState({
                    data: res.data.data
                });
                console.log(res.data.data);
            })
    }

    render() {
        return (
            <div className="sb-nav-fixed">
                <Menu_right />
                <div id="layoutSidenav">
                    <Menu_left />
                    <div id="layoutSidenav_content">
                        <div className="container-fluid px-4">
                            <div className="card mb-4">
                                <div className="card-header">
                                    Chẩn đoán
                                </div>
                                <div className="card-body">
                                    <DataTableExtensions {...this.state}>
                                        <DataTable
                                            columns={this.state.columns}
                                            data={this.state.data}
                                            noHeader
                                            defaultSortField="id"
                                            defaultSortAsc={false}
                                            pagination
                                            highlightOnHover
                                            selectableRows
                                            selectableRowsComponent={
                                                React.forwardRef(({ onClick, ...rest }, ref) => (
                                                    <div className="form-check">
                                                        <input
                                                            htmlFor="booty-check"
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            ref={ref}
                                                            onClick={onClick}
                                                            {...rest}
                                                        />
                                                        <label className="form-check-label" id="booty-check" />
                                                    </div>
                                                ))
                                            }
                                        />
                                    </DataTableExtensions>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    };
}
export default HomePage;