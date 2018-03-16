var widgetDefaults = {
  width: '20%',
  height: '100%'
};

var datasourceDefaults = {
  timeout: 2500
};

module.exports = {
  datasourceDefaults: datasourceDefaults,
  widgetDefaults: widgetDefaults,
  enabledPlugins: ['teamcity', 'google-analytics'], //, 'rabbitmq', 'simple', 'iframe', 'azure-servicebus', 'image', 'chart', 'generic'],
  tabCycleInterval: 7000
};
