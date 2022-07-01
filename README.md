# This project is still in progress 
This project is still in progress and not deployable with BLDR yet. Please watch this repo if you are interested to know when it is officially released.

<br>

# SFMC Engagement Preference Center

This SFMC Engagement Preference Center is designed to be flexible and customizable while being easy to install and manage. Taking into account the three standard types of data collected on a preference center `Profile Data, Preference Selection, Subscription Selection`, this preference center can accommodate a wide use-case. 

<br>

# Installation
This project has been packaged with the BLDR-SFMC project and can be installed using the following workflows.

`bldr install https://github.com/basetime/sfmc_vuejs_preference_center`

`bldr deploy`

<br>

**Installation Notes**

If you need to update folder names do so by doing a find/replace and it is recommended that you spot check the change to ensure no changes will result in broken references.

<br>

# Configuration


# Link in Email

```html
%%[
  set @brand = 'basetime'
  set @locale = Lookup('Subscribers Data Extension', 'locale', 'subscriberId', @subscriberId)
]%%


<a alias="preference_center_link" conversion="false" href="%%=RedirectTo(CloudPagesURL(####, 'brand', @brand, 'locale', @locale))=%%" title="Preference Center">Click to update preferences.</a>
```
<br>

# Technology Used
## SFMC Engagement Assets
- Cloud Page
- Code Resource Page
- Data Extension
- Content Builder Code Snippet Content Blocks

## Dependencies
- VueJS (v2)
- VuetifyJS CSS Framework
- VueFormulate Forms