import React, {Component} from 'react';


class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-6">
                <form>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="number" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            Còn hàng
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
