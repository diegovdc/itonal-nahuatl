import Vue from 'vue'
import * as R from 'ramda'
import {
  baseUrl
} from '../base-url'
import {
  mapState
} from 'vuex';
Vue.mixin({
  data() {
    return {
      baseUrl
    }
  },
  computed: {
    ...mapState(['trans', 'lang']),
  },
  methods: {
    getCoords(elem) {
      // crossbrowser version
      var box = elem.getBoundingClientRect()

      var body = document.body
      var docEl = document.documentElement

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

      var clientTop = docEl.clientTop || body.clientTop || 0
      var clientLeft = docEl.clientLeft || body.clientLeft || 0

      var top = box.top + scrollTop - clientTop
      var left = box.left + scrollLeft - clientLeft

      return {
        top: Math.round(top),
        left: Math.round(left)
      }
    },
    titulo: R.path(['attributes', 'titulo']),
    slug: R.path(['attributes', 'slug']),
    audio: R.path(['attributes', 'audio']),
    imagen: R.path(['attributes', 'imagen']),
    getTrans(or, path) {
      return R.pathOr(or, path.concat(this.lang), this.trans)
    }
  }
})
