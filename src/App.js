import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import marked from 'marked';
import DOMPurify from 'dompurify'
class EditorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="editor-container">
                <div className="d-flex flex-column">
                    <p className="header">Editor</p>
                    <textarea
                        id="editor"
                        onChange={this.props.onInputChange}
                        value={this.props.input}
                    />
                </div>
            </div>
        );
    };
}

class PreviewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getMarkedDownText = this.getMarkedDownText.bind(this);
    }

    getMarkedDownText() {
        let purifiedText = DOMPurify.sanitize(this.props.previewText)
        let rawMarkup = marked(purifiedText);
        return { __html: rawMarkup };
    }

    render() {
        { console.log(this.sanitized_text) }
        return (
            <div>
                <div className="d-flex flex-column">
                    <p className="header">Preview</p>
                    <p
                        id="preview"
                        className="preview-container overflow-auto"
                        dangerouslySetInnerHTML={this.getMarkedDownText()}
                    />
                </div>
            </div>
        );
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        // this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this.setState({
            input: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
            
function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
            `,
        });
    }

    onInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        return (
            <div className="body h-100">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#">Simple React Markdown Previewer</a>
                </nav>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col-sm-12 col-md-6 pl-md-5">
                            <EditorComponent
                                onInputChange={this.onInputChange}
                                input={this.state.input}
                            // handleKeyDown={this.handleKeyDown}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 pr-md-5">
                            <PreviewComponent
                                previewText={this.state.input}
                            />
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default App;
