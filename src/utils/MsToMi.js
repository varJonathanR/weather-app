function MsToMPH(m) {
    const MPH = m * 2.2369;

    return MPH.toFixed(1);
}

function MetersToMiles(m) {
    const Mi = m * 0.00062137;

    return Mi.toFixed(1);
}

export { MsToMPH, MetersToMiles }
