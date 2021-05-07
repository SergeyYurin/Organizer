import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import './SocialFollow.css';

export default function SocialFollow() {
  return (
    <div className='social-container'>
      <h3 className='social-title'>
        Social media to follow the creator
      </h3>
      <a
        href='https://twitter.com/RealSergeyYurin'
        className='twitter social'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faTwitter} size='2x' />
      </a>
      <a
        href='https://www.instagram.com/sergey.developer/?hl=en'
        className='instagram social'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </a>
      <a
        href='https://www.facebook.com/sergey.yurin'
        className='facebook social'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faFacebook} size='2x' />
      </a>
    </div>
  );
}
