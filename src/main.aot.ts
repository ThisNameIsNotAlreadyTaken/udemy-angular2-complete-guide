import 'reflect-metadata';
import { platformBrowser }    from '@angular/platform-browser';
import { MainModuleNgFactory } from '../aot/src/main.module.ngfactory';

const platform = platformBrowser();

platform.bootstrapModuleFactory(MainModuleNgFactory);