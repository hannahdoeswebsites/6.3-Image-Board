export default Backbone.View.extend({
  template: JST.images,

  events: {
    'submit .create-image-form': 'createImage'
  },

  initialize: function(options){
    this.username = options.user ? options.user.get('username') : '';
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  createMessage: function(e) {
    e.preventDefault();
    var contentImage = this.$('.create-image-content').val();
    this.collection.create({
      content: content,
      username: this.username,
      image: image,

    });
  }
});
