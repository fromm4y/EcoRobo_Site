gdjs.START_32SceneCode = {};
gdjs.START_32SceneCode.localVariables = [];
gdjs.START_32SceneCode.idToCallbackMap = new Map();
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1= [];
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects2= [];
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1= [];
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects2= [];
gdjs.START_32SceneCode.GDPRAIAObjects1= [];
gdjs.START_32SceneCode.GDPRAIAObjects2= [];
gdjs.START_32SceneCode.GDPlayerObjects1= [];
gdjs.START_32SceneCode.GDPlayerObjects2= [];
gdjs.START_32SceneCode.GDLimiteRIGHTObjects1= [];
gdjs.START_32SceneCode.GDLimiteRIGHTObjects2= [];
gdjs.START_32SceneCode.GDLimiteLEFTObjects1= [];
gdjs.START_32SceneCode.GDLimiteLEFTObjects2= [];
gdjs.START_32SceneCode.GDLimiteTOPObjects1= [];
gdjs.START_32SceneCode.GDLimiteTOPObjects2= [];
gdjs.START_32SceneCode.GDLimiteBOTTONObjects1= [];
gdjs.START_32SceneCode.GDLimiteBOTTONObjects2= [];
gdjs.START_32SceneCode.GDPlatafrormaObjects1= [];
gdjs.START_32SceneCode.GDPlatafrormaObjects2= [];
gdjs.START_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.START_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.START_32SceneCode.GDJumpButtonObjects1= [];
gdjs.START_32SceneCode.GDJumpButtonObjects2= [];


gdjs.START_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Ferro velho");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Fundo do Mar");
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Praia");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FERRO_VELHO"), gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1.length;i<l;++i) {
    if ( gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1[k] = gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1[i];
        ++k;
    }
}
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ferro velho", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FUNDO_DO_MAR"), gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1.length;i<l;++i) {
    if ( gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1[k] = gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1[i];
        ++k;
    }
}
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fundo do Mar", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PRAIA"), gdjs.START_32SceneCode.GDPRAIAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.START_32SceneCode.GDPRAIAObjects1.length;i<l;++i) {
    if ( gdjs.START_32SceneCode.GDPRAIAObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.START_32SceneCode.GDPRAIAObjects1[k] = gdjs.START_32SceneCode.GDPRAIAObjects1[i];
        ++k;
    }
}
gdjs.START_32SceneCode.GDPRAIAObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Praia", false);
}
}

}


};

gdjs.START_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1.length = 0;
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects2.length = 0;
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1.length = 0;
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects2.length = 0;
gdjs.START_32SceneCode.GDPRAIAObjects1.length = 0;
gdjs.START_32SceneCode.GDPRAIAObjects2.length = 0;
gdjs.START_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.START_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteLEFTObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteLEFTObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteTOPObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteTOPObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.START_32SceneCode.GDPlatafrormaObjects1.length = 0;
gdjs.START_32SceneCode.GDPlatafrormaObjects2.length = 0;
gdjs.START_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.START_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.START_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.START_32SceneCode.GDJumpButtonObjects2.length = 0;

gdjs.START_32SceneCode.eventsList0(runtimeScene);
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects1.length = 0;
gdjs.START_32SceneCode.GDFERRO_9595VELHOObjects2.length = 0;
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects1.length = 0;
gdjs.START_32SceneCode.GDFUNDO_9595DO_9595MARObjects2.length = 0;
gdjs.START_32SceneCode.GDPRAIAObjects1.length = 0;
gdjs.START_32SceneCode.GDPRAIAObjects2.length = 0;
gdjs.START_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.START_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteLEFTObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteLEFTObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteTOPObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteTOPObjects2.length = 0;
gdjs.START_32SceneCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.START_32SceneCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.START_32SceneCode.GDPlatafrormaObjects1.length = 0;
gdjs.START_32SceneCode.GDPlatafrormaObjects2.length = 0;
gdjs.START_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.START_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.START_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.START_32SceneCode.GDJumpButtonObjects2.length = 0;


return;

}

gdjs['START_32SceneCode'] = gdjs.START_32SceneCode;
