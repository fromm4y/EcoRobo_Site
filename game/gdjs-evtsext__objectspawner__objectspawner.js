
gdjs.evtsExt__ObjectSpawner__ObjectSpawner = gdjs.evtsExt__ObjectSpawner__ObjectSpawner || {};

/**
 * Behavior generated from Object spawner
 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner = class ObjectSpawner extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SpawnPeriod = behaviorData.SpawnPeriod !== undefined ? behaviorData.SpawnPeriod : Number("1") || 0;
    this._behaviorData.OffsetX = Number("0") || 0;
    this._behaviorData.OffsetY = Number("0") || 0;
    this._behaviorData.JustSpawnedAnObject = false;
    this._behaviorData.MaxQuantityReached = false;
    this._behaviorData.MaxQuantity = behaviorData.MaxQuantity !== undefined ? behaviorData.MaxQuantity : Number("0") || 0;
    this._behaviorData.SpawnerCapacity = behaviorData.SpawnerCapacity !== undefined ? behaviorData.SpawnerCapacity : Number("0") || 0;
    this._behaviorData.UnlimitedCapacity = behaviorData.UnlimitedCapacity !== undefined ? behaviorData.UnlimitedCapacity : true;
    this._behaviorData.RandomPosition = behaviorData.RandomPosition !== undefined ? behaviorData.RandomPosition : false;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.SpawnPeriod !== undefined)
      this._behaviorData.SpawnPeriod = behaviorOverriding.SpawnPeriod;
    if (behaviorOverriding.OffsetX !== undefined)
      this._behaviorData.OffsetX = behaviorOverriding.OffsetX;
    if (behaviorOverriding.OffsetY !== undefined)
      this._behaviorData.OffsetY = behaviorOverriding.OffsetY;
    if (behaviorOverriding.JustSpawnedAnObject !== undefined)
      this._behaviorData.JustSpawnedAnObject = behaviorOverriding.JustSpawnedAnObject;
    if (behaviorOverriding.MaxQuantityReached !== undefined)
      this._behaviorData.MaxQuantityReached = behaviorOverriding.MaxQuantityReached;
    if (behaviorOverriding.MaxQuantity !== undefined)
      this._behaviorData.MaxQuantity = behaviorOverriding.MaxQuantity;
    if (behaviorOverriding.SpawnerCapacity !== undefined)
      this._behaviorData.SpawnerCapacity = behaviorOverriding.SpawnerCapacity;
    if (behaviorOverriding.UnlimitedCapacity !== undefined)
      this._behaviorData.UnlimitedCapacity = behaviorOverriding.UnlimitedCapacity;
    if (behaviorOverriding.RandomPosition !== undefined)
      this._behaviorData.RandomPosition = behaviorOverriding.RandomPosition;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    SpawnPeriod: this._behaviorData.SpawnPeriod,
    OffsetX: this._behaviorData.OffsetX,
    OffsetY: this._behaviorData.OffsetY,
    JustSpawnedAnObject: this._behaviorData.JustSpawnedAnObject,
    MaxQuantityReached: this._behaviorData.MaxQuantityReached,
    MaxQuantity: this._behaviorData.MaxQuantity,
    SpawnerCapacity: this._behaviorData.SpawnerCapacity,
    UnlimitedCapacity: this._behaviorData.UnlimitedCapacity,
    RandomPosition: this._behaviorData.RandomPosition,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.SpawnPeriod !== undefined)
      this._behaviorData.SpawnPeriod = networkSyncData.props.SpawnPeriod;
    if (networkSyncData.props.OffsetX !== undefined)
      this._behaviorData.OffsetX = networkSyncData.props.OffsetX;
    if (networkSyncData.props.OffsetY !== undefined)
      this._behaviorData.OffsetY = networkSyncData.props.OffsetY;
    if (networkSyncData.props.JustSpawnedAnObject !== undefined)
      this._behaviorData.JustSpawnedAnObject = networkSyncData.props.JustSpawnedAnObject;
    if (networkSyncData.props.MaxQuantityReached !== undefined)
      this._behaviorData.MaxQuantityReached = networkSyncData.props.MaxQuantityReached;
    if (networkSyncData.props.MaxQuantity !== undefined)
      this._behaviorData.MaxQuantity = networkSyncData.props.MaxQuantity;
    if (networkSyncData.props.SpawnerCapacity !== undefined)
      this._behaviorData.SpawnerCapacity = networkSyncData.props.SpawnerCapacity;
    if (networkSyncData.props.UnlimitedCapacity !== undefined)
      this._behaviorData.UnlimitedCapacity = networkSyncData.props.UnlimitedCapacity;
    if (networkSyncData.props.RandomPosition !== undefined)
      this._behaviorData.RandomPosition = networkSyncData.props.RandomPosition;
  }

  // Properties:
  
  _getSpawnPeriod() {
    return this._behaviorData.SpawnPeriod !== undefined ? this._behaviorData.SpawnPeriod : Number("1") || 0;
  }
  _setSpawnPeriod(newValue) {
    this._behaviorData.SpawnPeriod = newValue;
  }
  _getOffsetX() {
    return this._behaviorData.OffsetX !== undefined ? this._behaviorData.OffsetX : Number("0") || 0;
  }
  _setOffsetX(newValue) {
    this._behaviorData.OffsetX = newValue;
  }
  _getOffsetY() {
    return this._behaviorData.OffsetY !== undefined ? this._behaviorData.OffsetY : Number("0") || 0;
  }
  _setOffsetY(newValue) {
    this._behaviorData.OffsetY = newValue;
  }
  _getJustSpawnedAnObject() {
    return this._behaviorData.JustSpawnedAnObject !== undefined ? this._behaviorData.JustSpawnedAnObject : false;
  }
  _setJustSpawnedAnObject(newValue) {
    this._behaviorData.JustSpawnedAnObject = newValue;
  }
  _toggleJustSpawnedAnObject() {
    this._setJustSpawnedAnObject(!this._getJustSpawnedAnObject());
  }
  _getMaxQuantityReached() {
    return this._behaviorData.MaxQuantityReached !== undefined ? this._behaviorData.MaxQuantityReached : false;
  }
  _setMaxQuantityReached(newValue) {
    this._behaviorData.MaxQuantityReached = newValue;
  }
  _toggleMaxQuantityReached() {
    this._setMaxQuantityReached(!this._getMaxQuantityReached());
  }
  _getMaxQuantity() {
    return this._behaviorData.MaxQuantity !== undefined ? this._behaviorData.MaxQuantity : Number("0") || 0;
  }
  _setMaxQuantity(newValue) {
    this._behaviorData.MaxQuantity = newValue;
  }
  _getSpawnerCapacity() {
    return this._behaviorData.SpawnerCapacity !== undefined ? this._behaviorData.SpawnerCapacity : Number("0") || 0;
  }
  _setSpawnerCapacity(newValue) {
    this._behaviorData.SpawnerCapacity = newValue;
  }
  _getUnlimitedCapacity() {
    return this._behaviorData.UnlimitedCapacity !== undefined ? this._behaviorData.UnlimitedCapacity : true;
  }
  _setUnlimitedCapacity(newValue) {
    this._behaviorData.UnlimitedCapacity = newValue;
  }
  _toggleUnlimitedCapacity() {
    this._setUnlimitedCapacity(!this._getUnlimitedCapacity());
  }
  _getRandomPosition() {
    return this._behaviorData.RandomPosition !== undefined ? this._behaviorData.RandomPosition : false;
  }
  _setRandomPosition(newValue) {
    this._behaviorData.RandomPosition = newValue;
  }
  _toggleRandomPosition() {
    this._setRandomPosition(!this._getRandomPosition());
  }
}

/**
 * Shared data generated from Object spawner
 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.SharedData = class ObjectSpawnerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ObjectSpawner_ObjectSpawnerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ObjectSpawner_ObjectSpawnerSharedData = new gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.SharedData(
      initialData
    );
  }
  return instanceContainer._ObjectSpawner_ObjectSpawnerSharedData;
}

// Methods:
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1[i].unpauseTimer("__ObjectSpawner.SpawnTimer");
}
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1[i].pauseTimer("__ObjectSpawner.SpawnTimer");
}
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.onDeActivateContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects3= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects3= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects) < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14435612);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects) >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantityReached(true)
}
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantityReached(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToSpawn"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects, (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0] : null), eventsFunctionContext);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects = Hashtable.newFrom({"ObjectToSpawn": gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1});
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY() != 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);

gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2);

{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2[i].setCenterPositionInScene((( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[0].getAABBCenterX()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX(),(( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[0].getAABBCenterY()) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY());
}
}
}

}


{

/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).RandomPosition(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1[i].setCenterPositionInScene((( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getAABBLeft()) + gdjs.random((( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getWidth())),(( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getAABBTop()) + gdjs.random((( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getHeight())));
}
}
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595ObjectSpawner_9595_9595ObjectSpawner_9546ObjectSpawner_9546prototype_9546SpawnObjectContext_9546GDObjectToSpawnObjects1Objects, (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getAABBCenterX()), (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getAABBCenterY()), (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0].getLayer()));
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1[0] : null), (gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length !== 0 ? gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[0] : null));
}

{ //Subevents
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustSpawnedAnObject(false)
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("__ObjectSpawner.SpawnTimer") > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UnlimitedObjectCapacity(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SpawnerCapacity(eventsFunctionContext) > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1_1final, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnerCapacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnerCapacity()-1)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJustSpawnedAnObject(true)
}

{ //Subevents
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObject = function(ObjectToSpawn, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ObjectToSpawn": ObjectToSpawn
},
  _objectArraysMap: {
"Object": thisObjectList
, "ObjectToSpawn": gdjs.objectsListsToArray(ObjectToSpawn)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects3.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects2.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnObjectContext.GDObjectToSpawnObjects3.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetX(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOffsetY(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetOffsetYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnPeriod(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriod = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnPeriodContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetX();}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetY();}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.OffsetYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod();}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriod = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnPeriodContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1[i].resetTimer("__ObjectSpawner.SpawnTimer");
}
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimer = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ResetSpawnTimerContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UnlimitedObjectCapacity(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SpawnerCapacity(eventsFunctionContext) > 0 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[k] = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final.push(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1_1final, gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1);
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod();}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantityReached();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnPeriod() - (( gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1[0].getTimerElapsedTimeInSeconds("__ObjectSpawner.SpawnTimer"));}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawn = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.TimeBeforeSpawnContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJustSpawnedAnObject();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawned = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.ObjectWasJustSpawnedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxQuantity();}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.MaxQuantityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxQuantity(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetMaxQuantityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUnlimitedCapacity();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.UnlimitedObjectCapacityContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedCapacity(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setUnlimitedCapacity(true)
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetUnlimitedObjectCapacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getSpawnerCapacity();}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SpawnerCapacityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setSpawnerCapacity(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetSpawnerCapacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRandomPosition();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.RandomPositionContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext = {};
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRandomPosition(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRandomPosition(true)
}
}

}


};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPosition = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ObjectSpawner"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ObjectSpawner"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.SetRandomPositionContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("ObjectSpawner::ObjectSpawner", gdjs.evtsExt__ObjectSpawner__ObjectSpawner.ObjectSpawner);
