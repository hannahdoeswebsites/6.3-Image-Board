var images = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function() {
    return {
      image: '',
      content: '',
      username: '',
      created_at: new Date()
    };
  }
});

var ImagesCollection = Backbone.Collection.extend({
  model: url,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images'
});

export default {images, ImagesCollection};
