# Your Project Title Here
Name: Biju Ale

CollegeID: 160026

Batch: Jan19A

Brief description of the domain of your project!

## List of Main Features
- Interactive map with markers and info window of locations.
- User account registration, login, & profile update.
- Creation, deletion, retrieval, and updation of location markers.
- Creation of closed groups and member management.

## API Documentation

POST: /markers
```
{
  "lat": "24.706426",
  "lng": "85.335039",
  "markerIconImage": "",
  "markerInfo": "Sotwarica College"
}
````
Output:
```
{
    "markerIconImage": "",
    "_id": "5d255798f9a24c1720e1ac06",
    "lat": 24.706426,
    "lng": 85.335039,
    "markerInfo": "Sotwarica College",
    "__v": 0
}
```
GET: /markers
Output:
```
[
    {
        "markerIconImage": "",
        "_id": "5d05bd07082e263e6e3d78cf",
        "lat": 27.706426,
        "lng": 85.335039,
        "markerInfo": "Maitidevi Templee",
        "__v": 0
    },
    {
        "markerIconImage": "",
        "_id": "5d23ff70f568770c5f800b6f",
        "lat": 22.22,
        "lng": 23.3,
        "markerInfo": "Something Else",
        "__v": 0
    },
    {
        "markerIconImage": "",
        "_id": "5d255798f9a24c1720e1ac06",
        "lat": 24.706426,
        "lng": 85.335039,
        "markerInfo": "Sotwarica College",
        "__v": 0
    }
]
```
PUT: /markers
Output: Operation not supported

DELETE: /markers
Output: []

GET: markers/:id
markers/5d255798f9a24c1720e1ac06
Output:
```
{
    "markerIconImage": "",
    "_id": "5d255798f9a24c1720e1ac06",
    "lat": 24.706426,
    "lng": 85.335039,
    "markerInfo": "Sotwarica College",
    "__v": 0
}
```

POST: markers/:id
markers/5d255798f9a24c1720e1ac06
Output: Operation not supported

PUT: markers/:id
markers/5d255798f9a24c1720e1ac06
```
{
  "lat": "24.706426",
  "lng": "85.335039",
  "markerIconImage": "",
  "markerInfo": "Sotwarica College Marker"
}
```
Output:
```
{
    "markerIconImage": "",
    "_id": "5d255798f9a24c1720e1ac06",
    "lat": 24.706426,
    "lng": 85.335039,
    "markerInfo": "Sotwarica College Marker",
    "__v": 0
}
```
DELETE: markers/:id
Output:
```
{
    "markerIconImage": "",
    "_id": "5d255a3ff9a24c1720e1ac07",
    "lat": 24.706426,
    "lng": 85.335039,
    "markerInfo": "Random",
    "__v": 0
}
```