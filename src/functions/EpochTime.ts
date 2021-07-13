export const TimeToHuman = (epoch: number) => {
    let d = new Date(epoch);

    let text_full = d.getDate() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear();

    return {
        text_full,
        date: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear()
    }
}