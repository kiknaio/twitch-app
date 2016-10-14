import React from 'react';
import request from 'superagent';

class Request extends React.Component {
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
    this.state.channels.forEach(this.getChannel.bind(this));
  }

  getChannel(arg) {
    request
      .get('https://api.twitch.tv/kraken/channels/' + arg)
      .set({'Client-ID': '8y4c38tqcnhbanpq2023ro8bcos4ykb'})
      .end( (err, res) => {
        let items = this.state.items;
        items.push(res.body);
        this.setState({ items });
      });
  }

  render() {
    return (
      <div>
        {this.state.items.map((item,index) => <h1 key={index}>{item.status}</h1>)}
      </div>
    );
  }
}



Request.propTypes = {
  channels: React.PropTypes.array.isRequired
};

export default Request;

