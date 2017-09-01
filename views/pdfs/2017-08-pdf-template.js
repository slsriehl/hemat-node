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
			{{#if text}} \
				<h3 style="font-family: sans-serif;">{{name}}</h3> \
				<p style="font-family: sans-serif;">{{{text}}}</p> \
			{{/if}} \
		{{/each}} \
			{{/each}} \
</div>';

module.exports = template;
