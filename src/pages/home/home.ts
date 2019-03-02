import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';
import { ImageProvider } from '../../providers/image/image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  base64img:string='';
  constructor(public imgpov:ImageProvider, public nav: NavController,private cameraPreview: CameraPreview,private platform: Platform,private camera:Camera) {
    // const cameraPreviewOpts: CameraPreviewOptions = {
    //   x: 0,
    //   y: 0,
    //   width: window.screen.width,
    //   height: window.screen.height,
    //   camera: 'rear',
    //   tapPhoto: true,
    //   previewDrag: true,
    //   toBack: true,
    //   alpha: 1
    // }
    // platform.ready().then(() => {
    //   console.log("Starting camera");
    //   this.cameraPreview.startCamera(cameraPreviewOpts).then(
    //     (res) => {
    //       console.log(res)
    //     },
    //     (err) => {
    //       console.log(err)
    //   });
    // });
  }

  imageCaptured(){
    const options:CameraOptions={
      quality:70,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((ImageData=>{
       this.base64img="data:image/jpeg;base64,"+ImageData;
    }),error=>{
      console.log(error);
    })
    //this.nav.push('IdentifyphotoPage');
  }
  imageCapturedGallery(){
    const options:CameraOptions={
      quality:70,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    this.camera.getPicture(options).then((ImageData=>{
       this.base64img="data:image/jpeg;base64,"+ImageData;
    }),error=>{
      console.log(error);
    })
  }
  nextPage(){
    this.imgpov.setImage(this.base64img);
    this.nav.push('IdentifyphotoPage');
  }
  clear(){
    this.base64img='';
  }
}
