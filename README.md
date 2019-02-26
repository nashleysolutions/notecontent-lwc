# notecontent-lwc
Idea is to create a component that can enter and save basic ContentNote text from a rich text LWC input.

The Notescomp component, uses the standard LWC "lightning-record-edit-form" and some saves the most basic field information for the note data.

NOTE: You must enable "ContentNote" object via the setup in your salesforce org otherwise this component will not work!

The Notescomp uses the js-base64 external script, loading and importing it as a static resource, in order to save properly the data coming from user input into the lightning-rich-text-input component.

Super exciting.. Enjoy...


