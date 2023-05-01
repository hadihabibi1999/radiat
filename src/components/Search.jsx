import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <div data-aos="flip-down" className="form-outline search">
        <input
          type="search"
          className="form-control shadow bg-white rounded search-input"
          placeholder="&hellip;جست و جو بر اساس  نام  کالا"
          style={{ textAlign: "right" }}
          aria-label="Search"
          onChange={(e) => this.props.onChange(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default Search;
