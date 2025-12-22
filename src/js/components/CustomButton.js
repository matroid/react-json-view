import React from 'react';

import { toType } from './../helpers/util';


//theme
import Theme from './../themes/getStyle';

export default class extends React.PureComponent {
    handleClick = () => {
        const {customButtonProps, src} = this.props;
        const {onClick} = customButtonProps;
        const valueFromSrc = this.clipboardValue(src);

        onClick(valueFromSrc);
    }


    clipboardValue = value => {
        const type = toType(value);
        switch (type) {
            case 'function':
            case 'regexp':
                return value.toString();
            default:
                return value;
        }
    };

    render() {
        const { theme, hidden, rowHovered, customButtonProps } = this.props;
        let style = Theme(theme, 'copy-to-clipboard').style;
        let display = 'inline';

        const {icon} = customButtonProps;

        if (hidden) {
            display = 'none';
        }

        return (
            <span
                className="copy-to-clipboard-container"
                title="Copy to clipboard"
                style={{
                    verticalAlign: 'top',
                    display: rowHovered ? 'inline-block' : 'none'
                }}
            >
                <span
                    style={{
                        ...style,
                        display: display
                    }}
                    onClick={this.handleCopy}
                >
                    {icon}
                </span>
            </span>
        );
    }
}
