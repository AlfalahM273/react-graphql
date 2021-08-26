import React from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data: test } = useQuery(EXCHANGE_RATES);
  const { loading: loading1, error: error1, data: test1 } = useQuery(EXCHANGE_RATES);

  if (loading1) return <p>Loading...</p>;
  if (error1) return <p>Error :(</p>;

  return test1.rates.map(({ currency, rate }: any) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  );
}

export default App;
