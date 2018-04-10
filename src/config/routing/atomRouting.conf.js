atomRouting.$inject = [
  '$stateProvider'
];

export default function atomRouting($) {
  /**
   * <ATOM ROUTES>
   */

   /*$.state('atom-landing-page', {
    name: 'atomLandingPage',
     url: '/atom/landingpage',
     templateUrl: 'src/views/atom/landing-page/landing-page.html'//,
     //controller: 'AtomLandingPageController as ctrl',
   });*/

   $.state('atomLandingPage',{
      url: '/atom-landing-page',
      templateUrl: './views/atom/landing-page/landing-page.html',
      controller: 'AtomLandingPageController as ctrl'
      //component: "atomLandingPage"
    });

  /**
   * </ATOM ROUTES>
   */

};
