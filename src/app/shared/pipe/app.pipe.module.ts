import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pípe";

@NgModule({
    declarations:[
        ReplacePipe
    ],
    exports:[
        ReplacePipe
    ]
}) 
export class AppPipeModule{

}