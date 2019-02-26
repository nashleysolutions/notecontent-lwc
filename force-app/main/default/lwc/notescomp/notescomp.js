import { LightningElement, track, api} from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import Base64 from '@salesforce/resourceUrl/jsbase64';


export default class Notescomp extends LightningElement {

    @api recordId;
    @api objectNameApi;
    @track noteId;
    @track noteContent = '';
    fields = ['Title', 'Content'];

    @api
    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        Promise.all([
        loadScript(this, Base64 + '/base64.js')

        ]).then(() => {
            const noteContentEncoded = window.Base64.encode(this.noteContent);
            //console.log('encoded', noteContentEncoded);
            //console.log(JSON.stringify(fields));
            fields.Content = noteContentEncoded;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
         });

        
    }

    handleSuccess(event) {
        this.noteId = event.detail.id;
        console.log('new record id', this.noteId);
    }

    handleNoteChange(event) {
        this.noteContent = event.target.value;
    }




}