# Remove Date and Time from Event Title

Script for removing the date and time from the event title on the event signup / registration page on your [MinistryPlatform](https://www.ministryplatform.com) church portal.

Please review the Think Ministry Knowledge Base for [altering](http://www.thinkministry.com/kb/portal/configuration/skins/alter/) and [deploying](http://www.thinkministry.com/kb/portal/configuration/skins/deploy/) skins on your portal.

Generic steps:

- https://{churchdomain}/portal/portaladmin.aspx
- Select default skin in Portal Skins list and download
- Extract zip file
- Edit {skinname}.htm
- at the bottom of the htm but still inside the body tag add the script tag

```html
    <script type="text/javascript" src="[MPP_SkinPath]/js/event_signup_remove_date_time.js"></script>
```

- Save script to the js folder \js\event_signup_remove_date_time.js
- rename {skinname}.htm (perhaps by appending a new date)
- rename folder to match {skinname}
- compress contents of folder to zip
- upload test skin using portaladmin.aspx
- change default skin
