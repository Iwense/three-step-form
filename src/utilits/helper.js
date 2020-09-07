export function form(value = [], btnValue = 'Далее'){
    const inputs = value.map(item => `
    <div class="form-group">
        <input type="${item.type}" class="form-control"  placeholder="${item.placeholder}" name="${item.name}"  ${item.isRequired}>
    </div>`).join('')

    return `<form class="form">
            ${inputs}
        <button type="submit" class="btn">${btnValue}</button>
    </form>`
}