$(document).ready(function(){
	var userId;


	//handler and ajax call to search db for keyword matching search
	$('#doSearch').on('submit', function(event) {
		event.preventDefault();
		//console.log('foo');
		$.ajax({
			url: '/snippets/search',
			type: 'POST',
			data: {
				thisSearch: $('#search').val()
			}
		})
		.done(function(response) {
			console.log(response);
			$('.searchresults .rowselect').remove();
			if(response.snips.length) {
				userId = response.loggedIn;
				loopAppendResults(response.snips, 'all');
			} else {
				var newRow = $('<tr class="rowselect">');
				var columns = '<td><span>No Results</span></td><td></td><td></td>';
				newRow.append(columns);
				$('.searchresults').append(newRow);
			}
		});
	});

	var createTagIt = function(value) {
		//remove the tagit ul
		if($('.tagit').length) {
			$('.tagit').remove();
		}
		//remove the ent_key field
		if($('#ent_key').length) {
			$('#ent_key').remove();
		}
		//re-create the ent_key field
		var ent_key = $('<input class="form-control" id="ent_key" name="tags" data-role="tags_input" />');
		//append the new ent_key field to the html
		$('#ent_key_container').append(ent_key);
		//add the initial tags to ent_key
		$('#ent_key').attr('value', value);
		//instantiate the tagit field on ent_key
		$('#ent_key').tagit({
			allowSpaces: true
		});
	}

	var emptyFormAlert = function() {
		if(!$('#outPut-2').val() && !$('#outPut-1').val() && !$('#outPut-4').val()) {
			alert('The form is empty.');
			return true;
		} else {
			return;
		}
	}
	//handle click on a search result
	$(document).off('click', '.snippet-result').on('click', '.snippet-result', function(event) {
		if($('#outPut-2').val() || $('#outPut-1').val() || $('#outPut-4').val()) {
			var myConfirm = confirm("Viewing this snippet will wipe out the text you're currently working with.  Do you want to continue?");
			if(myConfirm) {
				//console.log('myconfirm positive');
				clearNonFormPanel();
				return appendToTextAreas($(this));
			} else {
				//console.log('myconfirm negative');
				return false;
			}
		} else {
			//console.log('the textareas are empty');
			return appendToTextAreas($(this));
		}
	});

	var appendToTextAreas = function(snippetResult) {
		if($('#pdf-report').length) {
			$('#pdf-report').remove();
		}
		if($('#download-pdf').length) {
			$('#download-pdf').remove();
		}
		//console.log('appendToTextAreas fired');
		//console.log(snippetResult.parent().parent().hasClass('u-1'));
		//console.log('value ' + snippetResult.attr('value'));
		var itemObj = JSON.parse(snippetResult.attr('value'));
		//console.log(itemObj);
		//console.log(itemObj.micros);
		//val to show text
		$('#outPut-2').val(he.decode(itemObj.micros));
		$('#outPut-1').val(he.decode(itemObj.finals));
		$('#outPut-4').val(he.decode(itemObj.comments));
		//append to set value (weird, I know.  Shouldn't either append or val do it?  But it seems not, especially after clearing the textboxes and repopulating them)
		$('#outPut-2').append(he.decode(itemObj.micros));
		$('#outPut-1').append(he.decode(itemObj.finals));
		$('#outPut-4').append(he.decode(itemObj.comments));
		//set values of hidden inputs
		$('#user-holder').append(snippetResult.parent().parent().attr('data-user'));
		$('#class-holder').append(snippetResult.parent().parent().find('.spcClass-res').text());
		$('#keyword-holder').append(snippetResult.parent().parent().find('.keyword-res').text());
		$('#entry_id-holder').append(snippetResult.parent().parent().attr('id'));

		if(snippetResult.parent().parent().attr('data-user') == userId && !$('#deleteSnippet').length && !$('#updateSnippet').length) {
			//append delete and update buttons if the snippet belongs to the user
			var deleteButton = $('<a class="btn btn-lg btn-outline-danger p-2" id="deleteSnippet">');
			deleteButton.append('<small>Delete</small>');
			var updateButton = $('<a class="btn btn-lg btn-outline-info p-2 updateit" id="updateSnippet">');
			updateButton.append('<small>Update</small>');
			$('.standard-button-box').append(updateButton);
			$('.standard-button-box').append(deleteButton);
		} else if(snippetResult.parent().parent().attr('data-user') != userId && $('#deleteSnippet').length && $('#updateSnippet').length) {
			$('#deleteSnippet').remove();
			$('#updateSnippet').remove();
		}
	}

	// update results with {site} or {value} placeholders on focus
		$('#outPut-2').on('click', function(){
				var txt = $(this).val();
				var site = $('#outPut-1').val();
				var dump;
				if (txt.indexOf("{site}") >=0){
						dump = prompt('Enter location');
						console.log(dump);
						txt = txt.replace(/{site}/, "'"+dump+"'");
						site = site.replace(/,.*,/, ", "+dump.toUpperCase()+",");
				}

				if (txt.indexOf("{value}") >=0){
						dump = prompt('Enter value');
						txt = txt.replace(/{value}/, dump);
				}
				$('#outPut-2').val(txt);
				$('#outPut-1').val(site);
				$(this).blur;
		});

		//show case reference dropdown on write report click
		$('#writeReport').on('click', function(event) {
			if(!emptyFormAlert()) {
				$('#caseRefDiv').attr('style', 'display: block;');
				var textToPass = 'REPORT:\n\nMICRO:\n' + $('#outPut-2').val() +'\n\nFINALS:\n'+$('#outPut-1').val()+'\n\nCOMMENTS:\n'+$('#outPut-4').val();

				$('#outPut-combine').val(textToPass);
				$('#combined-report').modal("show");

				dataObj.singleSection = $('#outPut-combine').val();
				makeCreatePdfBtn();
			}

		});

		//save snippet as (open and populate modal)
		$('#saveAsSnippet').on('click', function(event) {
			if(!emptyFormAlert()) {
				appendSaveBtn();
				$('#addnew').modal('show');
				openSaveWithContent();
			}
		});

		$('#openhelp').on('click', function(event) {
			appendSaveBtn();
			createTagIt('');
			$('#addnew').modal('show');
		});

		var appendUpdateBtn = function() {
			$('#edit-snippet-button-box').empty();
			var updateBtn = $('<button class="btn btn-primary p-1" id="update-snippet" type="button">Update Snippet</button>');
			$('#edit-snippet-button-box').append(updateBtn);
		}
		var appendSaveBtn = function() {
			$('#edit-snippet-button-box').empty();
			var saveNewBtn = $('<button class="btn btn-primary p-1" type="submit">Save Snippet</button>');
			$('#edit-snippet-button-box').append(saveNewBtn)
		}
		//open save as modal while populating selected content
		var openSaveWithContent = function(withId) {
			//fill in all the fields with values from the displayed snippet (some in hidden inputs)
			//console.log('class holder val ' + $('#class-holder').text());
			$('#ent_class').val($('#class-holder').text()).change();
			$('#ent_micro').val($('#outPut-2').text());
			$('#ent_final').val($('#outPut-1').text());
			$('#ent_comment').val($('#outPut-4').text());
			//loop existing tags to insert spaces for good rendering
			var tagLoop = function(extText) {
				var textArr = extText.split(',');
				return textArr.join(', ');
			}
			createTagIt(tagLoop($('#keyword-holder').text()));
			if(withId) {
				var idInput = $('<input hidden id="ent_id" name="ent_id" />');
				idInput.attr('value', $('#entry_id-holder').text());
				$('#ent_new').prepend(idInput);
			}
		}

		//update snippet
		$(document).off('click', '#updateSnippet').on('click', '#updateSnippet', function(event) {
			if(!emptyFormAlert()) {
				appendUpdateBtn();
				$('#addnew').modal('show');
				openSaveWithContent(true);
			}
		});
		var clearNonFormPanel = function() {
			//console.log('clearNonFormPanel fired');
			$('#outPut-2').text('');
			$('#outPut-1').text('');
			$('#outPut-4').text('');
			$('#class-holder').text('');
			$('#keyword-holder').text('');
			$('#entry_id-holder').text('');
			$('#user-holder').text('');

			$('#outPut-2').val('');
			$('#outPut-1').val('');
			$('#outPut-4').val('');
			$('#class-holder').val('');
			$('#keyword-holder').val('');
			$('#entry_id-holder').val('');
			$('#user-holder').val('');
		}
		var loopAppendResults = function(results, position, update) {
			for(var i = 0; i < results.length; i++) {
				var newRow = $('<tr class="rowselect" id="' + results[i].id + '" data-user="' + results[i].userId + '">');
				var columns = "<td><span class='spcClass-res'>" + results[i].spcClass + "</span></td><td><span class='keyword-res'>" + results[i].keywords + "</span></td><td><button value='" + results[i].text + "' class='snippet-result' type='button'>Copy/Edit/Delete</button></td>";
				newRow.append(columns);
				if(update) {
					$('.rowselect#' + results[i].id).remove();
				}
				if(position === 'top') {
					$('.searchresults tr:eq(0)').after(newRow);
				} else {
					$('.searchresults').append(newRow);
				}

			}
		}
		$(document).off('click', '#update-snippet').on('click', '#update-snippet', function(event) {
			$('#addnew').modal('hide');
			$.ajax({
				url: '/snippet/update',
				type: 'POST',
				data: $('#ent_new').serialize()
			})
			.done(function(response) {
				console.log(response);
				if(response.snips) {
					$('#ent_new')[0].reset();
					clearNonFormPanel();
					loopAppendResults(response.snips, 'top', true);
					frontEndMessage(null, 'Your snippet was successfully saved.', 'message-success');
				} else if (response == "You can't update this snippet because you don't own it.") {
					frontEndMessage(null, response, 'message-fail');
				} else {
					frontEndMessage(null, 'Your snippet has not been saved.  Press the Update button to try again.', 'message-fail');
				}

			});
		});

		// NEW ENTRY SUBMIT

		$("#ent_new").on("submit", function(e){
			e.preventDefault(); // avoid to execute the actual submit of the form.
			//console.log('ent new serial' + $('#ent_new').serialize());
			//console.log('ent key text' + $('#ent_key').text());
			//console.log('ent key val' + $('#ent_key').val());
			$.ajax({
				type: "POST",
				url: '/snippet/save',
				data: $("#ent_new").serialize()
			})
			.done(function(response) {
				console.log(response);
				if(response.snips) {
					$('#addnew').modal('hide');
					loopAppendResults(response.snips, 'top');
					frontEndMessage(null, 'Your snippet has been saved.', 'message-success');
					$('#ent_new')[0].reset();
					clearNonFormPanel();
				} else {
					$('#addnew').modal('hide');
					frontEndMessage(null, 'Your snippet has not been saved.  Press the Add New or Save As button to try again.', 'message-fail');
				}
			});
		});

		//delete a snippet that you own
		$(document).off('click', '#deleteSnippet').on('click', '#deleteSnippet', function(event) {
			if(!emptyFormAlert()) {
				if(confirm('Are you sure you want to delete this snippet?')) {
					var data = {
						ent_id: $('#entry_id-holder').text(),
						user_id: $('#user-holder').text()
					}
					$.ajax({
						url: '/snippet/delete',
						type: 'POST',
						data: data
					})
					.done(function(response) {
						console.log(response);
						if(response.removeId) {
							clearNonFormPanel();
							$('.rowselect#' + response.removeId).remove();
							frontEndMessage(null, 'Your snippet has been deleted.', 'message-success');
						} else {
							frontEndMessage(null, 'The requested snippet was not deleted.  It may not belong to you.', 'message-fail');
						}
					});
				} else {
					return;
				}
			}
		});


		// Stop playing how-to video on modal close
		$(function(){
			$("body").on('hidden.bs.modal', function (e) {
				var $iframes = $(e.target).find("iframe");
				$iframes.each(function(index, iframe){
					$(iframe).attr("src", $(iframe).attr("src"));
				});
			});
		});

});






/**
 * Created by chandrakrishnan on 7/8/2017.
 */
