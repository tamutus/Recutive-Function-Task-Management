<script lang="ts">
  
</script>

<slot />

<style>
	:root {
		--taskEditorHeight: 0px;
		--completionInputHeight: 0px;
	}

	#task-submission {
		padding: 50px;
		margin: 30px auto;
		max-width: 1000px;
		/* border-radius: 20px; */
		border: 5px solid purple;
	}
	#task-submitter h4 {
		margin-top: 10px;
	}
	#task-submitter input,
	#task-submitter textarea {
		margin-bottom: 10px;
		width: 100%;
	}
	#tasks-container {
		display: flex;
		flex-flow: row-reverse wrap;
		background-color: rgba(213, 247, 227, 0.205);
		border-radius: 20px;
		padding: 10px;
		transition: max-height 0.4s ease-out;
	}
	#tasks-container.hidden {
		max-height: 0;
	}
	#task-buttons {
		margin-bottom: 15px;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
		height: 50px;
		transition: height 0.4s ease-in-out;
		overflow: hidden;
	}
	#task-buttons.hidden {
		height: 0;
	}
	@media screen and (max-width: 800px) {
		#task-buttons {
			height: 120px;
		}
		#task-buttons a {
			margin-bottom: 10px;
		}
	}
	#task-buttons a {
		margin-left: 30px;
		height: 50px;
		flex: 0 0 115px;
		overflow: hidden;
		transition:
			flex 0.5s ease-in-out,
			margin-left 0.5s ease-in-out;
	}
	#task-buttons a.hidden {
		flex: 0 0 0px;
		margin-left: 0;
	}
	#task-buttons a button {
		width: 115px;
	}
	#task-delete-button button {
		background-color: red;
	}
	#task-return-message {
		-webkit-transform: scaleX(0);
		-ms-transform: scaleX(0);
		transform: scaleX(0);
		border-radius: 4px;
		background-color: rgb(49, 92, 47);
		padding: 10px;
	}
	#task-return-message.revealed {
		-webkit-animation: flashMessage 10s;
		animation: flashMessage 10s;
	}
	@-webkit-keyframes flashMessage {
		0%,
		100% {
			-webkit-transform: scale(0, 0);
			transform: scale(0, 0);
		}
		5%,
		95% {
			-webkit-transform: scale(0.8, 0.8);
			transform: scale(0.8, 0.8);
		}
		10%,
		90% {
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
	}
	@keyframes flashMessage {
		0%,
		100% {
			-webkit-transform: scale(0, 0);
			transform: scale(0, 0);
		}
		5%,
		95% {
			-webkit-transform: scale(0.8, 0.8);
			transform: scale(0.8, 0.8);
		}
		10%,
		90% {
			-webkit-transform: scale(1, 1);
			transform: scale(1, 1);
		}
	}
	#task-list {
		flex: 1 1 400px;
		overflow-y: auto;
		max-height: 800px;
	}
	.task {
		cursor: pointer;
		padding: 20px;
		border-radius: 10px 0 0 10px;
		box-sizing: border-box;
		background-color: rgb(222, 164, 255);
		border: 2px solid rgb(76, 24, 160);
		font-size: 20px;
		color: rgb(41, 35, 33);
		transition:
			background-color 0.6s ease-out,
			color 0.6s ease-out,
			border 0.6s ease-out,
			border-radius 0.6s ease-out,
			padding 0.6s ease-out,
			font-size 0.5s ease-in-out,
			margin 0.5s ease-in-out;
	}
	.task:hover,
	.task.active {
		padding: 17px;
		border-radius: 0;
	}
	.task:hover {
		background-color: rgb(72, 252, 132);
		border: 5px solid rgb(9, 138, 52);
	}
	.task.active,
	.task.active:hover {
		color: white;
		border: 5px solid blue;
	}
	.task.active {
		background-color: rgb(72, 165, 252);
	}
	.task.active:hover {
		background-color: rgb(45, 207, 199);
	}
	#task-viewer {
		flex: 1 1 1000px;
		max-width: 90%;
		height: 700px;
		border-radius: 10px;
		border: 7px solid rgb(125, 214, 255);
		background-color: rgb(19, 7, 61);
		color: rgb(155, 218, 255);
		padding: 30px;
		margin-left: 20px;
		transition:
			flex 0.3s ease-out,
			height 0.3s ease-out,
			margin 0.5s ease-in-out;
		overflow-y: auto;
	}
	#task-viewer.minimized {
		flex: 0 1 400px;
		height: 300px;
	}
	#task-viewer.hidden {
		flex: 0 1 0px;
	}
	#task-viewer a {
		color: rgb(181, 111, 252);
	}
	#task-viewer a:hover {
		color: rgb(252, 203, 237);
	}
	#task-viewer #task-name,
	#task-info-container,
	#task-creation,
	#task-completion {
		display: flex;
		flex-flow: row nowrap;
		margin-bottom: 15px;
	}
	.task-data,
	.task-input {
		white-space: nowrap;
		overflow: hidden;
		-webkit-transition:
			width 0.5s ease-in-out,
			border 0.5s ease-in-out,
			padding 0.5s ease-in-out,
			margin 0.5s ease-in-out,
			height 0.5s ease-in-out,
			font-size 0.5s ease-in-out,
			-webkit-box-flex 0.5s ease-in-out,
			transform 0.5s ease-in-out;
		-o-transition:
			width 0.5s ease-in-out,
			border 0.5s ease-in-out,
			padding 0.5s ease-in-out,
			flex 0.5s ease-in-out,
			margin 0.5s ease-in-out,
			height 0.5s ease-in-out,
			font-size 0.5s ease-in-out,
			transform 0.5s ease-in-out;
		transition:
			width 0.5s ease-in-out,
			border 0.5s ease-in-out,
			padding 0.5s ease-in-out,
			flex 0.5s ease-in-out,
			margin 0.5s ease-in-out,
			height 0.5s ease-in-out,
			font-size 0.5s ease-in-out,
			-webkit-box-flex 0.5s ease-in-out,
			-ms-flex 0.5s ease-in-out,
			transform 0.5s ease-in-out;
		flex: 1 1 100%;
		display: inline-block;
	}
	#task-completion {
		justify-content: space-between;
	}
	#task-completion h4 {
		transform-origin: left;
		flex: 0 0 170px;
		width: 170px;
	}
	#task-display em,
	#task-info-text *,
	#task-completion h4,
	#task-completion div p {
		transition:
			font-size 0.5s ease-in-out,
			transform 0.5s ease-in-out,
			flex 0.5s ease-in-out,
			width 0.5s ease-in-out,
			color 0.5s ease-out;
	}
	#task-info-container {
		display: flex;
	}
	#task-info-text {
		white-space: normal;
		width: 50vw;
	}
	#task-completion div p {
		white-space: normal;
		width: 40vw;
	}
	#task-completion textarea {
		height: var(--completionInputHeight);
		white-space: normal;
		box-sizing: border-box;
	}
	.task-data.hidden,
	.task-input.hidden,
	#task-info-text-container.hidden,
	#cancel-button.hidden {
		visibility: visible;
		width: 0;
		flex: 0 1 0px;
		border-left: 0;
		border-right: 0;
		padding-left: 0;
		padding-right: 0;
		margin-left: 0;
		margin-right: 0;
		overflow: hidden;
		white-space: nowrap;
	}

	#task-info-text-container.hidden {
		-webkit-box-flex: 0;
		-ms-flex: 0 1 0px;
		flex: 0 1 0px;
	}
	#task-info-editor-container {
		flex: 0 1 100%;
		-webkit-transition:
			flex 0.5s ease-in-out,
			height 0.5s ease-in-out;
		-o-transition:
			flex 0.5s ease-in-out,
			height 0.5s ease-in-out;
		transition:
			flex 0.5s ease-in-out,
			height 0.5s ease-in-out;
		height: var(--taskEditorHeight);
		display: inline-block;
	}
	#task-info-editor-container.hidden {
		-webkit-box-flex: 0;
		-ms-flex: 0 1 0px;
		flex: 0 1 0px;
		height: 0;
	}
	/*****************************/
	/* Small screen size changes */
	/*****************************/

	@media screen and (max-height: 900px) {
		#task-viewer {
			height: 500px;
		}
	}
	@media screen and (max-width: 900px) {
		#task-viewer * {
			font-size: 14px;
		}
		#task-completion h4 {
			font-size: 17px;
			flex: 0 0 130px;
			width: 130px;
		}
		#task-viewer h3 {
			font-size: 20px;
		}
		.task {
			font-size: 16px;
			margin-bottom: 10px;
		}
	}
	@media screen and (max-width: 600px) {
		#task-viewer {
			padding-right: 10px;
			margin-left: 0px;
		}
		#task-completion h4 {
			transform: rotate(-45deg) translate(-20px, 50px);
			flex: 0 0 100px;
			width: 100px;
		}
		#task-completion div {
			/* transform: translateX(-30px); */
		}
	}
</style>
