# ComponentMapWithMilesCircle
React Native wrapper component around react-native-maps

Procedure to follow
- Copy the components folder to your codebase.
- Link MapBox.js wherever you feel needed.
- Install react-native-maps library.
```
npm install react-native-maps --save
```
- Link the packages.
```
react-native link
```
- Android - Modify AndroidManifest.xml to include the API key  
```
  <application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
  </application>

```
- Run the app.


Additional details and setup for iOS can be found @ [React Native Maps](https://github.com/react-native-community/react-native-maps)

