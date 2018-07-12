/* global $ */
import FadeModule from './module/fadeModule'
import {AjaxManager} from './service/ajaxManager.js'

window.onload = function() {
    const fadeModule = FadeModule
    fadeModule.setScrollParaxAnimation()
};
