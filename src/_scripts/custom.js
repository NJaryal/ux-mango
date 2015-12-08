"use strict";
(function($) {
	$(document).ready(function () {
		$("#salesData, #orderIncomplete, #visitorsData, #visitedCategories, #sellerRate, #latestCustomer").css("display", "none");

		$("#Sales").click(function(){
			$(".matter").css("display", "none");
			$("#visitorsData, #orderIncomplete, #visitedCategories, #latestCustomer, #sellerRate").css("display", "none");
			$("#salesData").css("display", "block");

		});


		$("#Visitor").click(function(){
			$(".matter, #salesData, #visitedCategories, #latestCustomer, #sellerRate").css("display", "none");
			$("#visitorsData").css("display", "block");

		});

		$("#incompleteOrders").click(function(){
			$(".matter").css("display", "none");
			$("#salesData, #visitorsData, #visitedCategories, #latestCustomer, #sellerRate").css("display", "none");
			$("#orderIncomplete").css("display", "block");

		});

		$("#mostVisited").click(function(){
			$(".matter").css("display", "none");
			$("#salesData, #visitorsData, #orderIncomplete, #latestCustomer, #sellerRate").css("display", "none");
			$("#visitedCategories").css("display", "block");

		});

		$("#customersData").click(function(){
			$(".matter").css("display", "none");
			$("#salesData, #visitorsData, #orderIncomplete, #sellerRate").css("display", "none");
			$("#latestCustomer").css("display", "block");

		});

		$("#bestSeller").click(function(){
			$(".matter").css("display", "none");
			$("#salesData, #visitorsData, #orderIncomplete, #latestCustomer").css("display", "none");
			$("#sellerRate").css("display", "block");
		});
	});
})(jQuery);
