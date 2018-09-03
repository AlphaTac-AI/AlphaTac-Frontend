import React, { PureComponent } from 'react';
import { Card as AntCard } from 'antd';

const { Meta } = AntCard;

export default class Card extends PureComponent {
  handleClick = () => {
    const { history, link } = this.props;
    if (!link) return;
    history.push(link);
  }

  render() {
    const { title, desc, cover } = this.props;
    return (
      <AntCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={cover} />}
        onClick={this.handleClick}
      >
        <Meta title={title} description={desc} />
      </AntCard>
    );
  }
}
