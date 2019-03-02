import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { ImageProvider } from '../providers/image/image';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,File,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider
  ]
})
export class AppModule {}
