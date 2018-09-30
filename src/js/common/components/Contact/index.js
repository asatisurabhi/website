import React, { PureComponent } from 'react';

import './index.css';

class Contact extends PureComponent {
  render() {
      return (
        <div className="exampleOutput">
          <h1>Let&apos;s Get <span className="emphasize">Started</span></h1>
          <p>If you see this screen, it means you are all setup \o/</p>
          <p>The following JSON are showing contents coming from Redux, Saga and Config.</p>
        </div>
      );
  }
}

export default Contact;
