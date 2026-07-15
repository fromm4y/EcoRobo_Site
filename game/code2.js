gdjs.Fundo_32do_32MarCode = {};
gdjs.Fundo_32do_32MarCode.localVariables = [];
gdjs.Fundo_32do_32MarCode.idToCallbackMap = new Map();
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects1= [];
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects2= [];
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects3= [];
gdjs.Fundo_32do_32MarCode.GDSpawnObjects1= [];
gdjs.Fundo_32do_32MarCode.GDSpawnObjects2= [];
gdjs.Fundo_32do_32MarCode.GDSpawnObjects3= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects1= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects2= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects3= [];
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects1= [];
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2= [];
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects3= [];
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1= [];
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2= [];
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects3= [];
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1= [];
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2= [];
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects3= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects1= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects2= [];
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects3= [];
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1= [];
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2= [];
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects3= [];
gdjs.Fundo_32do_32MarCode.GDPlayerObjects1= [];
gdjs.Fundo_32do_32MarCode.GDPlayerObjects2= [];
gdjs.Fundo_32do_32MarCode.GDPlayerObjects3= [];
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1= [];
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2= [];
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects3= [];
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1= [];
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2= [];
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects3= [];
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1= [];
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2= [];
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects3= [];
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1= [];
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2= [];
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects3= [];
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects1= [];
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2= [];
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects3= [];
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1= [];
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2= [];
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects3= [];
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects1= [];
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects2= [];
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects3= [];


gdjs.Fundo_32do_32MarCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LimiteBOTTON"), gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2);
gdjs.copyArray(runtimeScene.getObjects("LimiteLEFT"), gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2);
gdjs.copyArray(runtimeScene.getObjects("LimiteRIGHT"), gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2);
gdjs.copyArray(runtimeScene.getObjects("LimiteTOP"), gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2);
gdjs.copyArray(runtimeScene.getObjects("Platafrorma"), gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LimiteBOTTON"), gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteLEFT"), gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteRIGHT"), gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteTOP"), gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1[0].getPointX("")) + (( gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1[0].getWidth()), (( gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1[0].getPointY("")) + (( gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1[0].getHeight()), (( gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1[0].getPointX("")), (( gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1.length === 0 ) ? 0 :gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1[0].getPointY("")), "", 0);
}
}

}


};gdjs.Fundo_32do_32MarCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[k] = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fundo_32do_32MarCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[k] = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fundo_32do_32MarCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2.length;i<l;++i) {
    if ( gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2[k] = gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2[i];
        ++k;
    }
}
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1[k] = gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects2Objects = Hashtable.newFrom({"Garrafa": gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2});
gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Fundo_32do_32MarCode.GDPlayerObjects2});
gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects2Objects = Hashtable.newFrom({"Garrafa": gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2});
gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDLimiteBOTTONObjects1Objects = Hashtable.newFrom({"LimiteBOTTON": gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1});
gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects1Objects = Hashtable.newFrom({"Garrafa": gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1});
gdjs.Fundo_32do_32MarCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NumeroColetado"), gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2);
gdjs.copyArray(runtimeScene.getObjects("NumeroPerdido"), gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Garrafa"), gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Fundo_32do_32MarCode.GDSpawnObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDSpawnObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDSpawnObjects2[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDSpawnObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDSpawnObjects2[i].getBehavior("ObjectSpawner").SetSpawnPeriod(3, null);
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2[i].getBehavior("Scale").setScale(10);
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2[i].rotate(gdjs.random(360), runtimeScene);
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2[i].addForce(0, 250, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garrafa"), gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fundo_32do_32MarCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDPlayerObjects2Objects, gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("NumeroColetado"), gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Garrafa"), gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteBOTTON"), gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDLimiteBOTTONObjects1Objects, gdjs.Fundo_32do_32MarCode.mapOfGDgdjs_9546Fundo_959532do_959532MarCode_9546GDGarrafaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NumeroPerdido"), gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
}

}


};gdjs.Fundo_32do_32MarCode.asyncCallback14764716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fundo_32do_32MarCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
gdjs.Fundo_32do_32MarCode.localVariables.length = 0;
}
gdjs.Fundo_32do_32MarCode.idToCallbackMap.set(14764716, gdjs.Fundo_32do_32MarCode.asyncCallback14764716);
gdjs.Fundo_32do_32MarCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fundo_32do_32MarCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Fundo_32do_32MarCode.asyncCallback14764716(runtimeScene, asyncObjectsList)), 14764716, asyncObjectsList);
}
}

}


};gdjs.Fundo_32do_32MarCode.asyncCallback14764980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fundo_32do_32MarCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("TextoDeInicio"), gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2);

{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2[i].getBehavior("Tween").addObjectOpacityTween2("TextoDeInicio", 0, "linear", 1, true);
}
}

{ //Subevents
gdjs.Fundo_32do_32MarCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Fundo_32do_32MarCode.localVariables.length = 0;
}
gdjs.Fundo_32do_32MarCode.idToCallbackMap.set(14764980, gdjs.Fundo_32do_32MarCode.asyncCallback14764980);
gdjs.Fundo_32do_32MarCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fundo_32do_32MarCode.localVariables);
for (const obj of gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1) asyncObjectsList.addObject("TextoDeInicio", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Fundo_32do_32MarCode.asyncCallback14764980(runtimeScene, asyncObjectsList)), 14764980, asyncObjectsList);
}
}

}


};gdjs.Fundo_32do_32MarCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoDeInicio"), gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1);
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1.length ;i < len;++i) {
    gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1[i].getBehavior("Tween").addObjectOpacityTween2("TextoDeInicio", 255, "linear", 1, false);
}
}

{ //Subevents
gdjs.Fundo_32do_32MarCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Fundo_32do_32MarCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "START Scene", false);
}
}

}


};gdjs.Fundo_32do_32MarCode.eventsList7 = function(runtimeScene) {

{


gdjs.Fundo_32do_32MarCode.eventsList0(runtimeScene);
}


{


gdjs.Fundo_32do_32MarCode.eventsList1(runtimeScene);
}


{


gdjs.Fundo_32do_32MarCode.eventsList2(runtimeScene);
}


{


gdjs.Fundo_32do_32MarCode.eventsList5(runtimeScene);
}


{


gdjs.Fundo_32do_32MarCode.eventsList6(runtimeScene);
}


};

gdjs.Fundo_32do_32MarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects3.length = 0;

gdjs.Fundo_32do_32MarCode.eventsList7(runtimeScene);
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDFundo_9595MarObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDSpawnObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroColetadoObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDGarrafaObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDNumeroPerdidoObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDContador_9595de_9595ObjetosPerdidosObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDTextoDeInicioObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlayerObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteRIGHTObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteLEFTObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteTOPObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDLimiteBOTTONObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDPlatafrormaObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDMoveJoystickObjects3.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects1.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects2.length = 0;
gdjs.Fundo_32do_32MarCode.GDJumpButtonObjects3.length = 0;


return;

}

gdjs['Fundo_32do_32MarCode'] = gdjs.Fundo_32do_32MarCode;
