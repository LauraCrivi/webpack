const GoogleMapsLoader = require('google-maps');

export default {
  name: 'MapComponent',
  data() {
    return {
      mapConfig: require('../MapComponent/mapConfig.json')
    };
  },
  async mounted() {
    try {
      GoogleMapsLoader.KEY = this.mapConfig.apiKey;
      GoogleMapsLoader.load((google) => {
        new google.maps.Map(this.$el, this.mapConfig.mapOptions);
      });
    } catch (error) {
      console.error(error);
    }
  }
};
