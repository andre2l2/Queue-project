const ClientList = {
    getAll() {
        return [
            {
                wasAttended: false,
                name: "jsoe",
                queueNumber: "1"
            },
            {
                wasAttended: false,
                name: "jsoe",
                queueNumber: "2"
            },
            {
                wasAttended: false,
                name: "jsoe",
                queueNumber: "3"
            },
        ]
    },
    render() {
        const $list = document.querySelector('#list');
        const $listNum = document.querySelector('#list-num');
        const users = ClientList.getAll();

        $listNum.innerHTML = `${users[0].queueNumber}`.padStart(5, '0');
        users.forEach((e) => {
            $list.innerHTML += `
                <li>
                    <span>${e.name}</span>
                    <span>${e.queueNumber}</span>
                </li>
            `
        })
    }
}

export default ClientList;