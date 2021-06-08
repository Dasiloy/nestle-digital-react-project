import React, {
  useState,
  useCallback,
  useEffect,
} from "react";
import data from "../Data/ServiceData";

export const Service = () => {
  const [whyData, setWhyData] = useState([]);

  const fetchData = useCallback((data) => {
    setWhyData(data);
  }, []);

  useEffect(() => {
    fetchData(data);
  }, [fetchData]);
  return (
    <section id='service'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>Services</h2>
        </header>
        <div className='service-body'>
          <p className='service-para'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero non sequi fuga nobis
            voluptates fugit, necessitatibus Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            Error sint nostrum maxime consequuntur nulla
            quidem consequatur facilis delectus explicabo
            quos.
          </p>
        </div>
        <div className='service-items'>
          {whyData.map((item) => {
            const { id, heading, description, icon } = item;
            return (
              <article key={id} className='service-item'>
                <h3>{icon}</h3>
                <h4>{heading}</h4>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
