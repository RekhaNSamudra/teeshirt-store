import React, { useState } from "react";
import Filter from "../Filter/Filter";
import "./Products.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../ItemCard/ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function Products({ data, setData, handleAddItem }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isFilterShown, setFilterShown] = useState(true);

  if (!data.length) return <div>Loading...</div>; //Error handling

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return (
          Object.values(item.name)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(item.type)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          Object.values(item.color)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div>
      <div className="search-filter">
        <input
          className="search-bar"
          onChange={(e) => searchItems(e.target.value)}
          type="search"
          placeholder="Search for Products..."
        />
        <div className="filter-icon">
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => setFilterShown(!isFilterShown)}
          />
        </div>
      </div>
      <Container>
        <Row>
          <Col xl={2} lg={2} xxl={2}>
            {isFilterShown && <Filter data={data} setData={setData} />}
          </Col>
          <Col>
            <Row>
              {searchInput.length > 1
                ? filteredResults.map((item) => {
                    return (
                      <Col
                        key={item.id}
                        md={6}
                        sm={{ span: 12, offset: 6 }}
                        lg={4}
                        xs={{ span: 12, offset: 6 }}
                        xl={3}
                        xxl={3}
                      >
                        <ItemCard item={item} handleAddItem={handleAddItem} />
                      </Col>
                    );
                  })
                : data.map((item) => {
                    return (
                      <Col
                        key={item.id}
                        md={6}
                        sm={12}
                        lg={4}
                        xs={12}
                        xl={3}
                        xxl={3}
                      >
                        <ItemCard item={item} handleAddItem={handleAddItem} />
                      </Col>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
