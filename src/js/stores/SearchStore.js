import AppDispatcher from '../utils/AppDispatcher.js';
import {Actions,ViewFilters} from '../utils/AppConstants';
import {EventEmitter} from 'events';
import assign from 'object-assign';
var CHANGE_EVENT = 'change';

let SearchStore = assign({}, EventEmitter.prototype, {

    // Actual collection of model data
    sources: [],

    // Accessor method we'll use later
    getAll: function() {
        return this.sources;
    },

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	
	/**
   * @param {function} callback
   */
	addChangeListener: function(callback) {
		this.on( CHANGE_EVENT, callback);
	},

  /**
   * @param {function} callback
   */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register( function( payload ) {

    switch( payload.type ) {
        case Actions.GET_SOURCES:
         console.log("i am here dispatching event");
            // We get to mutate data!
            
            
            SearchStore.sources = payload.query;
			
			// Tell the world we changed!
            //NewsStore.trigger(CHANGE_EVENT);
			SearchStore.emitChange();
			
            break;

    }

    return true; // Needed for Flux promise resolution

}); 

export default SearchStore;


