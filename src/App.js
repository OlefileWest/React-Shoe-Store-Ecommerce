import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/NavBar/NavBar";
import { Col, Row } from "react-bootstrap";
import { data } from "./Components/Products/Data";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);

    const searchFilter = data.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchFilter);
  };
  const handleClickCategory = (e) => {
    const query = e.target.value;
    setSearchQuery("");
    if (query == "All") {
      setFilteredList(data);
    } else {
      const radio = data.filter((item) => {
        return item.category == query;
      });
      setFilteredList(radio);
    }
  };
  const handleClickColor = (e) => {
    const query = e.target.value;
    setSearchQuery("");

    if (query == "All") {
      setFilteredList(data);
    } else {
      const radio = data.filter((item) => {
        return item.color == query;
      });
      setFilteredList(radio);
    }
  };

  const handlePrice = (e) => {};

  return (
    <div className="app">
      <NavBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <div className="contents">
        <Row>
          <Col lg={3} sm={1}>
            <SideBar
              handleClickCategory={handleClickCategory}
              handleClickColor={handleClickColor}
              handlePrice={handlePrice}
            />
          </Col>
          <Col lg={9} sm={1}>
            {filteredList.map((item) => {
              return (
                <div id="card">
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "8rem",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="container">
                    <h6>
                      <b>{item.title}</b>
                    </h6>
                    <p>
                      {item.color}
                      <br />R {item.price}
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
