import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="content-section">
      <div className="content">
        <h1>Portfolio</h1>
        <Jumbotron
          title="JMeter and GCP Integration"
          content={
            <>
              <p>
                Together with a DevOps Engineer, we integrated Apache JMeter with Google Cloud Build Triggers.
                The goal was to run load testing on critical API endpoints automatically.
              </p>
              <p>
                I started by developing a set of npm scripts. They were designed to seed the database with user data.
                After that, I adjusted them to be compatible with our GCP setup, allowing us to run load testing in the cloud. 
                This enabled us to identify bottlenecks for improvements.
              </p>
              <p>
                To achieve this, I had to learn JMeter quickly. Thanks to close cooperation with DevOps,
                adjusting all pieces on the cloud went smoothly.
              </p>
              <p>
                What I liked most about this project was the confidence it brought. 
                I appreciated knowing the overall performance of the API, 
                which opened the way for further optimizations.
              </p>
            </>
          }
        />
        <Jumbotron
          title="Unifying IoT Product Services"
          content={
            <>
              <p>
                I worked alongside another developer and the architect in a small backend team. 
                Our goal was to unify two similar legacy API services into one.
              </p>
              <p>
                My colleague focused on the overall architecture design and user service, 
                while I concentrated on the product-related service. 
                I implemented several endpoints to handle user mobile app requests 
                and added automation to update the Swagger documentation hosted for the entire team.
              </p>
              <p>
                One of the challenges we faced was the unification process. 
                The client had two very similar IoT products: one was older with some historical baggage, 
                and the other was a new, simplified product, but different from the previous one.
              </p>
              <p>
                Initially, the process was a bit unpredictable. 
                The tricky part lay in the IoT devices' communication. 
                After integrating the backend with the frontend, 
                we ran end-to-end tests with real products, revealing additional use cases that needed handling.
              </p>
              <p>
                Thanks to close cooperation with frontend developers and automated tests, 
                I was able to fix the bugs efficiently. 
                I found Jupyter Notebook with pandas extremely useful for monitoring in this project, 
                as it helped quickly analyze the service data state across six backend environments.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default Portfolio;
