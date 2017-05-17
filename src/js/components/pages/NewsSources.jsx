import React from 'react';
import { Link } from 'react-router';
import SourceStore from '../../stores/SourceStore';
import { getSources } from '../../actions/SourcesActions';


export default class NewsSources extends React.Component {
  /**
   * constructor for NewsSources class
   * @constructor
   */
  constructor() {
    super();
    this.state = {
      sources: SourceStore.getAll(),
      search: ''
    };
    this.getSources = this.getSources.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * Adds event listener
   * Mounts the api after the sources have been mounted
   * @returns {null} returns nothing
   */
  componentDidMount() {
    getSources();
    SourceStore.addChangeListener(this.getSources);
  }
  /**
   * unmounts the sources Component
   * Removes event listener
   * @method componentWillUnMount
   */

  componentWillUnMount() {
    SourceStore.removeChangeListener(this.getSources);
  }
  /**
   * fetches sources from store
   * @method getSources
   */

  getSources() {
    this.setState({
      sources: SourceStore.getAll(),
    });
  }
  /**
   * @method handleChange
   * @returns {null} returns nothing
   * @param {event} event param
   * handles changes when an event occurs
   */
  handleChange(event) {
    this.setState({ search: event.target.value });
  }
  /**
   * @returns {null} returns nothing
   * renders the Component
   */
  render() {
    const filteredSources = this.state.sources
      .filter(source => source.name
      .toLowerCase()
      .indexOf(this.state.search.toLowerCase()) !== -1);

    return (
      <div>
        <br/> <br/>
      <h3 className="main-header">News from over 70 sources
      </h3>
        <div>
        <input className="searchbox col col-lg-12 form-control"
          type="text" value={this.state.search}
          onChange="this.handleChange" />
        </div>
        <br/><br/>
        <div className="card-deck">
        <div className ="row">
          {filteredSources.map(source =>
          <div className="col-md-4" key={source.id}>
              <div className="panel panel-default source">
              <div className="panel-heading">
                <p className="text-info panel-title main-header">
                  <Link to=
                  {`/sources/${source.id}?sort=${source.sortBysAvailable}`}>
                  {source.name}
                  </Link>
              </p>
              </div>
              <div className="panel-body ">
               <p className="text-info"> {source.description} </p>
               <a type="button" className="btn-floating btn-small btn-fb">
                 <i className="fa fa-facebook" />
              </a>
              </div>
              </div>
            </div>)}
        </div>
        </div>
      </div>

    );
  }
}

