import 'reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CourseraModule } from './coursera/coursera.module';
import { UdemyModule } from './udemy/udemy.module';

const platform = platformBrowserDynamic();

//platform.bootstrapModule(CourseraModule);
platform.bootstrapModule(UdemyModule);