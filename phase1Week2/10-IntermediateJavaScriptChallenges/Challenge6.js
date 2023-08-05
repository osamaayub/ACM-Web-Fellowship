function ValidatePin(pin){
    const fourdigit=/^([0-9]{4}$)/;
    const sixdigit=/^([0-9]{6}$)/;

    const result1=pin.match(fourdigit);
    const result2=pin.match(sixdigit);

    return !(result1 && result2);
}