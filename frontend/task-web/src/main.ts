import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent, appConfig } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    ...appConfig,
    providers: [
        provideHttpClient(),
        ...(appConfig.providers || [])
    ]
}).catch(err => console.error(err));