/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "date2877489204",
    "max": "",
    "min": "",
    "name": "date_heure",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date2220277813",
    "max": "",
    "min": "",
    "name": "duree",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

  // remove field
  collection.fields.removeById("date2877489204")

  // remove field
  collection.fields.removeById("date2220277813")

  return app.save(collection)
})
