import "./css/style.css"
import {getRequest, postRequest, uploadFileRequest, deleteRequest, putRequest} from "../../assets/axios/index"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
$(function(){
  $(".hello").css({
    fontSize:"28px"
  })
  $("body").append("<div>hello world</div>")
})
