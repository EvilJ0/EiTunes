import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { WordsValidator } from "../../Utils/WordsValidators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function EditProfileViewComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Input should be ", ctx_r2.formGroup.controls["name"].errors.minlength.requiredLength, " character longs, but it is only ", ctx_r2.formGroup.controls["name"].errors.minlength.actualLength, " ");
} }
function EditProfileViewComponent_div_17_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} }
function EditProfileViewComponent_div_17_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.formGroup.controls["name"].errors.noWords, " ");
} }
function EditProfileViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, EditProfileViewComponent_div_17_span_1_Template, 2, 2, "span", 13);
    i0.ɵɵtemplate(2, EditProfileViewComponent_div_17_span_2_Template, 1, 0, "span", 13);
    i0.ɵɵtemplate(3, EditProfileViewComponent_div_17_span_3_Template, 2, 1, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.formGroup.controls["name"].errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.formGroup.controls["name"].pristine && ctx_r0.formGroup.controls["name"].errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.formGroup.controls["name"].pristine && ctx_r0.formGroup.controls["name"].errors.noWords);
} }
function EditProfileViewComponent_div_19_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Age should be minimum ", ctx_r5.formGroup.controls["age"].errors.min.min, ", but it is ", ctx_r5.formGroup.controls["age"].errors.min.actual, " ");
} }
function EditProfileViewComponent_div_19_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Age should be minimum ", ctx_r6.formGroup.controls["age"].errors.max.max, ", but it is ", ctx_r6.formGroup.controls["age"].errors.max.actual, " ");
} }
function EditProfileViewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, EditProfileViewComponent_div_19_span_1_Template, 2, 2, "span", 13);
    i0.ɵɵtemplate(2, EditProfileViewComponent_div_19_span_2_Template, 2, 2, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.formGroup.controls["age"].errors.min);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.formGroup.controls["age"].errors.max);
} }
export class EditProfileViewComponent {
    // model={
    //   name:'',
    //   age: 0
    // };
    constructor() {
        this.alert = alert;
        this.console = console;
        // nameControl = new FormControl('');
        this.formGroup = new FormGroup({
            name: new FormControl('', [WordsValidator("boris", 1)]),
            age: new FormControl(0, [Validators.min(18), Validators.max(65)]),
            address: new FormGroup({
                street: new FormControl('', [Validators.required, Validators.minLength(2)]),
                city: new FormControl('', [Validators.required, Validators.minLength(2)])
            })
        });
        window['editProfileViewComponent'] = this;
    }
    set color(value) {
        this._color = value;
        this.isBlue = value === 'blue';
    }
    ;
    onClick(param) {
        console.log(param, 'param');
        alert('host click');
    }
    ngOnInit() {
        this
            .formGroup
            .valueChanges
            .subscribe(value => {
            console.log(value, 'value changes');
            if (this.formGroup.controls.name.errors) {
                console.log(this.formGroup.controls.name.errors, 'this.formGroup.controls.name.errors');
            }
        });
    }
    onSave() {
        console.log('Saving Model');
        console.log(this.formGroup.value, 'Model');
    }
}
EditProfileViewComponent.ɵfac = function EditProfileViewComponent_Factory(t) { return new (t || EditProfileViewComponent)(); };
EditProfileViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditProfileViewComponent, selectors: [["app-edit-profile-view"]], hostVars: 2, hostBindings: function EditProfileViewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function EditProfileViewComponent_click_HostBindingHandler() { return ctx.onClick(17); });
    } if (rf & 2) {
        i0.ɵɵclassProp("isBlue", ctx.isBlue);
    } }, inputs: { color: "color", borderRadius: "borderRadius" }, decls: 31, vars: 11, consts: [[1, "form-warp", 3, "formGroup"], [1, "label-cols"], [1, "label"], [1, "input-cols"], ["type", "text", "formControlName", "name", 1, "input-col"], ["class", "form-error-div", 4, "ngIf"], ["type", "number", "formControlName", "age", 1, "input-col"], [1, "input-col"], ["formGroupName", "address"], ["formControlName", "street", "placeholder", "street"], ["formControlName", "city", "placeholder", "city"], ["type", "submit", 3, "disabled", "click"], [1, "form-error-div"], [4, "ngIf"]], template: function EditProfileViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
        i0.ɵɵelement(1, "br");
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "json");
        i0.ɵɵelement(4, "br");
        i0.ɵɵtext(5);
        i0.ɵɵpipe(6, "json");
        i0.ɵɵelement(7, "br");
        i0.ɵɵelementStart(8, "form", 0);
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelementStart(10, "div", 2);
        i0.ɵɵtext(11, "Name:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 2);
        i0.ɵɵtext(13, "Age:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 3);
        i0.ɵɵtext(15, " (has to include boris) ");
        i0.ɵɵelement(16, "input", 4);
        i0.ɵɵtemplate(17, EditProfileViewComponent_div_17_Template, 4, 3, "div", 5);
        i0.ɵɵelement(18, "input", 6);
        i0.ɵɵtemplate(19, EditProfileViewComponent_div_19_Template, 3, 2, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "br");
        i0.ɵɵelementStart(21, "div", 7);
        i0.ɵɵtext(22, " Address: ");
        i0.ɵɵelementStart(23, "form", 8);
        i0.ɵɵtext(24, " street: ");
        i0.ɵɵelement(25, "input", 9);
        i0.ɵɵtext(26, " city: ");
        i0.ɵɵelement(27, "input", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "button", 11);
        i0.ɵɵlistener("click", function EditProfileViewComponent_Template_button_click_28_listener() { return ctx.onSave(); });
        i0.ɵɵtext(29, "Save ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(30, "br");
    } if (rf & 2) {
        i0.ɵɵtextInterpolate1("pristine? ", ctx.formGroup.pristine, "");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("\nvalid: ", i0.ɵɵpipeBind1(3, 7, ctx.formGroup.valid), "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("\nerrors? ", i0.ɵɵpipeBind1(6, 9, ctx.formGroup.errors), "");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.formGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.formGroup.controls["name"].errors);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.formGroup.controls["age"].errors);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("disabled", !ctx.formGroup.valid);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i2.NgIf, i1.NumberValueAccessor, i1.NgForm, i1.FormGroupName], pipes: [i2.JsonPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditProfileViewComponent, [{
        type: Component,
        args: [{
                selector: 'app-edit-profile-view',
                templateUrl: './edit-profile-view.component.html',
                styleUrls: ['./edit-profile-view.component.css']
            }]
    }], function () { return []; }, { color: [{
            type: Input
        }], borderRadius: [{
            type: Input
        }], isBlue: [{
            type: HostBinding,
            args: ['class.isBlue']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['17']]
        }] }); })();
//# sourceMappingURL=edit-profile-view.component.js.map