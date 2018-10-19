export const setTextField = (tState, values, vName) => {
    tState[vName] = values[vName] ? values[vName] : tState[vName];
};

export const setBoolField = (tState, values, vName) => {
    if(values[vName]){
        switch(values[vName].toLowerCase()){
            case "false":
                tState[vName] = false;
                break;
            case "true":
                tState[vName] = true;
        }
    }
}
