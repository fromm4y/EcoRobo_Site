gdjs.Ferro_32velhoCode = {};
gdjs.Ferro_32velhoCode.localVariables = [];
gdjs.Ferro_32velhoCode.idToCallbackMap = new Map();
gdjs.Ferro_32velhoCode.GDFundoMetalObjects1= [];
gdjs.Ferro_32velhoCode.GDFundoMetalObjects2= [];
gdjs.Ferro_32velhoCode.GDFundoMetalObjects3= [];
gdjs.Ferro_32velhoCode.GDPlataformaObjects1= [];
gdjs.Ferro_32velhoCode.GDPlataformaObjects2= [];
gdjs.Ferro_32velhoCode.GDPlataformaObjects3= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects1= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects3= [];
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects1= [];
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2= [];
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects3= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects1= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects3= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects1= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2= [];
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects3= [];
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects1= [];
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects2= [];
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects3= [];
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects1= [];
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2= [];
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects3= [];
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1= [];
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2= [];
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects3= [];
gdjs.Ferro_32velhoCode.GDPlayerObjects1= [];
gdjs.Ferro_32velhoCode.GDPlayerObjects2= [];
gdjs.Ferro_32velhoCode.GDPlayerObjects3= [];
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1= [];
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects2= [];
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects3= [];
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1= [];
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects2= [];
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects3= [];
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1= [];
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects2= [];
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects3= [];
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1= [];
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects2= [];
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects3= [];
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1= [];
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects2= [];
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects3= [];
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1= [];
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2= [];
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects3= [];
gdjs.Ferro_32velhoCode.GDJumpButtonObjects1= [];
gdjs.Ferro_32velhoCode.GDJumpButtonObjects2= [];
gdjs.Ferro_32velhoCode.GDJumpButtonObjects3= [];


gdjs.Ferro_32velhoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Ferro_32velhoCode.GDPlayerObjects2[k] = gdjs.Ferro_32velhoCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Ferro_32velhoCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Ferro_32velhoCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Ferro_32velhoCode.GDPlayerObjects2[k] = gdjs.Ferro_32velhoCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Ferro_32velhoCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Ferro_32velhoCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Walk");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2.length;i<l;++i) {
    if ( gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2[i].IsDirectionPushed4Way("Left", null) ) {
        isConditionTrue_0 = true;
        gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2[k] = gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2[i];
        ++k;
    }
}
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1[i].IsDirectionPushed4Way("Right", null) ) {
        isConditionTrue_0 = true;
        gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1[k] = gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1[i];
        ++k;
    }
}
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Ferro_32velhoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LimiteBOTTON"), gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteLEFT"), gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteRIGHT"), gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1);
gdjs.copyArray(runtimeScene.getObjects("LimiteTOP"), gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1[0].getPointX("")) + (( gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1[0].getWidth()), (( gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1[0].getPointY("")) + (( gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1[0].getHeight()), (( gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1[0].getPointX("")), (( gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1.length === 0 ) ? 0 :gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1[0].getPointY("")), "", 0);
}
}

}


};gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Ferro_32velhoCode.GDPlayerObjects2});
gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595EngrenagemObjects2Objects = Hashtable.newFrom({"Coletavel_Engrenagem": gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2});
gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Ferro_32velhoCode.GDPlayerObjects2});
gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595LataDeConservaObjects2Objects = Hashtable.newFrom({"Coletavel_LataDeConserva": gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2});
gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Ferro_32velhoCode.GDPlayerObjects2});
gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595LataObjects2Objects = Hashtable.newFrom({"Coletavel_Lata": gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2});
gdjs.Ferro_32velhoCode.asyncCallback14701988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Ferro_32velhoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "START Scene", false);
}
gdjs.Ferro_32velhoCode.localVariables.length = 0;
}
gdjs.Ferro_32velhoCode.idToCallbackMap.set(14701988, gdjs.Ferro_32velhoCode.asyncCallback14701988);
gdjs.Ferro_32velhoCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Ferro_32velhoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Ferro_32velhoCode.asyncCallback14701988(runtimeScene, asyncObjectsList)), 14701988, asyncObjectsList);
}
}

}


};gdjs.Ferro_32velhoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuantidadeColetada"), gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2);
gdjs.copyArray(runtimeScene.getObjects("TEXTO_DE_FINALIZAÇÃO"), gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coletavel_Engrenagem"), gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects, gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595EngrenagemObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2 */
gdjs.copyArray(runtimeScene.getObjects("QuantidadeColetada"), gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Texto_de_Apoio"), gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coletavel_LataDeConserva"), gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects, gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595LataDeConservaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("QuantidadeColetada"), gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coletavel_Lata"), gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Ferro_32velhoCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDPlayerObjects2Objects, gdjs.Ferro_32velhoCode.mapOfGDgdjs_9546Ferro_959532velhoCode_9546GDColetavel_95959595LataObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2 */
gdjs.copyArray(runtimeScene.getObjects("QuantidadeColetada"), gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TEXTO_DE_FINALIZAÇÃO"), gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1);
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1[i].getBehavior("Tween").addObjectOpacityTween2("TxtFinalizacao", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.Ferro_32velhoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Ferro_32velhoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Ferro_32velhoCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveJoystick"), gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platafrorma"), gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDJumpButtonObjects1[i].getBehavior("Scale").setScale(3.5);
}
}
{for(var i = 0, len = gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1.length ;i < len;++i) {
    gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1[i].getBehavior("Scale").setScale(2);
}
}
}

}


{


gdjs.Ferro_32velhoCode.eventsList0(runtimeScene);
}


{


gdjs.Ferro_32velhoCode.eventsList1(runtimeScene);
}


{


gdjs.Ferro_32velhoCode.eventsList3(runtimeScene);
}


};

gdjs.Ferro_32velhoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Ferro_32velhoCode.GDFundoMetalObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDFundoMetalObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDFundoMetalObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects3.length = 0;

gdjs.Ferro_32velhoCode.eventsList4(runtimeScene);
gdjs.Ferro_32velhoCode.GDFundoMetalObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDFundoMetalObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDFundoMetalObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlataformaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595EngrenagemObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDTexto_9595de_9595ApoioObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataDeConservaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDColetavel_9595LataObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDNumeroDeColetaveisObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDQuantidadeColetadaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDTEXTO_9595DE_9595FINALIZA_95199_95195OObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlayerObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteRIGHTObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteLEFTObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteTOPObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDLimiteBOTTONObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDPlatafrormaObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDMoveJoystickObjects3.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects1.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects2.length = 0;
gdjs.Ferro_32velhoCode.GDJumpButtonObjects3.length = 0;


return;

}

gdjs['Ferro_32velhoCode'] = gdjs.Ferro_32velhoCode;
