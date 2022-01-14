import { render } from '@testing-library/react';
import { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright &copy; Nhóm 25</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
