import IndexView from './view/index';
import ImagesView from './view/images';

import {UserCollection} from './models/user';
import {ImagesCollection} from './models/image';

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'images': 'images'
  },

  initialize: function() {
    this.users = new UserCollection();
    this.listenTo(this.users, 'add', function(){
      this.navigate('images', {trigger: true});
    }.bind(this));

    this.images = new ImagesCollection();
  },

  index: function(){
    var view = new IndexView({collection: this.users});
    $('#app').html(view.el);
  },

  images: function(){
    var view = new ImagesView({
      collection: this.images,
      user: this.users.at(0)
    });
    $('#app').html(view.el);
    this.images.fetch();
  }
});

var router = new Router();

export default router;
