import React from "react";
import "./Filter.css";

function Filter({ data, setData}) {
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    newValue = [...new Set(newValue)];
    // console.log(newValue);
    return newValue;
  };

  const typeData = getUniqueData(data, "type");
  const genderData = getUniqueData(data, "gender");
  const priceData = getUniqueData(data, "price");

  const handleFilterType = (type) => {
    console.log("val", type);
    var res = [];
    data.filter((obj) => {
      if (obj.type === type) {
        res.push(obj);
      }
      return res;
    });
    console.log("res", res);
    setData(res);
  };

  const handleFilterGender = (type) => {
    console.log("in loop")
    console.log("val", type);
    var res = [];
    data.filter((obj) => {
      if (obj.gender === type) {
        res.push(obj);
      }
      return res;
    });
    console.log("res", res);
    setData(res);
  };
  const handleFilterPrice = (type) => {
    console.log("val", type);
    var res = [];
    data.filter((obj) => {
      if (obj.price === type) {
        res.push(obj);
      }
      return res;
    });
    console.log("res", res);
    setData(res);
  };

  return (
    <div className="filter">
      <h3>Filter</h3>
      <strong> Type </strong>
      <div>
        {typeData.map((curElem, index) => {
          return (
            <div>
              <button
               style={{marginBottom: 4}}
                key={index}
                type="button"
                value={curElem}
                onClick={() => handleFilterType(curElem)}
              >
                
                {curElem}

              </button>
              <br/>
            </div>
          );
        })}
      </div>
      <hr />
      <strong> Gender </strong>
      <div>
        {genderData.map((curElem, index) => {
          return (
            <div>
              <button
              style={{marginBottom: 4}}
                key={index}
                type="button"
                name="gender"
                value={curElem}
                onClick={() => handleFilterGender(curElem)}
              >
                {curElem}
              </button>
            </div>
          );
        })}
      </div>
      <hr />
      <strong> Price </strong>
      <div>
        {priceData
          .sort(function (a, b) {
            return a - b;
          })
          .map((curElem, index) => {
            return (
              <div>
                <button
                 style={{marginBottom: 4}}
                  key={index}
                  type="button"
                  name="price"
                  value={curElem}
                  onClick={() => handleFilterPrice(curElem)}
                >
                  {curElem}
                </button>
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

export default Filter;
