import React, {useEffect, useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import reviewsData from "../data/reviews";

function HomeMainSection()  {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      // Function to fetch random reviews
      const fetchRandomReviews = async () => {
        try {
          const randomReviews = await getRandomReviews(2); // Fetch 2 random reviews
          setReviews(randomReviews);
        } catch (error) {
          console.error('Error fetching random reviews:', error);
        }
      };
      
      fetchRandomReviews(); // Call the function when the component mounts or refreshes
    }, []);

    const getRandomReviews = async (count) => {
        // Simulating an asynchronous operation to fetch reviews
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Shuffle the reviews array to get random reviews
            const shuffledReviews = reviewsData.sort(() => Math.random() - 0.5);
            // Slice the array to get the specified number of random reviews
            const randomReviews = shuffledReviews.slice(0, count);
            resolve(randomReviews);
          }, 500); // Simulating a delay for the asynchronous operation
        });
    };


    let navigate = useNavigate();
    const pageChange = () =>{ 
        let path = `/Productpage`; 
        navigate(path);
      }

return(
   
    <div>
        <section>
            <h1>About us</h1>
            <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction</p>
            <button className ="shop-button"type = "button" onClick= {pageChange} value="Redirect">Shop Now!</button>
        </section>

        <section>
            <h2>Customer Reviews</h2>
            {reviews.map((review, index) => (
                <div>
                <p>{review.customerName}</p>
                <p>{review.reviewContent}</p>
                <p>Rating: {Array.from({ length: review.stars }, (_, i) => <span key={i}>★</span>)}</p>
                </div>
            ))}
        </section>
    </div>
);
}

export default HomeMainSection;