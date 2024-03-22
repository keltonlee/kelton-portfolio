import React from 'react';

const Social = (props) => {
  const socialNetworks = (
    <ul>
      {props.social.map((socialNetwork) =>
        <li key={socialNetwork.name}>
          {socialNetwork.name === 'email' ? (
            <a href={`mailto: ${socialNetwork.url}`}>
          <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
        </a>
      ) : (
      <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
        <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
      </a>
          )}
    </li>
  )
}
    </ul >
  );
return (
  <div className="social">
    {socialNetworks}
  </div>
)
};

export default Social;
