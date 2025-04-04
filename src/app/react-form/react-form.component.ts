import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  standalone: false,
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent {
  signUnForm = new FormGroup({
    username: new FormControl('nidhal', Validators.required),
    addmail: new FormControl(null, [Validators.required, Validators.email]),
    skills: new FormArray([]),
  });

  get formSkills() {
    return <FormArray>this.signUnForm.get('skills');
  }

  addSkill() {
    let ctrl = new FormControl(null, Validators.required);
    (<FormArray>this.signUnForm.get('skills')).push(ctrl);
  }
}
