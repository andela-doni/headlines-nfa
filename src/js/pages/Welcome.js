import React from "react";
import PropTypes from 'prop-types';
import SourceStore from '../stores/SourceStore';
import { getSources } from '../actions/SourcesActions';
import Articles from './Articles'
import { Link } from "react-router";

import { getArticles } from '../actions/ArticlesActions';

export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: SourceStore.getAll(),
      search: ''
    };
    this.getSources = this.getSources.bind(this);
  }

  componentWillMount() {
    // SourceStore.on(this.getSources);
  }

  componentDidMount() {
    getSources();
    SourceStore.addChangeListener(this.getSources);
  }

  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getSources);
  }

  getSources() {
    this.setState({
      sources: SourceStore.getAll(),
    });
    //console.log(SourceStore.getAll());
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    const { sources } = this.state;
    console.log(this.state, "sources");

    const filteredSources = this.state.sources
      .filter(source => source.name
      .toLowerCase()
      .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <p>News from over 70 sources
      </p>
        <div>
        <input className="searchbox col col-lg-12" 
          type="text" class="form-control" 
          value={this.state.search} 
          onChange={this.handleChange.bind(this)} />
        </div>
        <div className="card-deck">
        <div className ="row">
          {filteredSources.map(source => {
            return <div className="panel panel-default col-md-4" key={source.id}>
              <div className="panel-heading">
                <p className="text-info panel-title">
                  <Link to={`/sources/${source.id}?sort=${source.sortBysAvailable}`}>
                  {source.name}
                  </Link>
              </p>
              </div>
              <div className="panel-body ">
               <p className="text-info"> {source.description} </p>
               <a type="button" class="btn-floating btn-small btn-fb">
                 <i class="fa fa-facebook"></i>
              </a>
              </div>
            </div>
          })}
        </div>
        </div>
      </div>

    )
  }
};


