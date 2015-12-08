# Changelog - DMart

### v0.0.1

* Global header and footer.

### v0.0.2

* Removed DMart Voucher from Footer payments list.
* Class name modified on Checkout header for parent div element of "delivery code".
* Visa icon added on Checkout footer.
* Added ".js-search-field" to ".search-toolbar__field" on header.
* Added ".margin-reset" class name on Checkout Header.
* Added "Logged in and Logged out" components. Read the comments in the HTML Source.
* Removed duplicated header "temporary sticky header" and made some class changes on header.

### v0.0.3

* Registration, Signin, OTP and Choose Location.
* Added ".header-dropdown" component on header for signin and register popover.
* Removed Enquire.js to avoid conflicts.
* Removed Twitter icon on footer.
* Added "#footerNewsletter" on footer newsletter form.

### v0.1.0

* Bower library hot-fix for jQuery Validation.
* Moving to a second level versioning to easier hot-fix release.
* Added OTP validation for Checkout as guest.
* Added Link Mobile Number page for social registered users.
* Added Main navigation
* Change Password screen added.
* Removed email field from forgot password modal.
* Checkbox added to T&C in register screen.
* Infy bugs resolved.
* Terms and conditions text changed in header popover. Made it as T&C.

### v0.1.1

* Registration
* Sign-in
* Choose Location
* Account Verification (OTP)
* Change Password
* Link Mobile Number

### v0.2.0

* PLP & PDP pages for Apparel, Grocery and Household.
* Made attribute changes 'input' for '.js-signin-otp' elements.
* "MasterCard" text added to Mastercard Logo.
* Zoom Functionality on Product Details pages.
* Modified '.header-component__primary' to fit change in design.
* Header transition issue fixed. Added 'img-responsive' class to header logo image. 
* PLP product name and brand hyperlinked.
* Replaced 'Notify Me' with disabled 'Add to Cart' button for out of stock product in PLP.
* Changed 'Add to Cart' state after scroll and added 4sec delay on mouseout of card in PLP.
* Resolved z-index issue for add to list in PLP.

### v0.2.1

* 'sizeGuideModal' link on 'Product Apparel' details section.
* '.quick-product-available' and '.quick-product-not-cod' element hidden by default.
* '.pdp-alternate-list' grid for medium changed on all PDP.

### v0.2.2

* '.product-out-of-stock-image-disabled' element 'Out Of Stock' separated from the image, on PLP.
* On PDP, 'Write a Review' label changed to button and form slides down once button clicked.

### v0.3.0

* '.common-search' component on Search result page for Apparel and Grocery.
* Search result count added in Breadcrumb.
* Wrapped anchor tag for '.cart-price-label' on header.
* '.header-dropdown--minicart' component for Minicart dropdown on header.
* '#locationModal' placed on header.
* '.header-dropdown--search' Search dropdown placed on header.
* Removed Voice Icon on Search field.
* Added type 'email' to email field on Registration form.
* Validate and form JS re-factored.

### v0.4.0

* Delivery Type and Order Confirmation pages.
* '.active' class added on li's from '.progress-indicator'.
* Added class '.js-modal-dialog-esc' every '.modal-dialog' except location modal.
* made class changes on header checkout.
* Added "Cancel" button on PDP write a review form.
* Added close "x" icon on generic alert box.
* Added '.footer-credibility--sprite-icon' on footer.
* AE-1330, AE-1574 fixed. Refer DMart's Jira.

### v0.5.0

* Dashboard page.
* Fixed - AE-2054, AE-1577, AE-1969, AE-1576 & AE-2120.
* Breadcrumb grid changed.
* Added '.js-show-cart-count' class for Added to Cart on PDP.
* Added '.product-details__btn-viewcart' element.
* Added '.variant-label' label if variant is single.
* Payment mode implemented on Delivery Type.
* '.cart-summary-delivery' Shopping Cart Summary component UI changed on Delivery Type.
