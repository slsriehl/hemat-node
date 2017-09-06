const escape = require('escape-html');

const template =

'<div class="report"> \
{{#each report}} \
<div style="width: 100%; background-color: rgba(148, 110, 175, 0.3); padding: 1rem;"> \
		<h2 style="font-family: sans-serif;">{{appName}}</h2>\
		{{#if reference}}\
			<p style="font-family: sans-serif;">Reference: {{reference}}</p> \
		{{/if}} \
		{{#if firstname}} \
			<p style="font-family: sans-serif;">Report generated by {{firstname}} {{lastname}} at hematogones.com</p> \
		{{/if}}\
		<p style="font-family: sans-serif;">Timestamp: {{createdAt}}</p>\
		</div> \
		{{#each reportFields}} \
				<p style="font-family: sans-serif;">{{{text}}}</p> \
		{{/each}} \
			{{/each}} \
</div>';

module.exports = template;
