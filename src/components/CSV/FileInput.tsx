import React, { ReactElement } from "react";

interface Props {
    onChange: any;
}

class FileInput extends React.PureComponent<Props> {
    fileInput = React.createRef<HTMLInputElement>();

    public render(): ReactElement {
        return (
            <input type="file" onChange={this.props.onChange} ref={this.fileInput}/>
        );
    }
}

export default FileInput;
