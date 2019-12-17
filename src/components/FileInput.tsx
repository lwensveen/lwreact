import React, { PureComponent } from "react";

interface Props {
    onChange: any;
}

class FileInput extends PureComponent<Props> {
    public fileInput!: React.RefObject<any>;

    public render() {
        return (
            <input type="file" onChange={this.props.onChange} ref={this.fileInput}/>
        );
    }
}

export default FileInput;
