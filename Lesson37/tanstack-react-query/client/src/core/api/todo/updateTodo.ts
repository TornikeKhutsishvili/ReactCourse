import $api from "../../http"

export default async function updateTodo(id: number) {
    const res = await $api.patch(`todo, ${id}`)
    return res.data
}