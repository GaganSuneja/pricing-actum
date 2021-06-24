import { AfterViewInit, Component, EventEmitter,ElementRef, Input, OnInit, ViewChild, Output, ViewEncapsulation } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Plan } from 'src/app/models/plan';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss'],
})
export class LeadFormComponent implements OnInit, AfterViewInit {
  closeResult = '';

  @Input() plan:Plan = new Plan({leadsPerMonth:-1,platformPrice:-1,pricePerTransfer:-1});
  @ViewChild('content') content = null;
  @Output() emitCloseForm:EventEmitter<boolean> = new EventEmitter();
  private modalRef:undefined | NgbModalRef = undefined;

  public leadInfo:any;
  public leadSource: string[] = [];
  public info: string[] = [];
  constructor(private modalService: NgbModal,private fb: FormBuilder,) {}

  ngAfterViewInit() {
    this.modalRef = this.modalService.open(this.content, { size: 'lg', backdrop: 'static' ,ariaLabelledBy: 'modal-basic-title'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(){
    this.leadInfo = this.fb.group({
      planName:this.plan.planName,
      name:undefined,
      phone:undefined,
      email:undefined,
      leadCount:undefined,
      crmLeadCount:undefined,
      crm:undefined,
      agent:undefined,
      leadSource:[],
      info:[]
    }) 
  }

  closeForm() {
    this.emitCloseForm.emit(true);
    this.modalRef?.dismiss();
  }

  submit() {
    this.leadInfo.get('leadSource').setValue(this.leadSource);
    this.leadInfo.get('info').setValue(this.info);
    console.log(this.leadInfo.value);
    let output = '';
    for(let key in this.leadInfo.value) {
      if(Array.isArray(this.leadInfo.value[key])) {
        output+=`\r\n${key}:`;
        this.leadInfo.value[key].forEach((item:string)=>{
          output+=`${item},`;
        })
      } else {
        output+=`\r\n${key}: ${this.leadInfo.value[key]}`
      }

    }
    alert(output);
    this.modalRef?.dismiss();
    this.emitCloseForm.emit(true);
  }

  addToLeadSource(event:Event) {
    const target = event.target as HTMLInputElement;
    if(target.checked) {
      this.leadSource.push(target.value) 
    } else  {
      const index = this.leadSource.indexOf(target.value);
      this.leadSource.splice(index,1);
    }
    console.log(this.leadSource);
  }

  addToInfo(event:Event) {
    const target = event.target as HTMLInputElement;
    if(target.checked) {
      this.info.push(target.value) 
    } else  {
      const index = this.info.indexOf(target.value);
      this.info.splice(index,1);
    }
  }
}
