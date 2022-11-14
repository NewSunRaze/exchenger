import Vue from 'vue'

const store = {
    state:() => {
        return {
            currency: {}
        }
    },
    getters: {
        currency: (state) => state.currency
    },
    mutations: {
        setCurrency(state, data) {
            Vue.set(state, 'currency', data)
        },
    },
    actions: {
        async getCurrency({ commit }) {
            const res = await this.$axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            res.data.Valute.RUB = {
                "ID": "R1",
                "NumCode": "11111",
                "CharCode": "RUB",
                "Nominal": 1,
                "Name": "Рубль",
                "Value": 1,
                "Previous": 1
            }
            commit('setCurrency', res.data.Valute);
        }
    }

}

export default store
