/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

  // remove field
  collection.fields.removeById("date2220277813")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number2220277813",
    "max": null,
    "min": null,
    "name": "duree",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

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

  // remove field
  collection.fields.removeById("number2220277813")

  return app.save(collection)
})
