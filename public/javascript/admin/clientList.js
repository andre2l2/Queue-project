const ClientList = {
    getAll(list) {
        if (!list) throw new Error('Don`t get items in socket');
        return list;
    },
    render(list) {
        const $list = document.querySelector('#list');
        const $listNum = document.querySelector('#list-num');
        const users = ClientList.getAll(list);

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