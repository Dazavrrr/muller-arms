
export function getChangedFields(original: any, modified: any) {
    const changedFields = {};

    for (const key in modified) {
        if (original[key] != modified[key]) {
            //@ts-ignore
            changedFields[key] = modified[key];
        }
    }

    return changedFields;
}