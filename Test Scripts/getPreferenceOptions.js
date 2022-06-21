const preferenceOptions = require('../Content Builder/Basetime Preference Center/configurations/preference_options')
console.log(getPreferenceChannels(preferenceOptions))
console.log(getChannelIcon('email', preferenceOptions))

function getPreferenceChannels(preferenceOptions){
 return Object.keys(preferenceOptions)
}

function getChannelIcon(channel, preferenceOptions) {
  return preferenceOptions[channel]['icon']
}