import React, { useEffect, useMutation } from 'react';
import { idbPromise } from "../utils/helpers";
import { ADD_ORDER } from '../utils/mutations';
import Jumbotron from "../components/Jumbotron";

function Success() {

    const [addOrder] = useMutation(ADD_ORDER);

	useEffect(() => {
		async function saveOrder() {
			const cart = await idbPromise('cart', 'get');
			const products = cart.map(product => product._id);
			
			if (products.length) {
				const { data } = await addOrder({ variables: { products } });
				const productData = data.addOrder.products;

				productData.forEach(product => {
					idbPromise('cart', 'delete', product);
				});
			}

			setTimeout(() => {
				window.location.assign('/');
			}, 3000);
		};

		saveOrder();
	}, [addOrder]);
    
    return (
      <div>
        <Jumbotron>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        </Jumbotron>
      </div>
    );
  };