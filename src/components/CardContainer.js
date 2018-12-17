import React, { Component } from "react";
import Card from './Card';

import { observer, inject } from 'mobx-react';

@inject('FindRes')
@observer
class CardContainer extends Component {
  componentDidMount() {
    this.props.FindRes.getSearchList();
  }
  
  render() {
    return (
      <div className="contents">
        <ul>
          {this.props.FindRes.searchList.map((v, i) => {
            return (<Card key={v.contentid} title={v.title} imgUrl={v.firstimage} addr={v.addr1} resId={v.contentid}/>)
          })}
        </ul>
      </div>
    );
  }
}

export default CardContainer;