/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_633375",
    "hidden": false,
    "id": "relation2868940906",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "accompagner",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2480682022")

  // remove field
  collection.fields.removeById("relation2868940906")

  return app.save(collection)
})
