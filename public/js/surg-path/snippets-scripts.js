$(document).ready(function(){
	var userId;
	//handler and ajax call to search db for keyword matching search
	$('#doSearch').on('submit', function(event) {
		event.preventDefault();
		console.log('foo');
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

	var emptyFormAlert = function() {
		if(!$('#outPut-1').val() && !$('#outPut-2').val() && !$('#outPut-4').val()) {
			alert('The form is empty.');
			return true;
		} else {
			return;
		}
	}
	//handle click on a search result
	$(document).off('click', '.snippet-result').on('click', '.snippet-result', function(event) {
		if($('#outPut-1').val() || $('#outPut-2').val() || $('#outPut-4').val()) {
			if(confirm("Viewing this snippet will wipe out the text you're currently working with.  Do you want to continue?")) {
				clearNonFormPanel();
				return appendToTextAreas($(this));
			} else {
				return false;
			}
		} else {
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
		console.log(snippetResult.parent().parent().hasClass('u-1'));
		console.log('value ' + snippetResult.val());
		var itemObj = JSON.parse(snippetResult.val());
		console.log(itemObj);
		$('#outPut-1').append(itemObj.micros);
		$('#outPut-2').append(itemObj.finals);
		$('#outPut-4').append(itemObj.comments);
		var userClass = snippetResult.parent().parent();
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
		$('#outPut-1').on('focus', function(){
				var txt = $(this).val();
				var site = $('#outPut-2').val();
				var dump;
				if (txt.indexOf("{site}") >=0){
						dump = prompt('Enter location');
						console.log(dump);
						txt = txt.replace(/{site}/, "'"+dump+"'");
						site = site.replace(/,.*,/, ", "+dump.toUpperCase()+",");
				} else if (txt.indexOf("{value}") >=0){
						dump = prompt('Enter value');
						txt = txt.replace(/{value}/, dump);
						site = site.replace(/,.*,/, ", "+dump.toUpperCase()+",");
				}
				$('#outPut-1').val(txt);
				$('#outPut-2').val(site);
				$(this).blur;
		});

		//show case reference dropdown on write report click
		$('#writeReport').on('click', function(event) {
			if(!emptyFormAlert()) {
				$('#caseRefDiv').attr('style', 'display: block;');
				var textToPass = 'REPORT:\n\nMICRO:\n' + $('#outPut-1').val() +'\n\nFINALS:\n'+$('#outPut-2').val()+'\n\nCOMMENTS:\n'+$('#outPut-4').val();

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
			console.log('class holder val ' + $('#class-holder').text());
			$('#ent_class').val($('#class-holder').text()).change();
			$('#ent_micro').val($('#outPut-1').text());
			$('#ent_final').val($('#outPut-2').text());
			$('#ent_comment').val($('#outPut-4').text());
			//loop existing tags to insert spaces for good rendering
			var tagLoop = function(extText) {
				var textArr = extText.split(',');
				return textArr.join(', ');
			}
			//add the initial tags to the hidden input tag field
			$('#ent_key').attr('value', tagLoop($('#keyword-holder').text()));
			//instantiate the tag field
			$('#ent_key').tagit({
				allowSpaces: true,
			});

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
			$('#outPut-1').text('');
			$('#outPut-2').text('');
			$('#outPut-4').text('');
			$('#class-holder').text('');
			$('#keyword-holder').text('');
			$('#entry_id-holder').text('');
			$('#user-holder').text('');
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
					$('#ent_key').removeAttr('value');
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
			console.log('ent new serial' + $('#ent_new').serialize());
			console.log('ent key text' + $('#ent_key').text());
			console.log('ent key val' + $('#ent_key').val());
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
					$('#ent_key').removeAttr('value');
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

});






/**
 * Created by chandrakrishnan on 7/8/2017.
 */
