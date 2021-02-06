import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="editor-container">
                <div className="d-flex flex-column">
                    <p className="header">Editor</p>
                    <textarea id="editor"></textarea>
                </div>
            </div>
        );
    };
}

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-column">
                    <p className="header">Preview</p>
                    <p id="preview" className="preview-container">PreviewComponent</p>
                </div>
            </div>
        );
    };
}

function App() {
    return (
        <div className="body h-100">
            <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Simple React Markdown Previewer</a>
        </nav>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-sm-12 col-md-6 pl-md-5">
                    <EditorComponent />
                </div>
                <div className="col-sm-12 col-md-6 pr-md-5">
                    <PreviewComponent />
                </div>
            </div>
        </div >
        </div>
    );
}

export default App;
