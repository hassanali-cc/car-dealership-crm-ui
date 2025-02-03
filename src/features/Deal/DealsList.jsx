import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { fetchDeals } from '../../services/apiDeals.js';

const DealsList = () => {
  const deals = useLoaderData()

  return (
    <div>
      <h1 className='mb-4'>Active Deals</h1>
      <ul>
        {deals.map((deal, index) => (
          <li key={deal.id}>
            <Link to={`/deals/${deal.id}`}>{index + 1}. {deal.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function loader() {
  return await fetchDeals();
}

export default DealsList;
