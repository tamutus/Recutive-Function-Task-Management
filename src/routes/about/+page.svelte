<script lang="ts">
	import { averageColors, parseColorHexString } from '$lib/scripts/colors';

	const newColor = averageColors('f472b6', 'fde047');
</script>

<div>
	<h1>About the Recutive Function Task Management App</h1>

	<p>The capitalists hacked your brain. Hack it back!</p>
	<p>
		This app is being developed to help myself and you organize what we should do with our time.
		RF's design is heavily informed by cognitive science. For transparency, the principles we're
		using will be laid out here. You can reach out to me if you are concerned with anything here, or
		if you would like to sophisticate it.
	</p>

	<h2>Color Psychology</h2>

	<p>
		Different parts of the site are given different colors in order to trigger psychological
		reactions.
	</p>

	<ul>
		<li class="bg-red-500">
			<h3>Red</h3>
			<p>
				Red literally energizes you, making it perfect for the most important task. Getting you
				pumped to do what's in front of you is great!
			</p>
		</li>
		<li class="bg-orange-400">
			<h3>Orange</h3>
			<p>
				Priority. Second in urgency to red, and your goals are a nice backdrop for doing your
				current task. Having your priorities in mind when you're doing a task isn't a distraction,
				so a strong color for it is agreeable to productivity.
			</p>
		</li>
		<li class="bg-yellow-300">
			<h3>Yellow</h3>
			<p>
				Creativity-inspiring and happily energizing. So, energies are yellow by default (but an
				early target for color customization)
			</p>
		</li>
		<li class="bg-green-500">
			<h3>Green</h3>
			<p>
				Representing growth and life, green is a good color to represent tags, which facilitate the
				branching and connection of ideas.
			</p>
			<div class="bg-lime-300">
				<h4>Lime</h4>
				<p>
					Eager and rebellious, the right energy for deciding you're going to accomplish something
					to change the world. Projects are lime.
				</p>
			</div>
		</li>
		<li class="bg-blue-500">
			<h3>Blue</h3>
			<p>
				Creates calm. Opposite of red, and therefore the correct color for tasks that you don't need
				to be focused on (the not-now ones).
			</p>
		</li>
		<li class="bg-purple-500">
			<h3>Purple</h3>
			<p>
				Purple is luxurious. Leadership material. Gaining skills makes one feel more important. Life
				gets easier, because
			</p>
			<p>better skills => faster work => more leisure.</p>
		</li>
		<li class="bg-amber-700">
			<h3>Brown</h3>
			<p>Serious and reliable.</p>
		</li>
		<li class="bg-pink-400">
			<h3>Pink</h3>
			<p>
				A color of love. What better color for the default to represent people by? Global average
				skin color, calculated by one person to be <a
					href="https://www.arrieta.science/post/average-skin-color"
					rel="external">#DDCBA4</a
				> could work. Maybe that will be an option.
			</p>
		</li>
		<li>
			<h3>White</h3>
			<p>Serenity and opportunity</p>
		</li>
		<li class="bg-slate-800 text-gray-100">
			<h3>Black</h3>
			<p>
				Black has depth. Meaning anything to anybody, it is classy, politicized, and simple: a lack
				of light.
			</p>
			<p></p>
		</li>
	</ul>
</div>
