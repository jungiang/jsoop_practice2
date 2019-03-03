

class Modal{
	//constructor takes in 3 arguments: the modal shadow dom element, the modal body dom element, and the modal message dom element
	//Modal will have a property called onClose that will eventually be set to a callback set by the outside
	constructor( modalShadow, modalBody, modalMessage){
		this.shadow = modalShadow;
		this.body = modalBody;
		this.message = modalMessage;
		this.onClose = null;

		this.hide = this.hide.bind(this);
	}
	//takes in no arguments.
	//returns nothing
	//shows the given modal shadow and the given modal body
	show(){
		$(this.shadow).show();
		$(this.body).show();
		return;
	}
	//takes in no arguments
	//returns nothing
	//hides the given modal shadow and the given modal body
	hide(){
		$(this.shadow).hide();
		$(this.body).hide();
		return;
	}
	//takes in a string that it then puts inside the text of the modal message element
	//returns nothing
	updateContents( string ){
		$(this.message).text(string);
		return;
	}
	//takes in no arguments
	//returns nothing
	//hides the modal, removes all existing click handlers from the modal shadow
		//and adds 2 click handlers to the modal shadow: 
			//one that calls whatever callback was assigned to this object's onClose handler
			//calls this object's hide method.  Make sure to use bind to make it correctly bind to the object
				//this.FUNCTIONNAME.bind( this )
			//otherwise it won't work correctly
	init(){
		this.hide();
		$(this.shadow).off('click');
		$(this.shadow).on('click', this.onClose);
		$(this.shadow).on('click', this.hide);
		return;
	}

}