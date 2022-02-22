
let captionString = `Food prices ≠ February ${day = new Date().getDate()},${day = new Date().getFullYear()}`;

let apple = `🍎`;
let applePrice = 10;
let appleCount = 3;
let appleSalePercent = 7;

let orange = `🍊`;
let orangePrice = 12;
let orangeCount = 2;
let orangeSalePercent = 3;

let kiwi = `🥝`;
let kiwiPrice = 15;
let kiwiCount = 10;
let kiwiCountryPercent = 10;

let applePercentTotal = applePrice * appleCount * appleSalePercent / 100;
let applePriceCount = applePrice * appleCount - applePercentTotal;


let orangePercentTotal = orangePrice * orangeCount * orangeSalePercent / 100;
let orangePriceCount = orangePrice * orangeCount - orangePercentTotal;


let kiwiPercentTotal;
let kiwiPriceCount = (kiwiPrice + kiwiPrice * kiwiCountryPercent / 100) * kiwiCount;

let finalSum = applePriceCount + orangePriceCount + kiwiPriceCount;


document.write(`<div class="content">
<div class="content__heading">
	<h1 class="content__heading-text">${captionString.toUpperCase().replace(`≠`, `-`)}</h1>
</div>
<div class="content__table">
	<div class="content__table-product">
		<h2 class="product-heading">Product</h2>
		<p class="product-info1">${apple}</p>
		<p class="product-info1">${orange}</p>
		<p class="product-info1">${kiwi}</p>
	</div>
	<div class="content__table-product">
		<h2 class="product-heading">Product price</h2>
		<p class="product-info">$${applePrice}</p>
		<p class="product-info">$${orangePrice}</p>
		<p class="product-info">$${kiwiPrice}</p>
	</div>
	<div class="content__table-product">
		<h2 class="product-heading">Product count</h2>
		<p class="product-info">${appleCount}</p>
		<p class="product-info">${orangeCount}</p>
		<p class="product-info">${kiwiCount}</p>
	</div>
	<div class="content__table-product">
		<h2 class="product-heading">Product sale percent</h2>
		<p class="product-info">${appleSalePercent}%</p>
		<p class="product-info">${orangeSalePercent}%</p>
		<p class="product-info">-</p>
	</div>
	<div class="content__table-product">
		<h2 class="product-heading">Product country percent</h2>
		<p class="product-info">-</p>
		<p class="product-info">-</p>
		<p class="product-info">${kiwiCountryPercent}%</p>
	</div>
	<div class="content__table-product">
		<h2 class="product-heading">Price</h2>
		<p class="product-info">$${applePriceCount.toFixed(2)}</p>
		<p class="product-info">$${orangePriceCount.toFixed(2)}</p>
		<p class="product-info">$${kiwiPriceCount.toFixed(2)}</p>
	</div>
</div>
<div class="content__finalsum">
	<h2 class="content__finalsum-final">Final sum: $${finalSum.toFixed(2)}</h2>
</div>
</div>`
);


