
function getChangedFields(original: any, modified: any) {
    const changedFields = {};

    for (const key in modified) {
        if (JSON.stringify(original[key]) != JSON.stringify(modified[key])) {
            //@ts-ignore
            changedFields[key] = modified[key];
        }
    }

    return changedFields;
}

export default getChangedFields;