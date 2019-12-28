import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        //newProps.data 바뀐 값(현재 값)
        //this.props.data 바꾸기 전 값
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >
                    {data[i].title}
                </a>
            </li>)
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
