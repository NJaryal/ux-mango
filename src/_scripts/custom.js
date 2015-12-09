(function(dmUIConfig) {
  $(document).ready(function () {


    $('.mainbar-content').css('display', 'none');
    $('#dashboardContent').css('display', 'block');

    $('.js-dashboard-cta').click(function () {
      $('.mainbar-content').css('display', 'none');
      $('#dashboardContent').css('display', 'block');
    });

    $('.js-employee-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#employeeServicesContent').css('display', 'block');
    });

    $('.js-timesheet-cta').click(function(){
      $('#nav li').removeClass('open');
      $('#nav li .js-timesheet-cta').parent().addClass('open');
      $('.mainbar-content').css('display', 'none');
      $('#timesheetContent').css('display', 'block');
    });

    $('.js-allocation-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#allocationContent').css('display', 'block');
    });

    $('.js-hr-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#hrManageContent').css('display', 'block');
    });

    $('.js-learning-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#learningContent').css('display', 'block');
    });

    $('.js-infra-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#infraContent').css('display', 'block');
    });

    $('.js-opportunity-cta').click(function(){
      $('.mainbar-content').css('display', 'none');
      $('#excitingContent').css('display', 'block');
    });

    $('#nav li a').on('click', function () {
      $('#nav li').removeClass('open');
      $(this).parent().addClass('open');
    });
  });
}(DM_UI_CONFIG));
