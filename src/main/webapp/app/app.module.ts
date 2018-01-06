import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { SocialintellectSharedModule, UserRouteAccessService } from './shared';
import { SocialintellectAppRoutingModule} from './app-routing.module';
import { SocialintellectHomeModule } from './home/home.module';
import { SocialintellectAdminModule } from './admin/admin.module';
import { SocialintellectAccountModule } from './account/account.module';
import { SocialintellectEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        SocialintellectAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        SocialintellectSharedModule,
        SocialintellectHomeModule,
        SocialintellectAdminModule,
        SocialintellectAccountModule,
        SocialintellectEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class SocialintellectAppModule {}
