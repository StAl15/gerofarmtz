export const calcWidth = () => {
    let res = Math.floor((window.innerWidth - (200 + 250)) / 150)
    return res > 0 ? res : 1
}

export const calcHeight = () => {
    let res = Math.floor((window.innerHeight - (100 + 50)) / 100) - 1
    return res > 0 ? res : 1
}