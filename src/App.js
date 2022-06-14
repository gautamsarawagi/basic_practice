import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";
import Card from "react-bootstrap/Card";

function App() {
  const { apiCallData } = useSelector((state) => state.apiCallReducer);
  console.log("apiCallData", apiCallData);

  const [apiData, setApiData] = useState([]);
  const [apiDataTwo, setApiDataTwo] = useState([]);
  const [cardData, setCardData] = useState("");

  useEffect(() => {
    const UserAPI = "https://reqres.in/api/users?page";
    const UserAPITwo = "https://reqres.in/api/users?page=2";

    const getUserData = axios.get(UserAPI);
    const getUserDataTwo = axios.get(UserAPITwo);

    axios.all([getUserData, getUserDataTwo]).then(
      axios.spread((res1, res2) => {
        console.log("data", res1.data, res2.data);
        setApiData(res1.data.data);
        setApiDataTwo(res2.data.data);
      })
    );
  }, []);

  const completeData = apiData.concat(apiDataTwo);

  const cardOpener = (item) => {
    axios
      .get(`https://reqres.in/api/users/${item.id}`)
      .then((response) => {
        setCardData(response?.data?.data);
        console.log("latestData", response.data.data);
      })
      .catch((error) => {
        console.log("erooo  group", error);
        return error;
      });
  };

  return (
    <>
      {/* card data */}
      <div className="cardStyle p-2">
        {cardData ? (
          <Card style={{ width: "50rem",height : "25rem" }}>
            <Card.Body
              class="row p-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={cardData?.avatar} alt="please" class="img-responsive col-6" loading="lazy"/>
              <div class="col-6">
                <h1 class="text-center">
                  {cardData?.first_name} {cardData?.last_name}
                </h1>
                <h3 class="text-center">{cardData?.email}</h3>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <Card>
            <h1 className="text-center">
              Please Click One of the below Buttons
            </h1>
          </Card>
        )}
      </div>

      <div class="row" style={{ marginTop: "3rem", width: '90rem'}}>
        {completeData?.map((item, index) => {
          return (
            <div
              class="col-3 d-flex justify-content-center"
              style={{ margin: "1rem 0" }}
            >
              <button
                style={{ borderRadius: "50%" }}
                onClick={() => cardOpener(item)}
              >
                {item.id}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
