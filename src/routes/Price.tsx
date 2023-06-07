import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ItemsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;




function Price({ coinId }:any) {
  const { isLoading, data } = useQuery(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
    return ( 
      <>
      {isLoading ? ( "Waiting...") : (
      <>
      console.log(data)
       <Items>
          <ItemsItem>All time High Price :  {data.quotes?.USD?.ath_price} $ </ItemsItem>
        </Items>
        <Items>
    
          <ItemsItem>Price : $ {data?.quotes?.USD?.price}</ItemsItem>
        </Items>
        <Items>
            
          <ItemsItem>Max Change rate in last 24h:$ {data?.quotes?.USD?.market_cap_change_24h}</ItemsItem>
        </Items>
        <Items>
            
          <ItemsItem>Change rate (last 30 Minutes):$ {data?.quotes?.USD?.percent_change_30m}</ItemsItem>
        </Items>
        <Items>
          
          <ItemsItem>Change rate (last 1 hours):$ {data?.quotes?.USD?.percent_change_1h}</ItemsItem>
        </Items>
        <Items>
          
          <ItemsItem>Change rate (last 12 hours):$ {data?.quotes?.USD?.percent_change_12h}</ItemsItem>
        </Items>
        <Items>
          
          <ItemsItem>Change rate (last 24 hours):$ {data?.quotes?.USD?.percent_change_24h}</ItemsItem>
        </Items>
        </>
      )
}
      </>
      )
}

export default Price
