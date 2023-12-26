export function formatNumber(number: number) {
    const suffixes = [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
    ];

    const suffixIndex = Math.floor(Math.log10(number) / 3);
    const roundedNumber = (number / Math.pow(1000, suffixIndex)).toFixed(2);

    return [roundedNumber, suffixes[suffixIndex]];
}
