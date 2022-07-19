import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <>
                {
                    this.props.isLoading ?
                        <div className="d-flex justify-content-center table-loader">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        ''
                }
            </>
        );

    }
}

export default Loader;