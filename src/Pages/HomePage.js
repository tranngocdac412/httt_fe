import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Footer from "../components/Layout/Footer";
import Menu_left from "../components/Layout/Menu_left";
import Menu_right from "../components/Layout/Menu_right";
import api from "../utils/api";

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
                    reorder: true,
                },
            ],
            data: [],
            uuids: [],
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

    onSub = () => {
        var path = ''
        this.state.uuids.forEach(uuid => {
            path += "&&" + uuid;
        })
        if (path != '') {
            api("computererrormarks/marks", path, 'GET', null)
                .then(res => {
                    console.log(res.data.data)
                    if(res.data.data.length != 0) {
                        alert(`Chẩn đoán: ${res.data.data[0].description} \nGiải pháp: ${res.data.data[0].solution}`)
                    }
                    else {
                        alert("Không đủ dữ liệu")
                    }
                })
        }
        else {
            alert("Vui lòng chọn dấu hiệu")
        }
    }

    onCheck = (e) => {
        if (e.target.checked == true) {
            this.state.uuids.push(e.target.value);
        }
        else {
            this.state.uuids.splice(this.state.uuids.indexOf(e.target.value), 1);
        }
        console.log(this.state.uuids);
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
                                <div className="submit">
                                    <input className="btn btn-primary" type="submit" value="Chẩn đoán" onClick={this.onSub} />
                                </div>
                                <div className="card-body">
                                    {/* <DataTableExtensions {...this.state}>
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
                                    </DataTableExtensions> */}
                                    <table>
                                        <tr>
                                            <th></th>
                                            <th>Dấu hiệu</th>
                                        </tr>
                                        {this.state.data.map(e => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <input type="checkbox" value={e.uuid} onChange={this.onCheck}></input>
                                                    </td>
                                                    <td>
                                                        {e.description}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </table>
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