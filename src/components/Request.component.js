import React, { Component } from 'react';
import request from 'superagent';

class Request extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      channels: [
        "ESL_SC2", "OgamingSC2",
        "cretetion", "freecodecamp",
        "storbeck", "habathcx",
        "RobotCaleb", "noobs2ninjas"
      ]
    }
  }

  componentDidMount() {
    this.state.channels.forEach(function(channel) {
      request
        .get('https://api.twitch.tv/kraken/channels/' + channel)
        .set({'Client-ID': '8y4c38tqcnhbanpq2023ro8bcos4ykb'})
        .end(function (err, res) {
          this.state.items.setState({
            items: this.state.items.push(res)
          }).bind(Request);
        });
      // this.getChannel(channel);
    });
  }

  getChannel(arg) {
    request
      .get('https://api.twitch.tv/kraken/channels/' + arg)
      .set({'Client-ID': '8y4c38tqcnhbanpq2023ro8bcos4ykb'})
      .end(function (err, res) {
        this.setState({
          items: this.state.items.push(res)
        })
      });
  }



  render () {
    console.log(this.state.items);
    return (
      <div>
        {this.state.items}
      </div>
    );
  }
};



Request.propTypes = {
  channels: React.PropTypes.array.isRequired
};

export default Request;

