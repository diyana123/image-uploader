import ImageUploader from './components/ImageUploader.vue'

export default{
    install(app,options){
        app.component('ImageUploader', ImageUploader)
    }
}