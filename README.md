## Monster UI Recordings

The Recordings app allows you to effectively work with call records

Requires [Monster UI v.4.3](https://github.com/2600hz/monster-ui)

#### Build
1. Run `npm install`
2. Run `npm run build`
3. Look at 'dist' directory

#### Installation to source files
1. Upload files from directory `src` to directory with source files of your Monster UI (*near the folders "apps", "css" and "js"*)
2. Add next strings to file `/js/main.js` after string `paths: {`
``` javascript
'datatables.net': 'js/vendor/datatables/jquery.dataTables.min',
'datatables.net-bs': 'js/vendor/datatables/dataTables.bootstrap.min',
'datatables.net-buttons': 'js/vendor/datatables/dataTables.buttons.min',
'datatables.net-buttons-html5': 'js/vendor/datatables/buttons.html5.min',
'datatables.net-buttons-bootstrap':'js/vendor/datatables/buttons.bootstrap.min',
```
3. Build your Monster UI with original builder (command `gulp`)
4. Register `recordingsce` app
```bash
# sup crossbar_maintenance init_app PATH_TO_RECORDINGS_DIRECTORY API_ROOT
# The Kazoo user should be able to read files from recordingsce app directory
sup crossbar_maintenance init_app /var/www/html/apps/recordingsce https://site.com:8443/v2/
```
5. Activate the Recordings app in Monster UI App Store ( `/#/apps/appstore` )

#### Installation to compiled files
1. Upload all folders and files from directory `src` to root directory of your Monster UI (*near the folders "apps", "css" and "js"*)
2. Create next symbol links in root directory of Monster UI
```bash
# ln [options] <target file> [link name]
ln -s js/vendor/datatables/jquery.dataTables.min.js datatables.net.js
ln -s js/vendor/datatables/dataTables.bootstrap.min.js datatables.net-bs.js
ln -s js/vendor/datatables/dataTables.buttons.min.js datatables.net-buttons.js
ln -s js/vendor/datatables/buttons.html5.min.js datatables.net-buttons-html5.js
ln -s js/vendor/datatables/buttons.bootstrap.min.js datatables.net-buttons-bootstrap.js
```
3. Register `recordings` app
```bash
# sup crossbar_maintenance init_app PATH_TO_RECORDINGS_DIRECTORY API_ROOT
# The Kazoo user should be able to read files from recordingsce app directory
sup crossbar_maintenance init_app /var/www/html/apps/recordingsce https://site.com:8443/v2/
```
4. Activate the Recordings app in Monster UI App Store ( `/#/apps/appstore` )
