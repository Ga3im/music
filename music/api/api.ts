const BASE_URL = 'https://webdev-music-003b5b991590.herokuapp.com'

export const getTracks = async () => {
    const res = await fetch(BASE_URL + '/catalog/track/all/', {
        method: 'GET',
    })
    if (!res.ok) {
        throw new Error('Ошибка при получении данных')
    }
    return res.json()
}
