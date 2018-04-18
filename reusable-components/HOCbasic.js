import React from "react";
import { getData } from "../helpers/index";

// ime i rute iz parametar propsa, refactor soon

const HOC = (Component, title, url) => {
  const URL = url;
  const rege = /&currentPage=\d+/;
  let result;
  if (!!url) {
    result = url.includes("&currentPage")
      ? url
          .split(rege)
          .filter(x => rege.test(x))
          .join("")
      : false;
  } else {
    result = false;
  }

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        page: 1,
        refreshing: false
      };
      this.handleRefresh = this.handleRefresh.bind(this);
      this.handleLoadMore = this.handleLoadMore.bind(this);
    }
    componentDidMount() {
      const { url: urlParam } = this.props.navigation.state.params;
      console.log(url, URL, urlParam);
      if (!URL) {
        URLfinal = urlParam;
      } else {
        URLfinal = URL;
      }
      getData(URLfinal)
        .then(data => this.setState({ data }))
        .catch(err => console.log(err));
    }
    async handleRefresh() {
      await this.setState({ refreshing: true });
      getData(URLfinal).then(data =>
        this.setState({
          data,
          refreshing: false,
          page: 1
        })
      );
    }
    async handleLoadMore() {
      let { page } = this.state;
      page = page + 1;
      let Data = await getData(`${result}&CurrentPage=${page}`);
      if (Data.length > 0) {
        let data = [...this.state.data, ...Data];
        await this.setState({ data, page });
      }
    }
    render() {
      let name = !!title ? title : this.props.navigation.state.params.name;
      return result ? (
        <Component
          {...this.props}
          data={this.state.data}
          title={name}
          handleRefresh={this.handleRefresh}
          handleLoadMore={this.handleLoadMore}
        />
      ) : (
        <Component
          {...this.props}
          data={this.state.data}
          title={name}
          handleRefresh={this.handleRefresh}
        />
      );
    }
  };
};

export default HOC;
