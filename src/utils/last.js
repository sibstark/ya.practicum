function last(list) {
    if (Array.isArray(list) && list.length > 0) {
        return list[list.length - 1];
    }
    return;
}