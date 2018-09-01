import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { bound } from "class-bind";
import { FormattedMessage } from 'react-intl';
import './index.less';

class Paragraph extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        contents: PropTypes.array
    }

    static defaultProps = {
        contents: []
    }

    @bound
    renderContentItem(content) {
        return <p>{<FormattedMessage id={content} />}</p>
    }

    render() {
        return (
            <div>
                <h3>{<FormattedMessage id={this.props.title}/>}</h3>
                <div className="paragraph-component-contents">
                    {this.props.contents.map(this.renderContentItem)}
                </div>
          </div>
        );
    }
}

export default Paragraph;