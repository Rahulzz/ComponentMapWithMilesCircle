# ComponentMapWithMilesCircle
React Native wrapper component around react-native-maps

Procedure to follow
- Copy the components folder to your codebase.
- Link MapBox.js wherever you feel needed.
- Install react-native-maps library.
```
npm install react-native-maps --save
```
- Install react-native-geocoding library.
```
npm install react-native-geocoding --save
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
- Modify MapBox.js to include the API key
```
Geocoder.init('Your Google maps API Key Here');
```
- Run the app.


Additional details and setup for iOS can be found @ [React Native Maps](https://github.com/react-native-community/react-native-maps)



MapBox props

| Prop Name  | Purpose |
| ------------- | ------------- |
| zipCode  | Zipcode for the location to be centered. zipCode will be prioritized compared to latitude and longitude params Ex: zipCode={95101} |
| latitude  | Latitude of the location to be centered. Ex: latitude={37.78825} |
| longitude  | Longitude of the location to be centered. Ex: longitude={-122.4324} |
| miles  | Radius of the region to be highlighted in miles. Ex: miles={1} |
| circleBorderColor  | Border color of the highlight ring. Ex: circleBorderColor={"#f29315"} |
| circleBorderWidth  | Border width of the highlight ring. Ex: circleBorderWidth={3} |
| circleFillColor  | Inner color of the highlight ring. Ex: circleFillColor={'rgba(255,255,255,0.1)'} |
| mapStyle  | Custom style for the map in JSON. Refer [Google Styling Wizard](https://mapstyle.withgoogle.com/) for styling options |

Sample

<MapBox 
  latitude={37.78825} 
  longitude={-122.4324} 
  miles={1} 
  circleBorderColor={"#f29315"} 
  circleBorderWidth={3} 
  circleFillColor={'rgba(255,255,255,0.1)'} />

