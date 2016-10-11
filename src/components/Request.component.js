import React, { Component } from 'react';
import request from 'superagent';

class Request extends Component {

  render () {
    return (
      <div>
        {this.props.channels.map(function(channel) {
          request
            .get('https://api.twitch.tv/kraken/channels/' + channel)
            .set({'Client-ID': '8y4c38tqcnhbanpq2023ro8bcos4ykb'})
            .end(function (err, res) {
              return (
                <div>
                  {res}
                </div>
              );
            })
        })}
      </div>
    )
  }
};



Request.propTypes = {
  channels: React.PropTypes.array.isRequired
};

export default Request;