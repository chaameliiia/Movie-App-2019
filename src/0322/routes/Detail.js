import React, { Component } from 'react';

class Detail extends Component {
  // 렌더링 순서: 2)
  componentDidMount() {
    const { location, history } = this.props;
    location.state === undefined && history.push("/");
    // home에서 영화 Link 눌러서 들어오지 않은 경우 home으로 돌려보내기
  }
  
  // 렌더링 순서: 1)
  render() {
    const { location } = this.props;
    // if (location.state) {
    //   return <div>{location.state.title}</div>;
    // } else {
    //   return null;
    // }
    return (
      location.state
      ? <div>{location.state.title}</div>
      : null
    );
      // home에서 영화 Link 눌러서 들어오지 않은 경우 render()가 componentDidMount()보다 먼저 호출되고 render() 호출 시점에 존재하지 않는 this.props.location 값을 사용하기 때문에 에러 발생 → location.state 없을 경우 null 반환하도록 하여 에러 처리
  }
}

export default Detail;