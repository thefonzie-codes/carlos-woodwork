<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import Instagram from '$lib/components/instagram.svelte';
	import DmIcon from '$lib/components/dm_icon.svelte';
</script>

<!-- <Header title="El Tallerico del Lillico" /> -->
<main class="p-20 flex flex-col flex-wrap justify-center align-items-center bg-stone-100 max-w-7xl">
	<div>
		<a class="text-5xl font-bold gilda-display-regular" href="/">El Tallerico del Lillico</a>
	</div>
	<div class="my-5 flex align-middle h-full">
		<img
			class="w-1/2 rounded-xl shadow-xl object-scale-down"
			src="/images/wood_vase_orange.jpg"
			alt="wood-vase-hero"
		/>
		<section class="m-5 flex flex-col flex-wrap justify-center">
			<div class="flex flex-row flex-wrap text-2xl p-5 bg-white rounded-xl justify-center">
				<img
					class="h-auto max-w-xs rounded-xl shadow-xl w-3/12 m-4 hover:scale-110 transition-transform duration-500 ease-in-out"
					src="/images/boat_on_balcony.jpg"
					alt="wood-vase-hero"
				/>
				<img
					class="h-auto max-w-xs rounded-xl shadow-xl w-3/12 m-4 hover:scale-110 transition-transform duration-500 ease-in-out"
					src="/images/fennec_hand.jpg"
					alt="wood-vase-hero"
				/>
				<img
					class="h-auto max-w-xs rounded-xl shadow-xl w-3/12 m-4 hover:scale-110 transition-transform duration-500 ease-in-out"
					src="/images/book_holder.jpg"
					alt="wood-vase-hero"
				/>
			</div>
			<h2 class="text-xl w-full font-bold gilda-display-regular p-5 text-center">
				Artisan Handcrafted Woodwork
			</h2>
		</section>
	</div>
	<footer class="flex flex-row flex-wrap justify-end">
		<div class="flex flex-col">
			<div class="flex flex-row flex-wrap justify-end">
				<a
					href="https://www.instagram.com/el_tallerico_del_lillico/"
					target="_blank"
					class="btn mx-5"
				>
					<Instagram />
				</a>
				<a href="https://ig.me/m/el_tallerico_del_lillico/" target="_blank" class="btn">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8"
						><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
							d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
						/></svg
					>
				</a>
			</div>
            <p class="my-5 text-gray-500">&copy; 2024 El Tallerico del Lillico. All Rights Reserved.</p>
		</div>
	</footer>
</main>
