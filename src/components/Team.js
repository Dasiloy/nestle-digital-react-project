import React from "react";
import { TeamData } from "../Data/TeamData";

export const Team = () => {
  return (
    <section id='team'>
      <div className='section'>
        <header className='section-header'>
          <h2 className='heading'>Team</h2>
        </header>
        <div className='team-body'>
          <p className='team-para'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Libero non sequi fuga nobis
            voluptates fugit, necessitatibus Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            Error sint nostrum maxime consequuntur null.
          </p>
        </div>
        <div className='teams'>
          {TeamData.map((member) => {
            const { id, name, img, j0b, desc, social } =
              member;
            return (
              <div className='team-member' key={id}>
                <div className='team-img'>
                  <img src={img} alt={name} />
                </div>
                <div className='team-info'>
                  <h4>{name}</h4>
                  <h6>{j0b}</h6>
                  <p>{desc}</p>
                  <div className='team-links'>
                    {social.map((item) => {
                      const { icon, id, url } = item;
                      return (
                        <a href={url} key={id}>
                          {icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
