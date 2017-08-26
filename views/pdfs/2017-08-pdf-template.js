const escape = require('escape-html');

const template =

'<div class="report"> \
{{#each report}} \
		<h2 style="font-family: sans-serif;">{{appName}}</h2>\
		{{#if reference}}\
			<p style="font-family: sans-serif;">Reference: {{reference}}</p> \
		{{/if}} \
		{{#if firstname}} \
			<p style="font-family: sans-serif;">Report generated by {{firstname}} {{lastname}} at hematogones.com</p> \
		{{/if}}\
		<p style="font-family: sans-serif;">Timestamp: {{createdAt}}</p>\
		{{#each reportFields}} \
			{{#unless name}} \
			<h3 style="font-family: sans-serif;">Report</h3>\
			<p style="font-family: sans-serif;">{{{text}}}</p> \
				<br /><br /> \
			{{else}} \
				<h3 style="font-family: sans-serif;">{{name}}</h3> \
				<p style="font-family: sans-serif;">{{{text}}}</p> \
				<br /><br /> \
			{{/unless}} \
		{{/each}} \
			{{/each}} \
</div>';

module.exports = template;
