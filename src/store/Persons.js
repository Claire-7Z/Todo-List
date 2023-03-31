import axios from "axios";
import { nanoid } from "nanoid";

export default {
	namespaced:true,
    actions: {
        addPerson(context, v) {
            context.commit("addPerson", v);
        },
        addPersonWang(context, v) {
            if(v.name.indexOf("王") === 0) {
                context.commit("addPerson", v);
            } else {
                alert("此处只能添加姓王的人");
            }
        },
        addPersonServer(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response => {
                    context.commit("addPerson", {id: nanoid(), name: response.data});
                },
                error => {
                    alert(error)
                }
            )
        }
    },
    mutations: {
        addPerson(state, v) {
            state.personList.unshift(v);
        },
        addPersonWang(state, v) {
            state.personList.unshift(v)
        }
    },
    state: {
        personList: [
            {id: '001', name: "张三"}
        ]
    }
}