import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const inquiryStore = new Vuex.Store({
  state: {
    inquiries: [],
    newInquiry: {
      title: '',
      description: '',
      name: '',
    },
    showInquiry: 'all',
  },
  mutations: {
    updateTitle(state, title) {
      state.newInquiry.title = title
    },
    updateDescription(state, description) {
      state.newInquiry.description = description
    },
    setInquiries(state, inquiries) {
      state.inquiries = inquiries
    },
    input: function(state, child) {
      state.newInquiry = child
    },
    changeShowInquiry(state, e) {
      state.showInquiry = e
    },
  },
  actions: {
    async getInquiries(ctx) {
      const data = await api.fetch()
      ctx.commit('setInquiries', data)
    },
    addInquiry(ctx) {
      let text = this.state.newInquiry && this.state.newInquiry.trim()
      if (!text) {
        return
      }
      const data = {
        id: this.state.inquiries.slice(-1)[0].id + 1,
        text: text,
        done: false,
      }
      this.state.inquiries.push(data)
      api.create(data)
      this.state.newInquiry = ''
    },
    editInquiry: function(ctx, params) {
      delete params.editing
      api.update(params)
    },
  },
})

export default inquiryStore
