import React, { Component } from 'react';
import Footer from '../components/Layout/Footer';
import Menu_left from '../components/Layout/Menu_left';
import Menu_right from '../components/Layout/Menu_right';
import api from '../utils/api';

class CreatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtErrorDescription: '',
            txtErrorSolution: '',
            txtMarkDescription: '',
            txtErrorUuid: '',
            txtMarkUuid: '',
            txtValue: '',
            computerErrors: [],
            computerMarks: [],
        }
    }

    componentDidMount() {
        api('computererrors', null, 'GET', null)
            .then(res => {
                this.setState({
                    computerErrors: res.data.data
                })
                console.log(res.data.data)
            });
        api('computermarks', null, 'GET', null)
            .then(res => {
                this.setState({
                    computerMarks: res.data.data
                })
                console.log(res.data.data)
            })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        })
    }

    onSaveComputerError = (e) => {
        e.preventDefault();
        if (this.state.txtErrorDescription && this.state.txtErrorSolution) {
            api('computererrors', null, 'POST', {
                description: this.state.txtErrorDescription,
                solution: this.state.txtErrorSolution
            })
            .then(res => {
                console.log(res);
                if (res?.status == 200) {
                    alert("Success");
                    window.location.reload();
                }
                //else if (res?.status == 501) alert("Already taken");
                else alert("Fail");
            })
        }
        else {
            alert("Please fill out");
        }
    }

    onSaveComputerMark = (e) => {
        e.preventDefault();
        if (this.state.txtMarkDescription) {
            api('computermarks', null, 'POST', {
                description: this.state.txtMarkDescription
            }).then(res => {
                console.log(res);
                if (res?.status == 200) {
                    alert("Success");
                    window.location.reload();
                }
                //else if (res?.status == 501) alert("Already taken");
                else alert("Fail");
            })
        }
        else {
            alert("Please fill out");
        }
    }

    onSaveComputerErrorMark = (e) => {
        e.preventDefault();
        if (this.state.txtErrorUuid && this.state.txtMarkUuid) {
            api('computererrormarks', null, 'POST', {
                computerErrorUuid: this.state.txtErrorUuid,
                computerMarkUuid: this.state.txtMarkUuid,
                value: this.state.txtValue
            }).then(res => {
                // console.log(res);
                if (res?.status == 200) {
                    alert("Success");
                    window.location.reload();
                }
                //else if (res?.status == 501) alert("Already taken");
                else alert("Fail");
            })
        }
        else {
            alert("Please fill out");
        }
    }
    render() {
        var computerErrors = this.state.computerErrors;
        var computerMarks = this.state.computerMarks;
        return (
            <div className="sb-nav-fixed">
                <Menu_right />
                <div id="layoutSidenav">
                    <Menu_left />
                    <div id="layoutSidenav_content">
                        <div>
                            <div class="card-header">
                                Thêm xe
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSaveComputerError}>
                                    <div className="input-group">
                                        <span className="input-group-text">Lỗi</span>
                                        <input type="text" name="txtErrorDescription" onChange={this.onChange} className="form-control" />
                                        <span className="input-group-text">Giải pháp</span>
                                        <input type="text" name="txtErrorSolution" onChange={this.onChange} className="form-control" />
                                    </div>
                                    <div className="submit">
                                        <input className="btn btn-primary" type="submit" value="Thêm mới" />
                                    </div>
                                </form>
                                <form onSubmit={this.onSaveComputerMark}>
                                    <div className="input-group">
                                        <span className="input-group-text">Dấu hiệu</span>
                                        <input type="text" name="txtMarkDescription" onChange={this.onChange} className="form-control" />
                                    </div>
                                    <div className="submit">
                                        <input className="btn btn-primary" type="submit" value="Thêm mới" />
                                    </div>
                                </form>
                                <form onSubmit={this.onSaveComputerErrorMark}>
                                    <div className="input-group">
                                        <span className="input-group-text">Lỗi</span>
                                        <select className="form-select" name="txtErrorUuid" onChange={this.onChange} aria-label="Default select example">
                                            <option value="">Chọn lỗi</option>
                                            {computerErrors.map(computerError => {
                                                return (
                                                    <option value={computerError.uuid}>{computerError.description}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text">Dấu hiệu</span>
                                        <select className="form-select" name="txtMarkUuid" onChange={this.onChange} aria-label="Default select example">
                                            <option value="">Chọn dấu hiệu</option>
                                            {computerMarks.map(computerMark => {
                                                return (
                                                    <option value={computerMark.uuid}>{computerMark.description}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-text">Giá trị</span>
                                        <input type="number" step="0.1" name="txtValue" onChange={this.onChange} className="form-control" />
                                    </div>
                                    <div className="submit">
                                        <input className="btn btn-primary" type="submit" value="Thêm mới" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    };

}


export default CreatePage;
