# SFMC Engagement Preference Center

This SFMC Engagement Preference Center is designed to be flexible and customizable while being easy to install and manage. Taking into account the three standard types of data collected on a preference center `Profile Data, Preference Selection, Subscription Selection`, this preference center can accommodate a wide use-case. 

<br>

# Installation
This project has been packaged with the BLDR-SFMC project and can be installed using the following CLI commands. Prior to deploying into your instance, you can update the root folder name (Basetime Preference Center) to whatever you require it to be.

`bldr install https://github.com/basetime/sfmc_vuejs_preference_center`

`bldr deploy`

<br>

**Installation Notes**

If you need to update folder names do so by doing a find/replace and it is recommended that you spot check the change to ensure no changes will result in broken references.

<br>

# Configuration
## App Configuration
```json
{
  "branding": {
    "brandName": "Basetime",
    "websiteURL": "https://basetime.io",
    "supportDarkMode": "true",
    "default": {
      "logo": "https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg",
      "colors": {
        "primary": "#00FFFF",
        "secondary": "blue",
        "accent": "yellow",
        "paper": "#fff"
      }
    },
    "dark": {
      "logo": "https://basetime.io/basetime-developer-network-logo.svg",
      "colors": {
        "primary": "#aadeeb",
        "secondary": "#0098bc",
        "accent": "#fc6833",
        "paper": "#0f1d20"
      }
    }
  },
  "map": {
    "content_block": {
      "preference_options": "Content Builder\\Basetime Preference Center\\configurations\\preference_options",
      "branding_bar": "Content Builder\\Basetime Preference Center\\frontend\\components\\branding_bar",
      "channel_drawer": "Content Builder\\Basetime Preference Center\\frontend\\components\\channel_drawer",
      "preference_form": "Content Builder\\Basetime Preference Center\\frontend\\components\\preference_form",
      "unauthorized_user": "Content Builder\\Basetime Preference Center\\frontend\\components\\unauthorized_user",
      "legal": "Content Builder\\Basetime Preference Center\\frontend\\components\\legal",
      "submit_button_animation": "'Content Builder\\Basetime Preference Center\\frontend\\styles\\submit_button_animation",
      "app_js": "Content Builder\\Basetime Preference Center\\frontend\\app_js",
      "ssjs": {
        "wsProxy": "Content Builder\\Basetime Preference Center\\lib\\ssjs\\wsProxy",
        "utils": "Content Builder\\Basetime Preference Center\\lib\\ssjs\\utils"
      }
    },
    "data_extension": {
      "preferenceCenterExternalKey": "A89D62BA-3F5F-400C-B0E9-979FD11948EF"
    }
  },
  "apiBaseURL": "https://cloud.emailmarketingunderstood.com/basetimepreferenceapi",
  "action_toggles": {
    "unsubscribe": false
  }
}
```

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