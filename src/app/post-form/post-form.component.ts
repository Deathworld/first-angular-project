import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

    postForm: FormGroup;
    errorMessage: string;
    tags: boolean;

    constructor(private formBuilder: FormBuilder,
                private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', [Validators.required]],
            content: ['', [Validators.required]],
            tags: this.formBuilder.array([])
        });
    }

    onSubmit() {
/*        const email = this.signinForm.get('email').value;
        const password = this.signinForm.get('password').value;

        this.authService.signInUser(email, password).then(
            () => {
                this.router.navigate(['/books']);
            },
            (error) => {
                this.errorMessage = error;
            }
        );*/
    }

    getTags(): FormArray{
        return this.postForm.get('tags') as FormArray;
    }

    onAddTag(){
        const newTagControl = this.formBuilder.control(null, Validators.required);
        this.getTags().push(newTagControl);
    }

}
