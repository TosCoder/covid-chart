import randomColor from 'randomcolor'

export const customData = (data) => {

        const newArr = data.map(item => {
            return {
                country : item.country,
                date: Object.keys(item.timeline.cases)[0],
                value: Object.values(item.timeline.cases)[0],
                color: randomColor()
            }
        })
        return newArr
}